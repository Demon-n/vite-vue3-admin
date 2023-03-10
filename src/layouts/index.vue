<template>
    <a-layout class="layout">
        <!-- 左侧导航栏 -->
        <a-layout-sider>
            <Menu />
        </a-layout-sider>
        <!-- 头部和内容 -->
        <a-layout>
            <!-- 头部 -->
            <a-layout-header style="background: #fff; padding: 0 ;display:flex">
                <!-- <menu-unfold-outlined v-if="collapsed" class="trigger" @click="() => (collapsed = !collapsed)" /> -->
                <!-- <menu-fold-outlined v-else class="trigger" @click="() => (collapsed = !collapsed)" /> -->
                <span
                    style="display: inline-block; font-size: 20px; font-weight: 600; width: 80%; text-align: center; flex: 1;">
                    cms管理系统
                </span>
                <a-dropdown>
                    <a class="ant-dropdown-link" @click.prevent>
                        <span class="username">
                            {{ user.userInfo.username }}
                        </span>
                        <span class="user">
                            <a-avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                        </span>
                    </a>
                    <template #overlay>
                        <a-menu>
                            <a-menu-item>
                                <router-link to="/selectUserInfo">个人中心</router-link>
                            </a-menu-item>
                            <a-menu-item>
                                <router-link to="/undatePassWord">修改密码</router-link>
                            </a-menu-item>
                            <a-menu-item>
                                <router-link to="/login">退出登录</router-link>
                            </a-menu-item>
                        </a-menu>
                    </template>
                </a-dropdown>

            </a-layout-header>
            <!-- 内容 -->
            <a-layout-content :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }">
                <router-view :key="$route.fullPath"></router-view>
            </a-layout-content>
        </a-layout>
    </a-layout>
</template>
<script lang="ts" setup>
import Menu from './Menu/index.vue'
import { reqGetUserInfo } from '../api/index'
import { reactive } from 'vue';
let user: any = reactive({ userInfo: {} })
//获取用户名
reqGetUserInfo().then((res) => {
    user.userInfo = res
})
</script>
<style scoped lang="less">
#components-layout-demo-custom-trigger .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
    color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.3);
    margin: 16px;
}

.site-layout .site-layout-background {
    background: #fff;
}

.layout {
    height: 100vh;
}

.layout .user {
    display: inline-block;
    width: 100px;
    text-align: center;
}

.ant-layout .ant-layout-header .ant-dropdown-link {
    display: inline-block;

    .username {
        color: black;
        text-align: center;
        font-size: 16px;
        font-weight: 500;
        display: inline-block;
        float: left;
        line-height: 70px;
    }
}
</style>
