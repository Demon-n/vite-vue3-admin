<template>
  <Itable :columns="columns" :tableData="tableData.articleList" />
</template>
<script lang="ts" setup>
import Itable from '../../../components/Itable.vue'
import { getAllMenuCategory } from '../../../api/index'
import { reqDeleteCategorySort } from '../../../api/index'
import { useRouter } from 'vue-router'
import { reactive } from '@vue/reactivity';

let tableData: any = reactive({ articleList: [] })
let columns = reactive([
  {
    title: '序号',
    dataIndex: 'id',
    key: 'id',
    width: '10%',
    align: 'center'
  },
  {
    title: '类别名',
    dataIndex: 'name',
    key: 'name',
    align: 'center',
    width: '10%',
  },
  {
    title: '描述',
    dataIndex: 'alias',
    key: 'alias',
    width: '20%',
    align: 'center'
  },
  {
    title: '操作',
    dataIndex: 'operation',
    key: 'operation',
    width: '10%',
    align: 'center',
    btn: [
      {
        title: "edit", callback: () => {
          console.log("edit")
        }
      },
      {
        title: "delete", callback: (params: any) => {
          reqDeleteCategorySort(params).then((res) => {
            console.log("调用后的参数", res)
          })
        }
      }
    ]
  },
])
const router = useRouter()
// 获取分类
getAllMenuCategory().then((res) => {
  tableData.articleList = res.data;
  console.log('传出去的文章，新闻数组', tableData.articleList);
  console.log('传出去的标题头', columns)
});

</script>