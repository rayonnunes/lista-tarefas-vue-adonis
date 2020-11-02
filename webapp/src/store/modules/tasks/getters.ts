interface Istate {
  tasks: [];
  task: {};
}

const getters = {
  TASKS: (store: Istate) => store.tasks,
  TASK: (store: Istate) => store.task,
};

export default getters;
