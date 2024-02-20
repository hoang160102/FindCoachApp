import { createStore } from 'vuex';
import coachModule from './modules/coaches/coaches.js';

const store = createStore({
  modules: {
    coaches: coachModule,
  },
  state() {
    return {
      userId: 'c3'
    }
  },
  getters: {
    getUserId(state) {
      return state.userId
    }
  }
});

export default store;
