<script setup >
import { ref } from 'vue';
const emits = defineEmits([])
const username = ref('')
const email = ref('')
const password = ref('')
const repassword = ref('')

const register = () =>{

}

</script>

<template>


  <div  class = "" >
    <div class="mb-3 row" >
      <label for="email" class="col-sm-4 col-form-label">Email</label>
      <div class="col-sm-8" >
        <input type="email" class="form-control" id="email"  v-model="email"/>
      </div>
    </div>
    <div class="mb-3 row" >
      <label for="username" class="col-sm-4 col-form-label">Username</label>
      <div class="col-sm-8" >
        <input type="text" class="form-control" id="username"  v-model ="username"/>
      </div>
    </div>
    <div class="mb-3 row" >
      <label for="password" class="col-sm-4 col-form-label">Password</label>
      <div class="col-sm-8" >
        <input type="password" class="form-control" id="password" v-model="password" />
      </div>
    </div>
    <div class="mb-3 row" >
      <label for="repassword" class="col-sm-4 col-form-label">Re-Password</label>
      <div class="col-sm-8" >
        <input type="password" class="form-control" id="repassword" v-model="repassword"/>
      </div>
    </div>
    <button class="btn btn-primary w-25 align-self-center m-2" @click="register">
      Ro'yxatdan o'tish
    </button>
   </div>


</template>    