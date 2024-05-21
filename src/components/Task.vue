<script setup lang="ts">

import {ref} from "vue";

const completed = ref<boolean>(false)

function handleCheck():void{
  completed.value = !completed.value;
  console.log("task checked")
}

</script>

<template>
  <li>
    <span id="checkbox" :class="{checked: completed}" @click="handleCheck"></span>
    <span id="text" :class="{strikethrough: completed}">Task</span>
    <span id="remove">x</span>
  </li>
</template>

<style scoped>
* {
  -webkit-touch-callout: none;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
}


li {
  font-size: 18px;
  border: black solid 2px;
  margin: 10px;
  border-radius: 10px;
  user-select: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 45px;
  padding-left: 5px;
}

#text{
  font-weight: bold;
}
.strikethrough {
  text-decoration: line-through;
}
#checkbox{
  border: black solid 2px;
  border-radius: 50%;
  width: 25px;
  height: 25px;
  cursor: pointer;
}
.checked{
  background-color: #FF000099;
}
#remove{
  border: black solid 2px;
  border-right: none;
  width: 30px;
  height: 110%;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  padding: 0;
}
#remove:hover{
  cursor: pointer;
  background-color: #FF000099;
}
</style>