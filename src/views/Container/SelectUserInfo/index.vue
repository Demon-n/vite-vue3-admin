<template>
   <a-descriptions title="User Info">
      <a-descriptions-item label="用户名">{{ user.userInfo.username }}</a-descriptions-item>
      <a-descriptions-item label="邮箱">{{ user.userInfo.email }}</a-descriptions-item>
      <a-descriptions-item label="id">{{ user.userInfo.id }}</a-descriptions-item>
      <a-descriptions-item label="nickname">{{ user.userInfo.nickname }}</a-descriptions-item>
      <!-- <a-descriptions-item label="密码">{{ user.userInfo.password }}</a-descriptions-item> -->
      <a-descriptions-item label="status">{{ user.userInfo.status }}</a-descriptions-item>
      <a-descriptions-item label="user_pic">{{ user.userInfo.user_pic }}</a-descriptions-item>
   </a-descriptions>
</template>
<script lang="ts" setup>
import { reactive } from '@vue/reactivity';
import { reqGetUserInfo } from '../../../api/index'
let user: any = reactive({ userInfo: {} })
reqGetUserInfo().then((res) => {
   user.userInfo = res
})

</script>
<style></style>
 
 
 