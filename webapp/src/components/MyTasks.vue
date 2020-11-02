<template>
  <div>
    <div class="card">
      <div class="task-container">
        <h3 class="overdue">Overdue: </h3>
        <div class="task-row">
          <div class ="task-input">
            <input type="checkbox" name="status" id="status">
            <label>
              <span>Ontem as 9:00</span> - Atividade 1
            </label>
          </div>
          <button>
            <span class="delete">Excluir</span>
          </button>
        </div>
        <div class="task-row">
          <div class ="task-input">
            <input type="checkbox" name="status" id="status">
            <label><span>Hoje as 7:00</span> - Atividade 1 </label>
          </div>
          <button>
            <span class="delete">Excluir</span>
          </button>
        </div>
        <div class="task-row">
          <div class ="task-input">
            <input type="checkbox" name="status" id="status">
            <label><span>Hoje as 8:15</span> - Atividade 1 </label>
          </div>
          <button>
            <span class="delete">Excluir</span>
          </button>
        </div>
    </div>
      <div class="task-container">
        <h3>Today: </h3>
      </div>
      <div class="task-container">
        <h3>This week: </h3>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HelloWorld',
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
