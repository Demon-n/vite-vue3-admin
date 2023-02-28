<template>
    <Itable :columns="tableColumns" :tableData="articleList" :tableName="tableName" />
</template>
<script lang="ts" setup>
import { reactive } from '@vue/reactivity';
import { reqSelectSort } from '../../../api';
import Itable from '../../../components/Itable.vue'
import { useRouter } from 'vue-router'
const tableName = "selectTable"
let articleList = reactive([])
const tableColumns = reactive([
    {
        lable: "序号",
        prop: "id",
        width: "30%",
        children: [],
    },
    {
        lable: "类别名",
        prop: "title",
        width: "30%",
        children: [],
    },
    {
        lable: "描述",
        prop: "description",
        width: "30%",
        children: [],
    },
    {
        lable: "图片",
        prop: "img",
        width: "30%",
        children: [],
    },
    {
        lable: "存在否",
        prop: "is_delete",
        width: "30%",
        children: [],
    },
])
const router = useRouter()
console.log('rojaldjalsjdasjd', router.currentRoute.value.query.id)
reqSelectSort({ id: router.currentRoute.value.query.id }).then((res) => {
    articleList = res.data;
    console.log(articleList);
});
</script>