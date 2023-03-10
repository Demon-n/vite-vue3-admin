<template>
    SystemInfoManage
    <Itable  :columns="tableColumns" :tableData="articleLists.articleList"/>
</template>
<script lang="ts" setup>
import Itable from '../../../components/Itable.vue'
import { useRouter } from 'vue-router'
import { reactive } from '@vue/reactivity';
import {reqSelectSort} from '../../../api/index'
let articleLists: any = reactive({ articleList: [] })
let tableColumns = reactive([
  {
    title: '序号',
    dataIndex: 'id',
    key: 'id',
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
// 获取文章、新闻
reqSelectSort(router.currentRoute.value.params).then((res) => {
  // console.log(res.data.length)
  articleLists.articleList = res.data;
  //遍历数组对象追加删除操作
  // for (let i = 0; i < articleLists.articleList.length; i++) {
  //   articleLists.articleList[i].operation = 'delete' 
  // }
  console.log('传出去的文章，新闻数组', articleLists.articleList);
  console.log('传出去的标题头', tableColumns)
});
</script>