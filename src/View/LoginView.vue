<template>
  <div class="login-container">
    <form @submit.prevent="login">
      <h2>Account Login</h2>
      <label for="username">Username</label>
      <input
        type="text"
        v-model="username"
        placeholder="Enter your username"
        id="username"
        required
      />
      <label for="password">Password</label>
      <input
        type="password"
        v-model="password"
        placeholder="Enter your password"
        id="password"
        required
      />
      <button @click="login" :disabled="islogin">
        <span v-if="islogin">
          Log in... <i class="fa-solid fa-spinner fa-spin"></i>
        </span>
        <span v-else> Log in </span>
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: "LoginView",
  data() {
    return {
      username: "",
      password: "",
      islogin: false,
    };
  },
  methods: {
    async login() {
      this.islogin = true;
      const response = await fetch("https://dummyjson.com/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: this.username,
          password: this.password,
          expiresInMins: 60,
        }),
      });

      const data = await response.json();
      console.log(data);

      this.islogin = false;
    },
  },
};
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  padding: 20px;
}

form {
  background: #ffffff;
  padding: 40px;
  width: 100%;
  max-width: 400px;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05), 0 5px 10px rgba(0, 0, 0, 0.03);
  display: flex;
  flex-direction: column;
}

h2 {
  margin: 0 0 24px 0;
  color: #1a202c;
  font-size: 24px;
  text-align: center;
  font-weight: 700;
}

label {
  font-size: 14px;
  font-weight: 600;
  color: #4a5568;
  margin-bottom: 8px;
  text-align: left;
}

input {
  padding: 12px 16px;
  font-size: 16px;
  border: 1.5px solid #e2e8f0;
  border-radius: 8px;
  margin-bottom: 24px;
  background-color: #f7fafc;
  color: #2d3748;
  outline: none;
  transition: all 0.2s ease-in-out;
}

input:focus {
  background-color: #ffffff;
  border-color: #42b983;
  box-shadow: 0 0 0 3px rgba(66, 185, 131, 0.15);
}

input::placeholder {
  color: #a0aec0;
}

button {
  background-color: #42b983;
  color: #ffffff;
  padding: 14px;
  font-size: 16px;
  font-weight: 700;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s ease;
  margin-top: 8px;
}

button:hover {
  background-color: #38a169;
}

button:active {
  background-color: #2f855a;
}
</style>
