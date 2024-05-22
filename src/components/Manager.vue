<script setup lang="ts">
import Task from "@/components/Task.vue";
import {ref} from "vue";

const tasks = ref<(typeof Task)[]>([Task])
tasks.value.push(Task)
tasks.value.push(Task)

function removeTask(index:number):void{
  console.log(index)
  tasks.value.splice(index,1)
}


</script>


<template>
    <ul class="task-list">
      <Task @remove="removeTask(index)" v-for="(item, index) in tasks" :key="index" :task="item"/>
      <button @click="tasks.push(Task)">+</button>
      <button @click="tasks.pop()">-</button>
    </ul>

</template>

<style scoped>

button{
  width: 30px;
  height: 20px;
  margin: 10px;
}


.task-list {
  list-style-type: none;
  padding: 0;
  border-radius: 8px;
  border: #000000BB solid 3px;
  max-width: 400px;
  min-width: 300px;
  max-height: 450px;
  min-height: 300px;
  width: 40vw;
  height: 70vh;
  overflow-y: auto;
}
.task-list::-webkit-scrollbar {
  width: 0;
  height: 0;
}





</style>