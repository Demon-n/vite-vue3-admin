<template>
  <Itable :columns="tableColumns" :tableData="articleLists" :tableName="tableName" />
</template>
<script lang="ts" setup>
import { reactive } from '@vue/reactivity';
import { reqSelectSort } from '../../../api';
import Itable from '../../../components/Itable.vue'
import { useRouter } from 'vue-router'
const tableName = "selectTable"
let articleLists: any = reactive({ articleList: [] })


const tableColumns = reactive([
  {
    title: '序号',
    dataIndex: 'id',
    key: 'id',
    width: '30%',
  },
  {
    title: '类别名',
    dataIndex: 'cate_id',
    key: 'cate_id',
  },
  {
    title: '描述',
    dataIndex: 'alias',
    key: 'alias'
  },
  {
    title: '图片',
    dataIndex: 'img'
  },
  {
    title: '存在与否',
    dataIndex: 'is_delete',
    key: 'is_delete'
  },
  {
    title: '操作',
    dataIndex: 'operation',
    key: 'operation'
  },
])
const router = useRouter()
// console.log('rojaldjalsjdasjd', router.currentRoute.value.query.id)
reqSelectSort({ id: router.currentRoute.value.query.id }).then((res) => {
  articleLists.articleList = res.data;
  console.log('传出去的文章，新闻数组', articleLists.articleList);
  console.log('传出去的标题头', tableColumns)
});
</script>