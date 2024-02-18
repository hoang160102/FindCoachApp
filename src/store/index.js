import { createStore } from 'vuex';
import coachModule from './modules/coaches/coaches.js';

const store = createStore({
  modules: {
    coaches: coachModule,
  },
});

export default store;
