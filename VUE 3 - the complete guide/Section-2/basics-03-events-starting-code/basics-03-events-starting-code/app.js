const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },

  methods: {
    add() {
      return this.counter += 1;
    },

    remove() {
      return this.counter -= 1;
    },

    showData() {
      console.log(this.counter)
      return;
    }
  }
});

app.mount('#events');
