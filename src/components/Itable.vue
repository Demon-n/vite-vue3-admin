<template>
  <a-table :dataSource="tableData" :columns="columns">
    <template #bodyCell="{ column, record }">
      <template v-if="column.dataIndex === 'operation'">
        <a-row>
          <a-col :span="6">
            <a-popconfirm v-if="tableData.length" title="Sure to edit?" @confirm="onEdit(record.key)">
              <a>Edit</a>
            </a-popconfirm>
          </a-col>
          <a-col :span="6">
            <a-popconfirm v-if="tableData.length" title="Sure to delete?" @confirm="onDelete(record.key)">
              <a>Delete</a>
            </a-popconfirm>
          </a-col>
        </a-row>
      </template>
    </template>
  </a-table>
</template>
<script lang="ts" setup>

let props: any = defineProps({
  columns: {
    type: Array,
    default: function () {
      return []
    }
  },
  tableData: {
    type: Array,
    default: function () {
      return []
    }
  }
})
const onEdit = (key: string) => {
  props.tableData = props.tableData.filter((item: { key: string; }) => item.key !== key);
};
const onDelete = (key: string) => {
  props.tableData = props.tableData.filter((item: { key: string; }) => item.key !== key);
};
// 表头数据
console.log('table表收到的标题头', props.columns)

// 表数据
console.log('table表收到的新闻文章数组', props.tableData)
</script>