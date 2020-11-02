<template>
  <div>
    <div class="card">
      <div class="task-container">
        <h3 class="overdue">Overdue: </h3>
        <div class="task-row" v-for="task in overduedTasks" :key="task.id">
          <div class ="task-input">
            <input type="checkbox" name="status" id="status">
            <label>
              {{task.title}} - <span>
                {{ formatRelativeDate(task.deadline_date, task.deadline_time) }}
              </span>
            </label>
          </div>
          <button>
            <span class="delete">Excluir</span>
          </button>
        </div>
      </div>
      <div class="task-container">
        <h3>Today: </h3>
        <div class="task-row" v-for="task in todayTasks" :key="task.id">
          <div class ="task-input">
            <input type="checkbox" name="status" id="status">
            <label>
              {{task.title}} - <span>
                {{ formatRelativeDate(task.deadline_date, task.deadline_time) }}
              </span>
            </label>
          </div>
        </div>
      </div>
      <div class="task-container">
        <h3>This week: </h3>
        <div class="task-row" v-for="task in nextTasks" :key="task.id">
          <div class ="task-input">
            <input type="checkbox" name="status" id="status">
            <label>
              {{task.title}} - <span>
                {{ formatRelativeDate(task.deadline_date, task.deadline_time) }}
              </span>
            </label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {
  formatRelative,
  isAfter,
  isBefore,
  isEqual,
} from 'date-fns';
import { mapActions, mapGetters } from 'vuex';

export default defineComponent({
  name: 'HelloWorld',
  methods: {
    ...mapActions([
      'getTasks',
      'updateTask',
      'deledteTask',
    ]),

    formatRelativeDate(date: string, time: string) {
      const dateSplitted = date.split('T')[0];
      const dateFormatted = new Date(`${dateSplitted}T${time}`);
      const relativeData = formatRelative(dateFormatted, new Date());
      return relativeData;
    },
  },
  computed: {
    ...mapGetters(['TASKS']),
    overduedTasks() {
      const baseDates = this.TASKS;
      const overdued = baseDates.filter((task: any) => {
        const dateSplitted = task.deadline_date.split('T')[0];
        const dateFormatted = new Date(`${dateSplitted}T${task.deadline_time}`);
        return isBefore(dateFormatted, new Date());
      });
      return overdued;
    },
    todayTasks() {
      const baseDates = this.TASKS;
      const todayList = baseDates.filter((task: any) => {
        const dateSplitted = task.deadline_date.split('T')[0];
        const dataList = dateSplitted.split('-');
        console.log(new Date(dataList));

        const dateFormatted = new Date(dataList);
        const today = new Date();
        const day = today.getDay() + 1;
        const month = today.getMonth();
        const year = today.getFullYear();
        console.log('hoje', new Date(year, month, day));
        return isEqual(new Date(dataList), new Date(year, month, day));
      });
      return todayList;
    },
    nextTasks() {
      const baseDates = this.TASKS;
      const overdued = baseDates.filter((task: any) => {
        const dateSplitted = task.deadline_date.split('T')[0];
        const dateFormatted = new Date(`${dateSplitted}T${task.deadline_time}`);
        return isAfter(dateFormatted, new Date());
      });
      return overdued;
    },
  },
  mounted() {
    this.getTasks();
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  h3 {
    text-align: start;
    font-weight: bold;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
  .card {
    box-shadow: 1px 1px 3px #8a8a8a;
    width: 100%;
    max-width: 48rem;
    border-radius: 0.8rem;
    margin: 1.2rem auto 3.2rem;
    padding: 2rem;
    overflow: hidden;
  }
  .overdue {
    color: #d50000;
  }
  .task-container {
    margin-bottom: 2.8rem;
    border-bottom: 1px solid #dadada;
  }
  .task-row {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  .task-input {
    margin: 1.6rem 0;
    display: flex;
    & input {
      margin-right: 1rem;
    }
    & span {
      font-size: 0.75rem;
      color: #666;
    }
  }
  .delete {
    color: #d50000;
    font-size: 0.75rem;
  }
</style>
