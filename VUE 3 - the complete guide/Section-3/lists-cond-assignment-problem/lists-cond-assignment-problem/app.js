const app = Vue.createApp({
    data() {
        return {
            tasks: [],
            enteredValue: '',
            toggleList: true
        };
    },
    methods: {
        addGoal() {
            this.tasks.push(this.enteredValue);
        },
        removeGoal(index) {
            this.tasks.splice(index, 1);
        },
        hideShowList() {
            this.toggleList = !this.toggleList;
        }
    }
});

app.mount('#assignment');
