<template>
  <div v-if="show" class="modal-overlay" @click.self="$emit('close')">
    <div class="modal-box">
      <h3>Are you absolutely sure?</h3>
      <p>This action cannot be undone. This task will be permanently deleted.</p>
      
      <div class="modal-actions">
        <button class="cancel-btn" @click="$emit('close')">Cancel</button>
        <button class="confirm-btn" @click="$emit('confirm')">Delete</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ConfirmModal',
  props: {
    show: {
      type: Boolean,
      required: true
    }
  }
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}

.modal-box {
  background: #ffffff;
  padding: 24px;
  border-radius: 12px;
  width: 90%;
  max-width: 380px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.1);
  text-align: center;
}

h3 {
  margin: 0 0 10px 0;
  color: #1a202c;
}

p {
  color: #718096;
  font-size: 14px;
  margin-bottom: 24px;
}

.modal-actions {
  display: flex;
  gap: 12px;
  justify-content: center;
}

button {
  padding: 10px 20px;
  font-size: 14px;
  font-weight: 600;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  transition: background 0.2s;
}

.cancel-btn {
  background: #edf2f7;
  color: #4a5568;
}
.cancel-btn:hover { background: #e2e8f0; }

.confirm-btn {
  background: #e53e3e;
  color: white;
}
.confirm-btn:hover { background: #c53030; }
</style>