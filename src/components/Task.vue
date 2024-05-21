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
    <span id="checkbox" title="complete" :class="{checked: completed}" @click="handleCheck"></span>
    <input type="text" placeholder="Task" :class="{strikethrough: completed}">
    <span id="remove" title="remove">remove</span>
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

input {
  border: #00000020 solid 2px;
  border-radius: 20px;
  padding: 2px;
  outline: none;
  font-size: 18px;
  text-align: center;
  width: 65%;
}
/*input::placeholder {
  color: inherit;
}*/

input.strikethrough{
  text-decoration: line-through;
}


li {
  border: black solid 2px;
  margin: 10px;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 45px;
  padding-left: 5px;
  padding-right: 5px;
}

#checkbox{
  border: black solid 2px;
  border-radius: 50%;
  width: 25px;
  height: 25px;
  cursor: pointer;
}
#checkbox:hover{
  background-color: #00FF0040;
}
#checkbox.checked{
  background-color: #00FF0099;
}
#remove{
  border: black solid 2px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  padding: 3px;
}
#remove:hover{
  cursor: pointer;
  background-color: #FF000099;
}
</style>