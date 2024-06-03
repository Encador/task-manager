<script setup lang="ts">
import {pb, currentUser} from "@/assets/pocketbase";

async function login(){
  try {
    await pb.collection("users").authWithPassword("user1","password")
    console.log("login")
  }
  catch(err){
    console.log(err);
  }

}
async function logout(){
  pb.authStore.clear();
  console.log("logout")

}

</script>

<template>
  <h1 v-if="currentUser">Signed in as {{currentUser.username}}</h1>
  <h1 v-else>Not Signed In</h1>
  <button @click="login">Login</button>
  <button @click="logout">Logout</button>

</template>

<style scoped>

</style>