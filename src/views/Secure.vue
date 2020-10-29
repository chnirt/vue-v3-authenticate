<template>
  <div class="secure">
    <h1>Secure Page</h1>
    <p>{{ count }}</p>
    <button @click="increment()">+</button>
    <button @click="logout()">Logout</button>

    <HelloWorld />
  </div>
</template>

<script>
import HelloWorld from "../components/HelloWorld";
export default {
  name: "Secure",
  components: {
    HelloWorld,
  },
  computed: {
    count() {
      return this.$store.state.count;
    },
  },
  data() {
    return {
      input: {
        username: "chnirt",
        password: "123456",
      },
    };
  },
  methods: {
    increment() {
      this.$store.commit("increment");
    },
    logout() {
      // console.log("logout");
      this.$store.commit("setAuthentication", false);
      this.$router.replace({ name: "Login" });
    },
  },
};
</script>
