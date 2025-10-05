const app = Vue.createApp({
    data() {
        return {
            friends: [
                { id: 'manuel', name: 'Manuel Lorenz', phone: '12345678', email: 'manuel@gmail.com' },
                { id: 'ana', name: 'ana silva', phone: '1234567823', email: 'ana@gmail.com' },
            ]
        }
    }
})

app.component('friend-contact', {
    template: `
    <ul>
        <li>
          <h2>{{ friend.name }}</h2>
          <button @click="toggleDetails()">Show Details</button>
          <ul v-if="detailsVisible">
            <li><strong>Phone:</strong> {{ friend.phone }}</li>
            <li><strong>Email:</strong> {{ friend.email }}</li>
          </ul>
        </li>
    </ul>
    `,
    data() {
        return {
            detailsVisible: true,
            friend: { id: 'manuel', name: 'Manuel Lorenz', phone: '12345678', email: 'manuel@gmail.com' }
        };
    },
    methods: {
        toggleDetails() {
            this.detailsVisible = !this.detailsVisible;
        }
    }
})

app.mount('#app')

