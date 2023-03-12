<template>
  <a-table columnWidth :dataSource="tableData" :columns="columns">
    <template #bodyCell="{ column, record }">
      <template v-if="column.dataIndex === 'operation'">
        <a-row>
          <template v-for="item in record.btn">
            <a-col span="12">
              <a-button type="primary" @click="item.callback({ id: record.id })">{{ item.title }}</a-button>
            </a-col>
          </template>
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
  },
  mydelete: {
    type: Function,
    default: function () {
      return function () {
      }
    }
  },
  myedit: {
    type: Function,
    default: function () {
      return function () { }
    }
  }
})

// 表头数据
console.log('table表收到的标题头', props.columns)

// 表数据
console.log('table表收到的新闻文章数组', props.tableData)

</script>