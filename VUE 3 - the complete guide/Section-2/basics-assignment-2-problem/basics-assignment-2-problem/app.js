const app = Vue.createApp({
    data() {
        return {
            name: '',
            confirmedName: ''
        };
    },

    methods: {
        simpleAlert() {
            alert('Button clicked');
        },

        setName(event) {
            this.name = event.target.value;
        },

        confirmUsername() {
            this.confirmedName = this.name;
        }
    }
});

app.mount("#assignment");

