const routes = [
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
    path: '/',
    component: () => import('../layouts/index.vue'),
    children: [
      //文章、新闻列表
      {
        name: 'SelectSort',
        path: '/selectSort/:id',
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
      },
      //分类管理
      {
        name: 'CategoryManage',
        path: '/categoryManage',
        component: () => import('../views/Container/CategoryManage/index.vue'),
      },
      //系统管理
      {
        name: 'SystemInfoManage',
        path: '/systemInfoManage',
        component: () => import('../views/Container/SystemInfoManage/index.vue'),
      }
    ]
  },
];

export default routes