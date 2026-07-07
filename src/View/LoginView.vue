<template>
  <div class="login-container">
    <form @submit.prevent="login">
      <h2>Account Login</h2>
      <label for="username">Username</label>
      <input
        type="text"
        v-model.trim="username"
        placeholder="Enter your username"
        id="username"
        required
      />
      <p
        v-if="username.length > 0 && username.length < 6"
        class="error-boundary"
      >
        <i class="fa-solid fa-circle-info"></i> Username needs to be atleast 6
        characters
      </p>

      <label for="password" class="password-label">Password</label>
      <div class="password-wrapper">
        <input
          :type="isPasswordVisible ? 'text' : 'password'"
          v-model.trim="password"
          placeholder="Enter your password"
          id="password"
          required
        />
        <span class="password-toggle" @click="togglePasswordVisibility">
          <i
            :class="
              isPasswordVisible ? 'fa-solid fa-eye-slash' : 'fa-solid fa-eye'
            "
          ></i>
        </span>
      </div>
      <p
        v-if="password.length > 0 && password.length < 6"
        class="error-boundary"
      >
        <i class="fa-solid fa-circle-info"></i> Password needs to be at least 6
        characters
      </p>

      <button type="submit" :disabled="islogin" class="login-btn">
        <span v-if="islogin">
          Log in... <i class="fa-solid fa-spinner fa-spin"></i>
        </span>
        <span v-else> Log in </span>
      </button>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "LoginView",
  data() {
    return {
      username: "",
      password: "",
      islogin: false,
      isPasswordVisible: false,
    };
  },
  methods: {
    ...mapActions(["handleUserLogin"]),

    togglePasswordVisibility() {
      this.isPasswordVisible = !this.isPasswordVisible;
    },

    async login() {
      if (!this.username || !this.password) {
        this.$toast.warning("Username and Password must not be empty");
        return;
      }

      if (this.username.length < 6 || this.password.length < 6) {
        this.$toast.warning(
          "Username and Password need to be at least 6 characters",
        );
        return;
      }

      this.islogin = true;
      const loginSuccess = await this.handleUserLogin({
        username: this.username,
        password: this.password,
      });

      this.islogin = false;

      if (loginSuccess) {
        this.$router.push("/dashboard");
      }
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
  padding: 16px; 
  box-sizing: border-box;
}

form {
  background: #ffffff;
  padding: 40px 30px; 
  width: 100%;
  max-width: 600px; 
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05), 0 5px 10px rgba(0, 0, 0, 0.03);
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
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

.password-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%; 
}

input {
  width: 100%; 
  box-sizing: border-box; 
  padding: 12px 16px;
  font-size: 16px; 
  border: 1.5px solid #e2e8f0;
  border-radius: 8px;
  background-color: #f7fafc;
  color: #2d3748;
  outline: none;
  transition: all 0.2s ease-in-out;
}

.password-wrapper input {
  padding-right: 44px; 
}

input:focus {
  background-color: #ffffff;
  border-color: #42b983;
  box-shadow: 0 0 0 3px rgba(66, 185, 131, 0.15);
}

input::placeholder {
  color: #a0aec0;
}

.password-toggle {
  position: absolute;
  right: 14px;
  cursor: pointer;
  color: #a0aec0;
  padding: 4px;
  user-select: none;
  transition: color 0.2s ease;
  z-index: 2; 
}

.password-toggle:hover {
  color: #4a5568;
}

.error-boundary {
  color: #e53e3e;
  font-size: 12px;
  font-weight: 500;
  margin: 6px 0 0 0;
  display: flex;
  align-items: center;
  gap: 6px;
}

.error-boundary i {
  font-size: 13px;
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
  width: 100%;
  transition: background-color 0.2s ease;
}

button:hover:not(:disabled) {
  background-color: #38a169;
}

button:active:not(:disabled) {
  background-color: #2f855a;
}

button:disabled {
  background-color: #cbd5e0;
  color: #718096;
  cursor: not-allowed;
}

.password-label,
.login-btn {
  margin-top: 20px;
}

@media (max-width: 480px) {
  form {
    padding: 30px 20px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.04); 
  }
  
  h2 {
    font-size: 21px;
    margin-bottom: 20px;
  }
}
</style>