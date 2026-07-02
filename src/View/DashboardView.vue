<template>
    <div class="too-App">
       <h3>Todo App</h3>
      <TodoList :todos="myTasks" />
    </div>
</template>

<script>
import TodoList from '../components/TodoList.vue'

export default {
    name: 'DashboardView',
    components: {
    TodoList
  },
  data() {
    return {
      myTasks: [
        { id: 1, text: 'Study Phase 3 Single File Component structures', done: true },
        { id: 2, text: 'Build a working nested slot pipeline demonstration', done: true },
        { id: 3, text: 'Add an interactive task submission input field to the App deck', done: false }
      ]
    }
  }
}
</script>
<style  scoped>

.app-card {
  width: 100%;
  max-width: 450px;
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05);
}
h2 {
  margin-top: 0;
  color: #2d3748;
  border-bottom: 2px solid #e2e8f0;
  padding-bottom: 10px;
}

</style>