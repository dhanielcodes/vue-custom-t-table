<script setup lang="ts">
import { ref, reactive } from 'vue'
import { data } from '@/libs/data.ts'
import enUS from '@arco-design/web-vue/es/locale/lang/en-us';
const expandedKeys: any = ref([]);


const columns = [{
  title: 'Name',
  dataIndex: 'name',
}, {
  title: 'Salary',
  dataIndex: 'salary',
}, {
  title: 'Address',
  dataIndex: 'address',
}, {
  title: 'Email',
  dataIndex: 'email',
}];


const rowSelection = reactive({
  type: 'checkbox',
  showCheckedAll: true,
  onlyCurrent: false,
});


</script>

<template>
  <div>
    <a-config-provider :locale="enUS">
      <a-table class="table" :columns="columns" :data="data" v-model:expandedKeys="expandedKeys"
        :row-selection="rowSelection" />
    </a-config-provider>
  </div>
</template>

<style scoped>
.table {
  max-width: 1400px;
  width: 90%;
  margin: 0 auto;
}

.arco-icon-plus {
  display: none !important;
}
</style>
