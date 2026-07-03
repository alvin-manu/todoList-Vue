<template>
  <div class="todo-list-container">
    <ul v-if="todos.length > 0">
      <li v-for="todo in todos" :key="todo.id" class="todo-item">
        <span :class="{ 'completed-text': todo.completed }">
          {{ todo.todo }}
        </span>

        <div class="btn-group">
          <i
            class="fa-solid fa-trash-can delete-btn"
            style="color: rgb(210, 0, 0)"
            @click="$emit('delete', todo.id)"
          ></i>

          <button @click="$emit('toggle', todo.id)">
            <span v-if="todo.completed"><i class="fa-solid fa-check"></i></span>
            <span v-else
              ><i class="fa-regular fa-circle" style="color: rgb(210, 0, 0)"></i
            ></span>
          </button>
        </div>
      </li>
    </ul>

    <p v-else class="empty-msg">No tasks for today! Enjoy your time.</p>
  </div>
</template>

<script>
export default {
  name: "TodoList",
  props: {
    todos: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.todo-list-container {
  width: 100%;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.todo-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;
  background-color: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  margin-bottom: 12px;
  transition: all 0.2s ease-in-out;
}

.todo-item:hover {
  background-color: #ffffff;
  border-color: #cbd5e0;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
  transform: translateY(-1px);
}

.todo-item span {
  font-size: 16px;
  color: #2d3748;
  font-weight: 500;
  line-height: 1.4;
  text-align: left;
  padding-right: 15px;
  transition: all 0.2s ease;
}

.completed-text {
  color: #a0aec0 !important;
  text-decoration: line-through #cbd5e0;
}

button {
  background: none;
  border: none;
  padding: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  transition: transform 0.1s ease;
}

button:active {
  transform: scale(0.92);
}

.fa-check {
  color: #42b983;
}

.fa-circle {
  transition: color 0.2s ease;
}

button:hover .fa-circle {
  color: #b00000 !important;
}

.empty-msg {
  text-align: center;
  color: #718096;
  font-size: 15px;
  padding: 30px;
  background: #f7fafc;
  border-radius: 8px;
}
.btn-group {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
}
.delete-btn {
  cursor: pointer;
}
</style>
