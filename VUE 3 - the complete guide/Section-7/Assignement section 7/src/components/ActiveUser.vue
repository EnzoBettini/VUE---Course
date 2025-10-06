<template>
    <form @submit.prevent="submitData()" class="submit-form">
        <div class="form-group">
            <label for="name">Nome:</label>
            <input id="name" type="text" v-model="name" required>
        </div>
        <div class="form-group">
            <label for="age">Idade:</label>
            <input id="age" type="number" v-model="age" required>
        </div>
        <button>Adicionar Usuário</button>
    </form>
</template>

<script>
export default {
    emits: ['add-user'],
    data() {
        return {
            name: '',
            age: ''
        }
    },
    methods: {
        submitData() {
            this.$emit(
                'add-user',
                this.name,
                this.age
            );
            this.name = '';
            this.age = '';
        }
    }
}
</script>

<style>
.submit-form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    width: 100%;
    max-width: 400px;
}

.form-group {
    display: flex;
    flex-direction: column;
}

.form-group label {
    margin-bottom: 0.5rem;
    font-weight: 500;
    color: #495057;
}

.form-group input {
    padding: 0.75rem 1rem;
    border: 1px solid #ced4da;
    border-radius: 8px;
    font-size: 1rem;
    transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.form-group input:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.25);
}

button {
    padding: 0.8rem 1.5rem;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.2s ease;
}

button:hover {
    background-color: #0056b3;
}
</style>
