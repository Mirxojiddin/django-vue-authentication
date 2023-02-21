<script setup>
import { ref } from 'vue';
const username = ref('')
const password = ref('')

const emits = defineEmits(['checking'])
const check = async() =>{
 await emits('checking',username.value,password.value)
}

</script>

<template>


  <div  >
    <div class="mb-3 row">
      <label for="username" class="col-sm-4 col-form-label">Username</label>
      <div class="col-sm-8">
        <input 
        type="text"
        class="form-control"
        v-model="username"
        id="username"
        placeholder="username"
        >
      </div>
    </div>
    <div class="mb-3 row">
      <label for="password" class="col-sm-4 col-form-label">Parol</label>
      <div class="col-sm-8">
        <input type="password" class="form-control" id="password" v-model = "password" />
      </div>
    </div>    <br>
      <button class="btn btn-primary w-25 align-self-center m-2" @click="check()">
        Kirish
      </button>
  </div>


</template>    