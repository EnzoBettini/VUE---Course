const app = Vue.createApp({
    data() {
        return {
            courseGoalA: 'Finish the course!',
            courseGoalB: 'Dont Finish the course!',
            courseGoalC: '<strong>Great!</strong>',
            vueLink: 'https://www.google.com'
        };
    },

    methods: {
        outputGoal() {
            const randomNumber = Math.random();
            if (randomNumber > 0.5) {
                return this.courseGoalA;
            } else {
                return this.courseGoalB;
            }
        }
    }
});

app.mount('#user-goal');
