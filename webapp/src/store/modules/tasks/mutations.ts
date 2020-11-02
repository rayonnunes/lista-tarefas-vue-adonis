interface Istate {
  tasks: [];
  task: {};
}

const mutations = {
  SET_TASKS: (state: Istate, payload: Istate['tasks']) => {
    state.tasks = payload;
  },
  SET_TASK: (state: Istate, payload: Istate['task']) => {
    state.task = payload;
  },
};

export default mutations;
