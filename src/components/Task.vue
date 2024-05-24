<script setup lang="ts">

import {ref, defineEmits, defineProps} from "vue";

const completed = ref<boolean>(false)
const show = ref<boolean>(true)
const props = defineProps<{name: string}>();
const emit = defineEmits(["remove", "toggle", "updated"])

const text:string = props.name

function handleCheck():void{
  completed.value = !completed.value;
  console.log("task checked")
  emit("toggle");
}



</script>

<template>
  <li v-if="show">
    <span id="checkbox" title="complete" :class="{checked: completed}" @click="handleCheck"></span>
    <input type="text" :placeholder=props.name :class="{checked: completed}">
    <span id="remove" title="remove" @click="emit('remove')">remove</span>
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
  border: #00000020 dashed 2px;
  border-radius: 20px;
  padding: 2px;
  outline: none;
  font-size: 15px;
  text-align: center;
  width: 65%;
  caret-color: black;
  font-weight: bold;
}



input.checked{
  text-decoration: line-through;
  color: #00000090;
}

input:hover{
  border: #00000069 dashed 2px;
}
input:focus {
  border: #0000FF96 dashed 2px;
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
  background-color: #00FF0055;
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
  border-color: #A10A0D;
  color: #540B0C;
}
</style>