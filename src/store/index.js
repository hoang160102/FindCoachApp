import { createStore } from 'vuex';
import coachModule from './modules/coaches/coaches.js';
import requestModule from './modules/requests/requests.js'
import authModule from './modules/auth/auth.js'

const store = createStore({
  modules: {
    coaches: coachModule,
    requests: requestModule,
    auth: authModule
  },
});

export default store;
