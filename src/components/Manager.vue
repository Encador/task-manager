<script setup lang="ts">
import Task from "@/components/Task.vue";
import {ref} from "vue";

const count = ref<number>(100)

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
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  max-width: 300px;
  min-width: 200px;
  max-height: 50vh;
  overflow-y: auto;
}





</style>