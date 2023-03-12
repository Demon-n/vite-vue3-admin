<template>
  <Itable :columns="columns" :tableData="tableData.articleList" :mydelete="mydelete" :myedit="myedit" />
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
    align: 'center'
  },
  {
    title: '类别名',
    dataIndex: 'title',
    key: 'title',
    align: 'center'
  },
  {
    title: '描述',
    dataIndex: 'description',
    key: 'description',
    width: '20%',
    align: 'center'
  },
  {
    title: '图片',
    dataIndex: 'img',
    key: 'img',
    width: '5%',
    align: 'center'
  },
  {
    title: '操作',
    dataIndex: 'operation',
    key: 'operation',
    width: '15%',
    align: 'center'
  },
])
const router = useRouter()
// 获取分类
getAllMenuCategory().then((res) => {
  tableData.articleList = res.data;
  //遍历数组对象追加编辑、删除操作
  for (let i = 0; i < tableData.articleList.length; i++) {
    tableData.articleList[i].btn = [
      {
        title: "edit", callback: () => {
          console.log("edit")
        }
      },
      {
        title: "delete", callback: (data: any) => {
          console.log("delete", data)
          reqDeleteCategorySort(data).then((res) => {
            console.log(res)
          })
        }
      }
    ]
  }
  console.log('传出去的文章，新闻数组', tableData.articleList);
  console.log('传出去的标题头', columns)
});
const myedit = () => {
  console.log('编辑')
}
const mydelete = (id: string) => {
  console.log('删除的id：', id)

}
</script>