<template>
  <div class="todo-list-container">    
    <ul v-if="todos.length > 0">
      <li v-for="todo in todos" :key="todo.id" class="todo-item">
        <span :class="{ 'completed-text': todo.done }">
          {{ todo.text }}
        </span>
      </li>
    </ul>
    
    <p v-else class="empty-msg">No tasks for today! Enjoy your time.</p>
  </div>
</template>

<script>
export default {
  name: 'TodoList',
  props: {
    todos: {
      type: Array,
      required: true
    }
  },
  
}
</script>

<style scoped>
.todo-list-container {
  background: #edf2f7;
  padding: 20px;
  border-radius: 8px;
  border: 1px solid #cbd5e0;
}
ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}
.todo-item {
  background: white;
  padding: 12px;
  margin-bottom: 8px;
  border-radius: 6px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.02);
}
.completed-text {
  text-decoration: line-through;
  color: #a0aec0;
}
.empty-msg {
  color: #718096;
  font-style: italic;
}
</style>
