<script setup lang="ts">
import Task from "@/components/Task.vue";
import {computed, ref} from "vue";

type Task = {id: string, name: string, completed: boolean};

const tasks = ref<Task[]>([]);
const showCompletedTasks = ref<boolean>(true);
const displayedTasks = computed(() => {return showCompletedTasks.value ? tasks.value : tasks.value.filter((task) => !task.completed);});

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
}


</script>


<template>
  <div id="manager">

    <ul id="task-list">
      <Task :name='task.name' :completed="task.completed" @remove="removeTask(index)" @toggle="toggleTask(index)" v-for="(task, index) in displayedTasks" :key="task.id" />
    </ul>

    <div id="controls">
      <button id="addTask" @click="addTask('Task')">Add</button>
      <button :class="{showComplete: showCompletedTasks}" id="toggleComplete" @click="showCompletedTasks = !showCompletedTasks">Show Complete</button>
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


#addTask{
  width: 70px;
  height: 30px;
  margin: 10px;
  border-radius: 8px;
  background: none;
  border: black solid 3px;
  font-weight: bold;
}
#addTask:hover{
  background: #00000020;
  cursor: pointer;
}

#toggleComplete{
  width: 90px;
  height: 30px;
  margin: 10px;
  border-radius: 8px;
  background: none;
  border: black solid 3px;
  font-weight: bold;
  font-size: 10px;
}
#toggleComplete:hover{
  background: #00000020;
  cursor: pointer;
}
#toggleComplete.showComplete{
  /*border: #ffa500AA solid 3px;
  color: #ffa500AA;*/
  background-color: #ffa500AA;
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