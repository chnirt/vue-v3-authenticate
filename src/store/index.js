import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      count: 1,
      authenticated: false
    };
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    setAuthentication(state, status = false) {
      state.authenticated = status;
    }
  }
});

export default store;
