<script setup >
import Register from '../components/Register.vue'
import { usersStore } from '../stores/UserStore'
import { ref } from 'vue'

const Users = usersStore()
const registration = async (email,username,password) =>{
    Users.addUser(email,username,password)
}


</script>

<template>

<Register 
@registration ="registration"/>

</template>
