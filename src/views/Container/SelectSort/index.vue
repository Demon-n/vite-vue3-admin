<template>
  <Itable :columns="tableColumns" :tableData="tableData.articleList" />
</template>
<script lang="ts" setup>
import { reactive } from '@vue/reactivity';
import { reqSelectSort } from '../../../api';
import { reqDeleteSort } from '../../../api';
import Itable from '../../../components/Itable.vue'
import { useRouter } from 'vue-router'

let tableData: any = reactive({ articleList: [] })
let tableColumns = reactive([
  {
    title: '序号',
    dataIndex: 'id',
    key: 'id',
    align: 'center'
  },
  {
    title: '类别名',
    dataIndex: 'cate_id',
    key: 'cate_id',
    align: 'center'
  },
  {
    title: '描述',
    dataIndex: 'alias',
    key: 'alias',
    align: 'center'
  },
  {
    title: '存在与否',
    dataIndex: 'is_delete',
    key: 'is_delete',
    align: 'center'
  },
  {
    title: '操作',
    dataIndex: 'operation',
    key: 'operation',
    align: 'center',
    width: '15%',
  },
])
const router = useRouter()
// 获取文章、新闻
reqSelectSort(router.currentRoute.value.params).then((res) => {
  // console.log(res.data.length)
  tableData.articleList = res.data;
  //遍历数组对象追加编辑、删除操作
  for (let i = 0; i < tableData.articleList.length; i++) {
    tableData.articleList[i].btn = [
      { title: "edit", callback: () => { console.log("edit") } },
      {
        title: "delete", callback: (data: any) => {
          console.log("delete",data)
          //删除文章、新闻
          reqDeleteSort(data).then((res) => {
            console.log(res)
          })
        }
      }
    ]
  }
  console.log('传出去的文章，新闻数组', tableData.articleList);
  console.log('传出去的标题头', tableColumns)
});
const myedit = () => {
  console.log('编辑')
}
const mydelete = () => {
  console.log('删除')
}

</script>