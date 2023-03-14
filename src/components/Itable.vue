<template>
  <a-rol :buttonData="buttonData">
    <template v-for="item in buttonData">
      <a-button class="editable-add-btn" style="margin: 8px">{{ item.title }}</a-button>
    </template>
  </a-rol>
  <a-table :dataSource="tableData" :columns="columns">
    <template #bodyCell="{ column, record }">
      <template v-if="column.dataIndex === 'operation'">
        <a-row>
          <template v-for="item in column.btn">
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
import { object } from 'vue-types';

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
  buttonData: {
    type: Array,
    default: function () {
      return []
    }
  }
})
// button数据
console.log('button收到button', props.buttonData)

// 表头数据
console.log('table表收到的标题头', props.columns)

// 表数据
console.log('table表收到的新闻文章数组', props.tableData)

</script>