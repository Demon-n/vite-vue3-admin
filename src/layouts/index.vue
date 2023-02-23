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
                <span class="user">
                    <a-avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                </span>
            </a-layout-header>
            <!-- 内容 -->
            <a-layout-content :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }">
                Content
            </a-layout-content>
        </a-layout>
    </a-layout>
</template>
<script lang="ts">


import Menu from './Menu/index.vue'
import {
    FileTextOutlined,
    ProfileOutlined,
    SettingFilled,
    MenuUnfoldOutlined,
    MenuFoldOutlined,

} from '@ant-design/icons-vue';
import { defineComponent, ref } from 'vue';
export default defineComponent({
    components: {
        FileTextOutlined,
        ProfileOutlined,
        SettingFilled,
        MenuUnfoldOutlined,
        MenuFoldOutlined,
        Menu
    },
    setup() {
        return {
            selectedKeys: ref<string[]>(['1']),
            collapsed: ref<boolean>(false),
        };
    },
});
</script>
<style>
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
    height: 100%;
    width: 100px;
    text-align: center;
    float: right;
}
</style>
