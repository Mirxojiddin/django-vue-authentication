<script setup>
import Authinticate from '../components/Authinticate.vue'
import { usersStore } from '../stores/UserStore'
import { ref } from 'vue'

const Users = usersStore()
const authinticate = ref(false)
authinticate.value = Users.authinticate
const error = ref(false)

const checking = async (username,password) => {
  //console.log(username,password);
  await Users.login(username, password)
  authinticate.value = Users.authinticate
  error.value = Users.Error

}
const logOut = async () => {
  await Users.setFalse()
  authinticate.value = Users.authinticate
  error.value = Users.Error
}
</script>

<template>

</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
