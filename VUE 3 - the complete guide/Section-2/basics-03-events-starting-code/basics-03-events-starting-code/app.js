const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      username: '',
      confirmedUsername: ''
    };
  },

  methods: {
    add(num) {
      return this.counter += num;
    },

    remove(num) {
      return this.counter -= num;
    },

    showData() {
      console.log(this.counter);
      return;
    },

    setName(event) {
      this.username = event.target.value;
    },

    submitForm() {
      alert("submited");
    },

    confirmInput() {
      this.confirmedUsername = this.username;
    }
  }
});

app.mount('#events');
