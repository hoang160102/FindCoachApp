import { createStore } from 'vuex';
import coachModule from './modules/coaches/coaches.js';
import requestModule from './modules/requests/requests.js'

const store = createStore({
  modules: {
    coaches: coachModule,
    requests: requestModule
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
