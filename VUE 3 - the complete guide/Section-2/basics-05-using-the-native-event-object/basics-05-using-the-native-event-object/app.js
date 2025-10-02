const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      fullname: ''
    };
  },
  watch: {
    name() {
      console.log("watched");
    }
  },
  computed: {
    // fullname() {
    //   return this.name + " " + "boolean";
    // }
  },
  methods: {
    outputFullName() {
      return this.name + " " + "boolean";
    },
    setName(event, lastName) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = '';
    }
  }
});

app.mount('#events');
