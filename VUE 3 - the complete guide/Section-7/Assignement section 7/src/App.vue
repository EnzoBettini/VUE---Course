<template>
  <div id="app-container">
    <section class="card add-user">
      <active-user @add-user="addUser"></active-user>
    </section>
    <section class="card show-users">
      <h2 class="users-title" v-if="users.length > 0">Usuários Cadastrados</h2>
      <h2 class="users-title" v-else>Nenhum usuário cadastrado</h2>
      <div class="users-list">
        <user-data
        v-for="user in users"
        :key="user.id"
        :name="user.name"
        :age="user.age"
        >
        </user-data>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
        users: []
    }
  },
  methods: {
    addUser(name, age) {
      const newUser = {
        id: new Date().toISOString(),
        name: name,
        age: age
      };
      this.users.push(newUser)
    }
  }
}
</script>

<style>
body {
  font-family: 'Roboto', sans-serif;
  margin: 0;
  background-color: #f0f2f5;
  color: #333;
}

#app-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 2rem;
  min-height: 100vh;
}

.card {
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  width: 100%;
  max-width: 600px;
  box-sizing: border-box;
}

.add-user {
  display: flex;
  justify-content: center;
}

.show-users {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.users-title {
  margin: 0 0 1.5rem 0;
  color: #555;
  font-weight: 500;
}

.users-list {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  width: 100%;
}
</style>
