<script setup lang="ts">
import {pb, currentUser} from "@/assets/pocketbase";
import {ref} from "vue";

const username = ref<string>("")
const password = ref<string>("")

async function login(){
  await pb.collection("users").authWithPassword(username.value,password.value).then().catch((e:Error) => console.error(e));
}
async function logout(){
  pb.authStore.clear();
}

</script>

<template>
  <div v-if="currentUser">
    <h1>Signed in as {{currentUser.username}}</h1>
    <button @click="logout">Logout</button>
  </div>
  <div v-else>
    <h1>Not Signed In</h1>
    <input type="text" v-model="username" placeholder="Username" />
    <input type="password" v-model="password" placeholder="Password" />
    <button @click="login">Login</button>
  </div>



</template>

<style scoped>

div{
  margin: 10px;
  padding: 2px;
}

</style>