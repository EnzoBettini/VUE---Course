<script setup lang="ts"></script>

<template>
  <nav>
    <div class="container mx-auto">
      <div>Logo <strong>Here</strong></div>
    </div>
    <router-link to="/profile">Profile</router-link>
    <router-link to="/login">Login</router-link>
  </nav>
  <main>
    <router-view></router-view>
  </main>
</template>

<style scoped></style>
