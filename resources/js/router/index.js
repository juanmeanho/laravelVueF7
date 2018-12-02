

import HomePage from '../components/Home.vue';
import AboutPage from '../components/about.vue';
import FormPage from '../components/form.vue';
import DynamicRoutePage from '../components/dynamic-route.vue';
import NotFoundPage from '../components/not-found.vue';

import PanelLeftPage from '../components/panel-left.vue';
import PanelRightPage from '../components/panel-right.vue';

export default [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/panel-left/',
    component: PanelLeftPage,
  },
  {
    path: '/panel-right/',
    component: PanelRightPage,
  },
  {
    path: '/about/',
    component: AboutPage,
  },
  {
    path: '/form/',
    component: FormPage,
  },
  {
    path: '/dynamic-route/blog/:blogId/post/:postId/',
    component: DynamicRoutePage,
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];


