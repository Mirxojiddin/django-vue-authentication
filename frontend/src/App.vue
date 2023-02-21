<script setup>
import { RouterLink, RouterView } from 'vue-router'


</script>

<template>
  <div class="mb-4">
    <nav>
      <RouterLink to = '/login'>Login</RouterLink>
      <RouterLink to = '/reg'>Registration</RouterLink>
    </nav>
  </div>
<RouterView></RouterView>
</template>

<style>
nav a.router-link-exact-active {
  color: red;
  display: none;
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
    padding: 0 1rem;
}

nav a:first-of-type {
  border: 0;
}

</style>
