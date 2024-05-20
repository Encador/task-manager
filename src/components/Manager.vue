<script setup lang="ts">
import Task from "@/components/Task.vue";
import {ref} from "vue";

const count = ref<number>(10)

</script>


<template>
    <ul class="task-list">
      <Task v-for="(item, index) in count" :key="index"/>
    </ul>
</template>

<style scoped>

.task-list {
  list-style-type: none;
  padding: 0;
  margin: 50px 0 0;
  border-radius: 8px;
  border: #00bd7e solid 1px;
  max-width: 500px;
  min-width: 200px;
  height: 50vh;
  overflow-y: auto;
}
.task-list::-webkit-scrollbar {
  width: 0;
  height: 0;
}





</style>