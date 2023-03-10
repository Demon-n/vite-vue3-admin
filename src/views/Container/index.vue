<template >
    <!-- <a-carousel v-if="router.currentRoute.value.path === '/home'">
        home
    </a-carousel>
    <SelectSort v-if="router.currentRoute.value.path === '/SelectSort/' + router.currentRoute.value.params.id" />
    <SelectUserInfo v-if="router.currentRoute.value.path === '/selectUserInfo'" />
    <undatePassWord v-if="router.currentRoute.value.path === '/undatePassWord'" />
    <CategoryManage v-if="router.currentRoute.value.path === '/categoryManage'" />
    <SystemInfoManage v-if="router.currentRoute.value.path === '/systemInfoManage'" /> -->
    <router-view></router-view>
</template>
<script lang="ts" setup>
// import { useRouter } from 'vue-router'
// import SelectSort from './SelectSort/index.vue'
// import SelectUserInfo from './SelectUserInfo/index.vue'
// import undatePassWord from './UpdatePass/index.vue'
// import CategoryManage from './CategoryManage/index.vue'
// import SystemInfoManage from './SystemInfoManage/index.vue'

// const router = useRouter()
// console.log('router', router)


</script>
<style scoped>
/* For demo */
.ant-carousel :deep(.slick-slide) {
    text-align: center;
    height: 100%;
    line-height: 160px;
    background: #364d79;
    overflow: hidden;
}

.ant-carousel :deep(.slick-slide h3) {
    color: #fff;
}
</style>