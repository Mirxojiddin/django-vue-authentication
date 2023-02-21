import { ref } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

export const usersStore = defineStore('user',()=>{
    const authinticate = ref(false)
    const Error = ref(false)
    const login =async (username,password)=>{

        const users = new FormData() 
        users.append("username",username)
        users.append("password",password)
        await axios.post('auth/token/login/',users)
        .then((response)=>{
            authinticate.value = true
            Error.value = false
        })
        .catch((error)=>{
            Error.value = true
            authinticate.value = false
        })        
    }    
    const setFalse = () =>{
        authinticate.value =false
        Error.value = false
    }
    const addUser =async (username,password,email)=>{

        const user = new FormData() 
        user.append("username",username)
        user.append("password",password)
        user.append("email",email)
        await axios.post('auth/users/',user)
        .then((response)=>{
            authinticate.value = true
            Error.value = false
        })
        .catch((error)=>{
            Error.value = true
            authinticate.value = false
        })        
    }  

        return {authinticate, login, setFalse,Error}
})