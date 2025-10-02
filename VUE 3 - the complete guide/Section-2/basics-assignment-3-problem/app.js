const app = Vue.createApp({
    data() {
        return {
            number: 0,
            warning: ''
        }
    },
    watch: {
        number(newVal) {
            if (newVal === 37) {
                this.warning = 'Almost there!';
            } else if (newVal > 37) {
                this.warning = 'Too much!';
            } else {
                this.warning = 'Not there yet';
            }

            // reset to 0 after 5s
            if (newVal !== 0) {
                setTimeout(() => {
                    this.number = 0;
                }, 5000);
            }
        }
    },
    methods: {
        addNum(num) {
            this.number += num;
        },
        littleAddNum(num) {
            this.number += num;
        }
    }
});

app.mount('#assignment');
