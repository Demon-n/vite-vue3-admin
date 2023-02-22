const routes = [
  //登录
  {
    name: 'Login',
    path: '/',
    component: () => import('../views/Login/index.vue')
  },
  //注册
  {
    name: 'Register',
    path: '/register',
    component: () => import('../views/Register/index.vue')
  },
  //主页
  {
    name: 'Home',
    path: '/home',
    component: () => import('../layouts/index.vue')
  }
];

export default routes