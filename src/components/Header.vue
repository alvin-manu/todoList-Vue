<template>
  <header class="main-header">
    <div class="header-container">
      <div class="header-brand">
        <i class="fa-solid fa-list-check logo-icon"></i>
        <h2>Todo App</h2>
      </div>

      <div class="header-actions">
        <button @click="logout" class="logout-btn" title="Sign Out">
          <i class="fa-solid fa-right-from-bracket"></i>
          <span>Logout</span>
        </button>
      </div>
    </div>
  </header>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "HeaderComponent",
  methods: {
    ...mapActions(["handleLogout"]),
    logout() {
      this.handleLogout();
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped>
.main-header {
  width: 100%;
  background-color: #ffffff;
  border-bottom: 1.5px solid #e2e8f0;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.02);
  position: sticky;
  top: 0;
  z-index: 100;
}

.header-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 16px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header-brand {
  display: flex;
  align-items: center;
  gap: 10px;
}

.logo-icon {
  font-size: 22px;
  color: #42b983;
}

.header-brand h2 {
  font-size: 20px;
  font-weight: 800;
  color: #1a202c;
  margin: 0;
  letter-spacing: -0.5px;
}

.logout-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: #fff5f5;
  color: #e53e3e;
  border: 1px solid #fed7d7;
  padding: 10px 16px;
  font-size: 14px;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}

.logout-btn i {
  font-size: 15px;
}

.logout-btn:hover {
  background-color: #e53e3e;
  color: #ffffff;
  border-color: #e53e3e;
  box-shadow: 0 4px 12px rgba(229, 62, 62, 0.15);
}

.logout-btn:active {
  transform: scale(0.96);
}

@media (max-width: 480px) {
  .logout-btn span {
    display: none;
  }
  .logout-btn {
    padding: 10px;
  }
}
</style>
