<script setup lang="ts">
import { ref, reactive } from 'vue'
import { data } from '@/libs/data.ts'
import enUS from '@arco-design/web-vue/es/locale/lang/en-us'

const expandedKeys = ref([])

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    slotName: 'name',
  },
  {
    title: 'User status',
    dataIndex: 'salary',
    width: 400,
  },
  {
    title: 'Payment status',
    dataIndex: 'address',
  },
  {
    title: 'Amount',
    dataIndex: 'email',
  },
  {
    title: 'Action',
    dataIndex: '',
  },
]

const rowSelection = reactive<{
  type: 'checkbox' | 'radio' | undefined
  showCheckedAll: boolean
  onlyCurrent: boolean
}>({
  type: 'checkbox',
  showCheckedAll: true,
  onlyCurrent: false,
})
</script>

<template>
  <div class="table">
    <div class="table_header"></div>
    <a-config-provider class="acro" :locale="enUS">
      <a-table
        :columns="columns"
        :data="data"
        v-model:expandedKeys="expandedKeys"
        :row-selection="rowSelection"
        :pagination="false"
      >
        <template #name="{ record }">
          <div>
            <div class="slot_name">{{ record.name }}</div>
            <div class="slot_email">{{ record.email }}</div>
          </div>
        </template>
      </a-table>
    </a-config-provider>
  </div>
</template>

<style scoped>
.slot_name {
  color: #25213b;
}

.slot_email {
  color: #6e6893;
}
</style>
