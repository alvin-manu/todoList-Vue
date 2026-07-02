<template>
  <div class="too-App">
    <h3>Todo App</h3>
    <template v-if="todoList.length > 0">
      <TodoList :todos="todoList" @toggle="changeCompletion" />
    </template>
    <p v-else>No Todos to Show</p>
  </div>
</template>

<script>
import TodoList from "../components/TodoList.vue";

export default {
  name: "DashboardView",
  components: {
    TodoList,
  },
  data() {
    return {
      todoList: [],
    };
  },
  mounted() {
    this.fetchtodos();
  },
  methods: {
    async fetchtodos() {
      try {
        const response = await fetch("https://dummyjson.com/todos/user/1");

        const data = await response.json();
        this.todoList = data.todos;
      } catch (error) {
        console.log(error);
      }
    },
    changeCompletion(id) {
      console.log(id);
      this.todoList.filter((item) => {
        if (item.id === id) {
          item.completed = !item.completed;
        }
      });
    },
  },
};
</script>
<style scoped>
.too-App {
  max-width: 800px;
  width: 100%;
  margin: 40px auto;
  padding: 30px;
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04), 0 1px 3px rgba(0, 0, 0, 0.02);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
}

h3 {
  font-size: 26px;
  font-weight: 800;
  color: #1a202c; 
  margin-top: 0;
  margin-bottom: 24px;
  letter-spacing: -0.5px;
  position: relative;
  display: inline-block;
}

h3::after {
  content: '';
  position: absolute;
  bottom: -6px;
  left: 0;
  width: 32px;
  height: 4px;
  background-color: #42b983; 
  border-radius: 2px;
}

p {
  text-align: center;
  color: #718096; 
  font-size: 15px;
  padding: 40px 20px;
  background-color: #f7fafc;
  border: 1.5px dashed #e2e8f0;
  border-radius: 12px;
  margin: 0;
}
</style>
