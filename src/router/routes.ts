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
  },
  //文章、新闻列表
  {
    name: 'SelectSort',
    path: '/selectSort',
    component: () => import('../views/SelectSort/index.vue'),
  }
];

export default routes