import api from '../../../service/api';

interface ApiRequestProps {
  id: number;
  title?: 'string';
  deadline_date?: 'string';
  deadline_time?: 'string';
}

interface ApiResponseProps {
    id: number;
    title: 'string';
    deadline_date: 'string';
    deadline_time: 'string';
    created_at: 'string';
    updated_at: 'string';
}

const actions = {
  async getTasks({ commit }: any) {
    await api()
      .get('/tasks')
      .then(({ data }: { data: ApiResponseProps }) => {
        commit('SET_TASKS', data);
      });
  },

  async updateTask({ commit }: any, payload: ApiRequestProps) {
    await api()
      .patch(`/tasks/${payload.id}`)
      .then(({ data }: { data: ApiResponseProps }) => {
        commit('SET_TASKS', data);
      });
  },

  async deledteTask({ commit }: any, id: number) {
    await api()
      .delete(`/tasks/${id}`)
      .then(({ data }: { data: ApiResponseProps }) => {
        commit('SET_TASKS', data);
      });
  },
};

export default actions;
