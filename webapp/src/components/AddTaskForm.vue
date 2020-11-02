<template>
  <div class="add-task">
    <form class="form-add-task" v-on:submit.prevent="createTask">
      <fieldset>
        <legend>New task info: </legend>
        <div class="input-container">
          <label class="input-placeholder">Title: </label>
          <input type="text" name="title" v-model="taskTitle">
        </div>
        <div class="input-container">
          <label>Date: </label>
          <input type="date" name="date" v-model="taskDate">
        </div>
         <div class="input-container">
          <label>Time: </label>
          <input type="time" name="title" v-model="taskTime">
        </div>
      </fieldset>
      <button type="submit">Add New Task</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      taskTitle: '',
      taskDate: '',
      taskTime: '',
    };
  },
  methods: {
    createTask() {
      console.log(this.taskTitle, this.taskDate, this.taskTime);
    },
  },
};
</script>

<style scoped lang="scss">
  .add-task {
    box-shadow: 1px 1px 3px #8a8a8a;
    width: 100%;
    max-width: 48rem;
    border-radius: 0.8rem;
    margin: 1.2rem auto 3.2rem;
    padding: 2rem;
    overflow: hidden;
  }
  .form-add-task {
    & fieldset {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-around;
    }
    & fieldset legend {
      font-weight: bold;
    }
    & button {
      margin-top: 2.6rem;
      padding: 0.8rem 1.6rem;
      border-radius: 0.25rem;
      background: #41b883;
      color: #fff;
    }
  }
</style>
