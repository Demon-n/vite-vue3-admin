<template>
  <div>
    <br />
    <br />
    <a-menu v-model:openKeys="openKeys" v-model:selectedKeys="selectedKeys" style="width: 256px" mode="inline"
      :theme="theme">
      <a-sub-menu v-for="sItem in menuList" :index="sItem.key" :key="sItem.key">
        <template #icon>
          <AppstoreOutlined />
        </template>
        <template #title>
          {{ sItem.title }}
        </template>
        <a-menu-item v-for="cItem in sItem.children" :index="cItem.key" :key="cItem.key">
          {{ cItem.title }}
        </a-menu-item>
      </a-sub-menu>
    </a-menu>
  </div>
</template>
<script lang="ts">
import { getAllMenuCategory } from '../../api/index'
import { defineComponent, reactive, toRefs, onMounted } from 'vue';
import {
  MailOutlined,
  CalendarOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from '@ant-design/icons-vue';
import type { MenuTheme } from 'ant-design-vue';
export default defineComponent({
  components: {
    MailOutlined,
    CalendarOutlined,
    AppstoreOutlined,
    SettingOutlined,
  },
  setup() {

    const menuList = [
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
          },
          {
            title: "个人中心",
            path: "/selectUserInfo",
            key: "selectUserInfo",
          },
          {
            title: "修改密码",
            path: "/undatePassWord",
            key: "undatePassWord",
          },
          {
            title: "退出登录",
            path: "/exit",
            key: "exit",
          }
        ],
      },
    ]
    const state = reactive({
      theme: 'dark' as MenuTheme,
      selectedKeys: ['1'],
      openKeys: ['sub1'],
    });

    const changeTheme = (checked: boolean) => {
      state.theme = checked ? 'dark' : 'light';
    };

    getAllMenuCategory().then((res) => {
      // console.log("000", res);
      const newData = res.data.map((item: { title: any; id: string; }, index: string) => {
        return {
          title: item.title,
          path: '/SelectSort?id=' + item.id,
          key: 'SelectSort' + index
        }
      })
      menuList.unshift(...newData);
    });
    return {
      ...toRefs(state),
      changeTheme,
      menuList,
    };
  },

});
</script>
<style>
.ant-layout-sider .ant-layout-sider-children .ant-menu {
  width: 100% !important;
}
</style>
  
  