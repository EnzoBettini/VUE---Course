<template>
    <div @submit.prevent="submitData()">
        <form action="">
            <div>
                <label for="name">Name</label>
                <input type="text" v-model="name">
            </div>
            <div>
                <label for="phone">Phone</label>
                <input type="tel" v-model="phone">
            </div>
            <div>
                <label for="email">E-mail</label>
                <input type="email" v-model="email">
            </div>
            <div><button>Add contact</button></div>
        </form>
    </div>
</template>

<script>
export default {
    emits: ['add-contact'],
    data() {
        return {
            name: '',
            phone: '',
            email: ''
        }
    },
    methods: {
        submitData() {
            this.$emit(
                'add-contact',
                this.name,
                this.phone,
                this.email
            );
        }
    }
}
</script>
