<script setup lang="ts">
import Manager from "@/components/Manager.vue";
import {currentUser} from "@/assets/pocketbase";

console.log(currentUser.value !== null)
</script>

<template>
  <h1>Task Manager</h1>
  <body>
  <Manager/>
  </body>

</template>

<style scoped>
body{
  display: flex;
  justify-content: center;
  align-items: center;
}
h1{
  text-align: center;
  margin: 20px;
}



</style>
