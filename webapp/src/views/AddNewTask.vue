<template>
  <div class="add-task">
    <div class="header">
      <h1>Add new task</h1>
    </div>
    <add-task-form />
  </div>
</template>
<script>
import AddTaskForm from '../components/AddTaskForm.vue';

export default {
  name: 'AddNewTask',
  components: {
    AddTaskForm,
  },
};
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
