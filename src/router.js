import { createRouter, createWebHistory } from 'vue-router';
import CoachesList from './pages/coaches/CoachesList.vue';
import CoachesDetail from './pages/coaches/CoachesDetail.vue';
import CoachRegistration from './pages/coaches/CoachRegistration.vue';
import ContactCoach from './pages/requests/ContactCoach.vue';
import RequestReceived from './pages/requests/RequestReceived.vue';
import UserAuth from './pages/auth/UserAuth.vue'
import NotFound from './pages/NotFound.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: 'coaches' },
    { path: '/coaches', component: CoachesList },
    {
      path: '/coaches/:id',
      component: CoachesDetail,
      children: [{ path: 'contact', component: ContactCoach}],
      props: true
    },
    { path: '/register', component: CoachRegistration },
    { path: '/request', component: RequestReceived },
    { path: '/auth', component: UserAuth},
    { path: '/:notFound(.*)', component: NotFound },
  ],
});

export default router;
