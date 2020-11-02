<template>
  <div class="home">
    <div class="header">
      <h1>My tasks</h1>
      <time-clock />
    </div>
    <my-tasks />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MyTasks from '@/components/MyTasks.vue';
import TimeClock from '@/components/TimeClock.vue';

export default defineComponent({
  name: 'Home',
  components: {
    MyTasks,
    TimeClock,
  },
});
</script>

<style scoped lang="scss">
  .header {
    width: 100vw;
    height: 6rem;
    background: #41b883;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
    & h1 {
      font: 700 2.4rem Helvetica;
    }
  }
</style>
