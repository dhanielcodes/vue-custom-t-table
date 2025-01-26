<script setup lang="ts">
import { ref, reactive } from 'vue'
import { data } from '@/libs/data.ts'
import enUS from '@arco-design/web-vue/es/locale/lang/en-us';
import NameSlot from '@/tables/UserTable/slots/name-slot.vue';
import StatusSlot from '@/tables/UserTable/slots/status-slot.vue';
import PaymentStatusSlot from '@/tables/UserTable/slots/payment-status-slot.vue';
import { CFormatter } from '@/libs/utils';

const expandedKeys = ref([]);


const columns = [{
  title: 'Name',
  slotName: 'name'
}, {
  title: 'User status',
  slotName: 'status',
  width: 400
}, {
  title: 'Payment status',
  slotName: 'pStatus',
}, {
  title: 'Amount',
  slotName: 'amount',
},
{
  title: 'Action',
  slotName: 'action',
}];


import type { TableRowSelection } from '@arco-design/web-vue';

const rowSelection: TableRowSelection = reactive({
  type: 'checkbox',
  showCheckedAll: true,
  onlyCurrent: false,
});

</script>

<template>
  <div class="table">
    <div class="table_header"></div>
    <a-config-provider class="acro" :locale="enUS">
      <a-table :columns="columns" :data="data" v-model:expandedKeys="expandedKeys" :row-selection="rowSelection"
        :pagination="false">
        <template #name="{ record }">
          <NameSlot :record="record" />
        </template>
        <template #status="{ record }">
          <StatusSlot :record="record" />
        </template>
        <template #pStatus="{ record }">
          <PaymentStatusSlot :record="record" />
        </template>
        <template #amount="{ record }">
          <div>{{ CFormatter(record.amount) }}</div>
        </template>
        <template #action="{ record }">
          <div>{{ CFormatter(record.amount) }}</div>
        </template>
      </a-table>
    </a-config-provider>
  </div>
</template>

<style scoped>
.table {}

.slot_name {
  color: #25213B
}

.slot_email {
  color: #6E6893
}
</style>
