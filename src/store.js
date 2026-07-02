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
        }
    },
    mutations: {
        SET_AUTH_DATA(state, payload) {
            state.userToken = payload.accessToken;
            state.userid = payload.id;
        },
    },
})