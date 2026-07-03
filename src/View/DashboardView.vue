<template>
  <div class="too-App">
    <h3>Todo App</h3>
    <br />
    <div class="input-group">
      <input type="text" v-model="todoTask" placeholder="Enter a todo task" />
      <button @click="createTodo">Create Todo</button>
    </div>
    <h4>Todo Tasks</h4>
    <template v-if="todoList.length > 0">
      <TodoList
        :todos="todoList"
        @toggle="changeCompletion"
        @delete="deleteTodo"
      />
    </template>
    <p v-else>No Todos to Show</p>
  </div>
</template>

<script>
import TodoList from "../components/TodoList.vue";
import { mapState, mapActions } from "vuex";

export default {
  name: "DashboardView",
  components: {
    TodoList,
  },
  computed: {
    ...mapState(["todoList"]),
  },
  data() {
    return {
      todoTask: null,
    };
  },
  mounted() {
    if (this.todoList.length === 0) {
      this.handlefetchtodos();
    }
  },
  methods: {
    ...mapActions([
      "handlefetchtodos",
      "toggleTodoStatus",
      "addTodo",
      "handleRemoveTodo",
    ]),
    changeCompletion(id) {
      this.toggleTodoStatus(id);
    },
    createTodo() {
      if (!this.todoTask) {
        alert("Enter a task");
        return;
      }
      const date = Date.now();
      console.log(date);
      const data = {
        id: date,
        todo: this.todoTask,
        completed: false,
      };
      this.addTodo(data);
    },

    deleteTodo(id) {
      this.handleRemoveTodo(id);
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
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif;
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
  content: "";
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

.input-group {
  display: flex;
  align-items: center;
  background-color: #f8fafc; /* Soft off-white canvas backdrop */
  border: 1.5px solid #e2e8f0;
  border-radius: 12px;
  padding: 4px 6px 4px 16px; /* Strategic padding to isolate elements */
  margin-top: 20px;
  margin-bottom: 24px;
  transition: all 0.25s ease-in-out;
}

/* 2. Interactive States for the Unified Container Box */
.input-group:hover {
  border-color: #cbd5e0;
}

/* Focus Ring moves dynamically down to the entire input group frame */
.input-group:focus-within {
  background-color: #ffffff;
  border-color: #42b983; /* Vue emerald accent green color */
  box-shadow: 0 0 0 4px rgba(66, 185, 131, 0.12);
}

/* 3. Streamlined Clean Input Tag Elements */
.input-group input[type="text"] {
  flex: 1; /* Instructs the text field to claim all empty remaining width */
  border: none;
  background: transparent;
  padding: 12px 0;
  font-size: 16px;
  font-weight: 500;
  color: #2d3748;
  outline: none;
}

.input-group input[type="text"]::placeholder {
  color: #a0aec0;
  font-weight: 400;
}

/* 4. The Integrated Create Action Button Layout */
.input-group button {
  background-color: #42b983;
  color: #ffffff;
  border: none;
  padding: 12px 24px;
  font-size: 15px;
  font-weight: 700;
  border-radius: 8px; /* Slightly tighter curves to fit nested inner rows neatly */
  cursor: pointer;
  white-space: nowrap; /* Prevents the text string from wrapping on small screens */
  transition: all 0.2s ease;
}

.input-group button:hover {
  background-color: #38a169;
}

/* Tactile Click Press Animation Feedback */
.input-group button:active {
  background-color: #2f855a;
  transform: scale(0.96);
}
</style>
