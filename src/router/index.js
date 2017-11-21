import Vue from 'vue'
import Router from 'vue-router'
import NProgress from 'nprogress'

Vue.use(Router)

const router = new Router({
  mode: 'hash',
  base: __dirname,
  scollBehavior: () => ({
    Y: 0
  }),
  routes: [{
    path: '/',
    name: 'index',
    component: resolve => require(['../components/index.vue'], resolve),
  }]
})

router.beforeEach((to, from, next) => {
  NProgress.start();
  console.log(`路由开始：${from.path}`);
  // console.log(from)
  next();
});

router.afterEach(route => {
  NProgress.done();
  // console.log(route);
  console.log(`路由结束：${route.path}`)
})

export default router
