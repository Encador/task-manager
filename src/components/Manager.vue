<script setup lang="ts">
import Task from "@/components/Task.vue";
import {computed, onMounted, ref} from "vue";
import {currentUser, pb} from "@/assets/pocketbase";
import type {RecordModel} from "pocketbase";

type Task = {id: string, name: string, completed: boolean};

const tasks = ref<Array<Task | RecordModel>>([]);
const showCompleted= ref<boolean>(currentUser.value ? currentUser.value.showCompleted : false);
const displayedTasks = computed(() => {return showCompleted.value ? tasks.value : tasks.value.filter((task) => !task.completed);});

async function addTask(name:string) {
  if(currentUser.value) {
    const data = {
      "name": name,
      "completed": false,
      "user": currentUser.value.id
    };

    const record = await pb.collection("tasks").create(data).then(data => {
      tasks.value.push(data)
    }).catch((e: Error) => console.error(e));

  }
  else {
    tasks.value.push({id: generateID(), name: name, completed: false} as Task);
  }
}

async function removeTask(id:string){
  if(currentUser.value) {
    await pb.collection("tasks").delete(id).then().catch((e: Error) => console.error(e));
  }
  tasks.value = tasks.value.filter((task) => task.id !== id);
}

async function changeTaskName(id:string, name:string){
  if(currentUser.value) {
    const data = {
      "name": name
    };
    // should add edit timer to reduce api calls
    const record = await pb.collection("tasks").update(id, data).then().catch((e: Error) => console.error(e));
  }
  const task = tasks.value.find((task) => task.id === id);
  if(task){
    task.name = name;
  }
}

async function toggleTask(id:string){
  const task = tasks.value.find((task) => task.id === id);
  if(task){
    task.completed = !task.completed;
    if(currentUser.value) {
      const data = {
        "completed": task.completed
      };
      const record = await pb.collection("tasks").update(id, data).then().catch((e: Error) => console.error(e));
    }
  }
}

async function toggleShowCompleted(){
  showCompleted.value = !showCompleted.value;
  if(currentUser.value) {
    const data = {
      "showCompleted": showCompleted.value
    };
    const record = await pb.collection("users").update(currentUser.value.id, data).then().catch((e: Error) => console.error(e));
  }
}

async function getList(){
  tasks.value = await pb.collection("tasks").getFullList();
}

function generateID():string{
  return Date.now().toString(16).toUpperCase() + Math.floor(Math.random()*100000).toString(16).toUpperCase();
}

onMounted(() => {
  getList();
});


</script>


<template>
  <div id="manager">

    <ul id="task-list">
      <Task :id="task.id" :name='task.name' :completed="task.completed" @remove="removeTask" @toggle="toggleTask" @name-change="changeTaskName" v-for="task in displayedTasks" :key="task.id" />
    </ul>

    <div id="controls">
      <button id="addTask" @click="addTask('')">Add</button>
      <button :class="{showComplete: showCompleted}" id="toggleComplete" @click="toggleShowCompleted">Show Completed</button>
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
  width: 100px;
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
/*#task-list::-webkit-scrollbar {
  width: 0;
  height: 0;
}*/

</style>