<script setup lang="ts">
import Task from "@/components/Task.vue";
import {ref} from "vue";

type Task = {id: string, name: string, completed: boolean};

const tasks = ref<Task[]>([]);

function addTask(name:string) {
  tasks.value.push({id: generateID(), name: name, completed: false} as Task);
}

function generateID():string{
  return Date.now().toString(16).toUpperCase() + Math.floor(Math.random()*100000).toString(16).toUpperCase();
}


function removeTask(index:number):void{
  console.log(tasks.value[index]);
  // tasks.value[1] = tasks.value[2];
  tasks.value.splice(index, 1);
  console.log(tasks.value);
}

function toggleTask(index:number){
  tasks.value[index].completed = !tasks.value[index].completed;
  console.log(tasks.value[index].completed)
  removeTask(index);
}


</script>


<template>
  <div id="manager">

    <ul id="task-list">
      <Task :name='task.name' @remove="removeTask(index)" @toggle="toggleTask(index)" v-for="(task, index) in tasks" :key="task.id" />
    </ul>

    <div id="controls">
      <button @click="addTask('Task')">Add</button>
    </div>

  </div>

</template>

<style scoped>

#manager {
  border: #00000055 dashed 3px;
  border-radius: 8px;
}

#controls{
  display: flex;
  justify-content: space-between;
  /*
  border: #00000055 dotted 3px;
  */
  border-top: #00000055 dashed 3px;
}


#controls button{
  width: 60px;
  height: 30px;
  margin: 10px;
  border-radius: 8px;
  background: none;
  border: black solid 2px;
}
#controls button:hover{
  background: #00000020;
  cursor: pointer;
}


#task-list {
  list-style-type: none;
  padding: 0;
  border-radius: 8px;
  /*
  border: #00000055 dotted 3px;
  */
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