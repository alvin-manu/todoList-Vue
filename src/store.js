import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        userToken: sessionStorage.getItem('userToken') || null,
        userid: sessionStorage.getItem('userid') || null,
        todoList: []
    },
    actions: {
        async handleUserLogin(context, credentials) {
            try {
                const response = await fetch("https://dummyjson.com/user/login", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        username: credentials.username,
                        password: credentials.password,
                        expiresInMins: 60,
                    }),
                });

                const data = await response.json();

                if (response.ok && data.accessToken) {
                    sessionStorage.setItem("userToken", data.accessToken);
                    sessionStorage.setItem("userid", data.id);
                    context.commit('SET_AUTH_DATA', data);
                    return true;
                }

                alert(data.message || "Invalid Username or Password");
            } catch (error) {
                console.error(error);
            }
        },
        async handlefetchtodos(context) {
            try {
                const response = await fetch(`https://dummyjson.com/todos/user/${context.state.userid}`);
                const data = await response.json();
                console.log(data)
                context.commit('SET_TODO_LIST', data.todos);
            } catch (error) {
                console.log(error);
            }
        },
        toggleTodoStatus(context, id) {
            context.commit('TOGGLE_TODO', id);
        },
        addTodo(context, data) {
            context.commit('CREATE_TODO', data);
        },
        handleRemoveTodo(context, id) {
            context.commit('DELETE_TODO', id)
        }
    },
    mutations: {
        SET_AUTH_DATA(state, payload) {
            state.userToken = payload.accessToken;
            state.userid = payload.id;
        },
        SET_TODO_LIST(state, payload) {
            state.todoList = payload;
        },
        TOGGLE_TODO(state, id) {
            const targetTodo = state.todoList.find(item => item.id === id);
            if (targetTodo) {
                targetTodo.completed = !targetTodo.completed;
            }
        },
        CREATE_TODO(state, payload) {
            state.todoList.push(payload)
        },
        DELETE_TODO(state, id) {
            state.todoList = state.todoList.filter(item => {
                return item.id !== id
            })
        }

    },
})