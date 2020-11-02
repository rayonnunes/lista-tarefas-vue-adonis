<template>
  <div id="clock">
    <p class="date">{{ date }}</p>
    <p class="time">{{ time }}</p>
  </div>
</template>

<script>
import { format } from 'date-fns';

export default {

  data() {
    return {
      date: '',
      time: '',
    };
  },

  methods: {
    updateTime() {
      const todayDate = new Date();
      this.date = format(todayDate, "do, MMMM 'of' yyyy");
      this.time = format(todayDate, 'HH:mm:ss');
    },
  },

  mounted() {
    this.interval = setInterval(() => this.updateTime(), 1000);
  },
};
</script>

<style scoped lang="scss">
  .date {
    margin-bottom: 0.4rem;
    font-weight: 700;
  }
</style>
