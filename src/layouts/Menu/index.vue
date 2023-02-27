<template>
  <div>
    <br />
    <h1 style="color:aliceblue; text-align: center;">
      <a class="header-log" href="/home">Vite-Vue3-Admin</a>
    </h1>
    <a-menu click v-model:openKeys="state.openKeys" v-model:selectedKeys="state.selectedKeys" style="width: 256px"
      mode="inline" :theme="state.theme">
      <a-sub-menu v-for="sItem in menuList" :index="sItem.key" :key="sItem.key">
        <template #icon>
          <AppstoreOutlined />
        </template>
        <template #title>
          <router-link :to="sItem.path">
            {{ sItem.title }}
          </router-link>
        </template>
        <a-menu-item v-for="cItem in sItem.children" :index="cItem.key" :key="cItem.key">
          <router-link :to="cItem.path">{{ cItem.title }}</router-link>
        </a-menu-item>
      </a-sub-menu>
    </a-menu>
  </div>
</template>
<script  lang="ts" setup>
import { getAllMenuCategory } from '../../api/index'
import { reactive, } from 'vue';
import type { MenuTheme } from 'ant-design-vue';
import {
  AppstoreOutlined,
} from '@ant-design/icons-vue';

const menuList = reactive([
  {
    title: "系统管理",
    path: "/systemManage",
    key: "systemManage",
    children: [
      {
        title: "菜单分类管理",
        path: "/categoryManage",
        key: "categoryManage",
      },
      {
        title: "系统信息管理",
        path: "/systemInfoManage",
        key: "systemInfoManage",
      }
    ],
  },
]);
//加载菜单
getAllMenuCategory().then((res) => {
  const newData = res.data.map((item: { title: any; id: string; }, index: string) => {
    return {
      title: item.title,
      path: '/SelectSort?id=' + item.id,
      key: 'SelectSort' + index
    }
  })
  menuList.unshift(...newData);
}
)

const state = reactive({
  theme: 'dark' as MenuTheme,
  selectedKeys: ['1'],
  openKeys: ['sub1'],
});

const changeTheme = (checked: boolean) => {
  state.theme = checked ? 'dark' : 'light';
};

function onUpdated(arg0: () => void) {
  throw new Error('Function not implemented.');
}
</script>
<style>
.ant-layout-sider .ant-layout-sider-children .ant-menu {
  width: 100% !important;
}



.header-log {
  font-weight: 800;
}
</style>
  
  