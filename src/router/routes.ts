const routes = [
  //默认入口
  {
    path: '/',
    redirect: '/login'
  },
  //登录
  {
    name: 'Login',
    path: '/login',
    component: () => import('../views/Login/index.vue'),
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
    component: () => import('../layouts/index.vue'),
    children: [
      //文章、新闻列表
      {
        name: 'SelectSort',
        path: '/selectSort',
        component: () => import('../views/Container/SelectSort/index.vue'),
      },
      //个人中心
      {
        name: 'SelectUserInfo',
        path: '/selectUserInfo',
        component: () => import('../views/Container/SelectUserInfo/index.vue'),
      },
      //修改密码
      {
        name: 'undatePassWord',
        path: '/undatePassWord',
        component: () => import('../views/Container/UpdatePass/index.vue'),
      }
    ]
  },

];

export default routes