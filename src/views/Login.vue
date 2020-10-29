<template>
  <div name="login">
    <h1>Login Page</h1>
    <input
      type="text"
      name="useranme"
      v-model="input.username"
      placeholder="Username"
    /><br />
    <input
      type="password"
      name="password"
      v-model="input.password"
      placeholder="Password"
    /><br />
    <button @click="login()">Login</button>
  </div>
</template>

<script>
export default {
  name: "Login",

  data() {
    return {
      input: {
        username: "chnirt",
        password: "123456",
      },
    };
  },
  methods: {
    login() {
      if (this.input.username === "" || this.input.password === "") return;
      if (
        this.input.username === "chnirt" &&
        this.input.password === "123456"
      ) {
        this.$store.commit("setAuthentication", true);
        this.$router.replace({ name: "Secure" });
        this.$store.commit("increment");
      }
    },
  },
};
</script>