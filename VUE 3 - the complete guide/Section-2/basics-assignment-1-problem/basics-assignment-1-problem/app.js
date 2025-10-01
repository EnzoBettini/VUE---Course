const app = Vue.createApp({
    data() {
        return {
            myName: 'Enzo',
            myAge: 22,
            imageURL: 'https://yt3.googleusercontent.com/ytc/AIdro_m7MWMBm4PynPndRMCxUEfNcU9Eufkk5ZkYI5RNjPchQ_c=s900-c-k-c0x00ffffff-no-rj',
            textInput: 'hello'
        };
    },

    methods: {
        randomNumber() {
            const randomNumber = Math.random();
            return randomNumber;
        }
    }
});

app.mount('#assignment')
