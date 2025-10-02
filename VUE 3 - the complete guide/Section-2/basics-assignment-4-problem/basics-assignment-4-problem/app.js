const app = Vue.createApp({
    data() {
        return {
            paragraph: false,
            paragraphValue: '',
            user: ''
        }
    },
    methods: {
        toggleParagraph() {
            this.paragraph = !this.paragraph;
        },
        verifyUser() {
            if (this.user != 'user1' && this.user != 'user2') {
                return '';
            } else {
                return this.user;
            }
        }
    }
});

app.mount('#assignment')
