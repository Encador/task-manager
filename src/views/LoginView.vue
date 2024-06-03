<script setup lang="ts">
import {pb, currentUser} from "@/assets/pocketbase";
import {ref} from "vue";
import router from "@/router";

const username = ref<string>("")
const password = ref<string>("")

async function login(){
  await pb.collection("users").authWithPassword(username.value,password.value).then().catch((e:Error) => console.error(e));
  if(currentUser.value) {
    await router.push("/")
  }
}
function logout(){
  pb.authStore.clear();
  window.location.reload();
}
async function register(){
  const data = {
    "username": username.value,
    "password": password.value,
    "passwordConfirm": password.value,
  }
  await pb.collection("users").create(data).then().catch((e: Error) => console.error(e));
  login();
}
async function deleteUser(){
  await pb.collection("users").delete(currentUser.value?.id).then().catch((e: Error) => console.error(e));
}

</script>

<template>
  <body>
  <div v-if="!currentUser" class="container">
    <input type="text" v-model="username" placeholder="Username" />
    <input type="password" v-model="password" placeholder="Password" />
    <div class="buttons">
      <button @click="login" id="login">Login</button>
      <button @click="register" id="register">Register</button>
    </div>
  </div>

  <div v-else class="container">
    <span>Account: {{currentUser.username}}</span>
    <div class="buttons">
      <button @click="logout" id="logout">Logout</button>
      <button @click="deleteUser" id="delete">Delete</button>
    </div>
  </div>
  </body>



</template>

<style scoped>
body{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.container{
  border: #000000BB solid 3px;
  border-radius: 8px;
  width: 300px;
  height: 150px;
  display: flex;
  flex-direction: column;
  padding-top: 10px;
  align-items: center;
}
.buttons{
  display: flex;
  justify-content: space-evenly;
}
button{
  border-radius: 8px;
  background: none;
  border: black solid 3px;
  font-weight: bolder;
  margin: 10px;
  height: 30px;
  width: 100px;
}
button:hover{
  background: #00000020;
  cursor: pointer;
}
#delete:hover{
  background: #FF000099;
}
#register:hover{
  background-color: #00FF0055
}

input{
  border: #00000060 dashed 2px;
  border-radius: 20px;
  padding: 2px;
  outline: none;
  font-size: 15px;
  text-align: center;
  width: 90%;
  height: 50px;
  caret-color: black;
  font-weight: bold;
  margin: 5px;
}
span{
  border: #00000060 dashed 2px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  width: 90%;
  height: 50px;
  caret-color: black;
  font-weight: bold;
  margin-bottom: 20px;
  margin-top: 10px;
}

</style>