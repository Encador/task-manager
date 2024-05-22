<script setup lang="ts">
import Task from "@/components/Task.vue";
import {ref} from "vue";

type Task = {id: number, name: string};
const maxId = ref(1);

const tasks = ref<Task[]>([]);

function addTask() {
  const id = Date.now();
  console.log(id)
  tasks.value.push({id: id, name: "Task"} as Task);
}



function removeTask(index:number):void{
  console.log(tasks.value[index]);
  // tasks.value[1] = tasks.value[2];
  tasks.value.splice(index, 1);
  console.log(tasks.value);
}


</script>


<template>
    <ul class="task-list">
      <Task :text='task.name' @remove="removeTask(index)" v-for="(task, index) in tasks" :key="task.id"/>
      <button @click="addTask">+</button>
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
  border: #00000055 dashed 3px;
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