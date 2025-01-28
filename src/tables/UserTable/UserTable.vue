<template>
  <div class="table">
    <!-- Main Table -->
    <div class="table_header">
      <slot name="header"></slot>
    </div>
    <table cellspacing="0" cellpadding="0" class="main_table">
      <thead class="main_table_head">
        <tr>
          <th v-for="(column, idx) in columns" :key="idx" :style="{ width: column.width + 'px' }">
            {{ column.title }}
          </th>
        </tr>
      </thead>
      <tbody class="main_table_body">
        <template v-for="(item, index) in data" :key="index">
          <tr>
            <td>
              <div :style="{ display: 'flex', alignItems: 'center', gap: '10px' }">
                <Checkbox />
                <div :style="{ transform: 'translateY(12%)' }" @click="toggleNestedTable(index)">
                  <div v-if="item.showNested">
                    <NestReverseIcon />
                  </div>
                  <div v-else>
                    <NestIcon />
                  </div>
                </div>
              </div>
            </td>
            <td>
              <NameSlot :record="item" />
            </td>
            <td>
              <StatusSlot :record="{ status: item.status, lastLogin: item.lastLogin }" />
            </td>
            <td>
              <PaymentStatusSlot :record="{ paymentStatus: item.paymentStatus, paymentDate: item.paymentDate }" />
            </td>
            <td>
              <AmountSlot :record="item" />
            </td>
            <td>
              <AppButtonText :style="{
                color: '#6E6893',
                fontSize: '14px'
              }">View More</AppButtonText>
            </td>
            <td>
              <div class="slot_action">
                <MenuItem position="br">
                <template #action-btn>
                  <div>
                    <icon-more-vertical size="large" :style="{
                      color: '#8B83BA'
                    }" />
                  </div>

                </template>
                <template #content>
                  <div :style="{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start'
                  }">
                    <AppButtonText>Edit</AppButtonText>
                    <AppButtonText>View Profile</AppButtonText>
                    <AppButtonText color="green">Activate User</AppButtonText>
                    <AppButtonText color="red" :style="{
                      borderTop: '1px solid #F2F0F9'
                    }">Delete</AppButtonText>
                  </div>
                </template>
                </MenuItem>
              </div>
            </td>
          </tr>
          <tr v-if="item.showNested">
            <td style="padding: 0px;" :colspan="columns.length">
              <table class="nested_table" cellpadding="0" cellspacing="0">
                <thead class="nested_table_head">
                  <tr>
                    <th v-for="(nestedColumn, idx) in nestedColumns" :key="idx"
                      :style="{ width: nestedColumn.width + 'px' }">
                      <div style="display: flex; gap: 2px;">
                        {{ nestedColumn.title }} <div v-if="nestedColumn.icon">
                          <component :is="nestedColumn.icon"></component>
                        </div>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody class="nested_table_body" v-if="item.children.length">
                  <tr v-for="(nestedItem, nestedIndex) in item.children" :key="nestedIndex">
                    <td></td>
                    <td>{{ moment(nestedItem.date).format('DD/MMM/YYYY').toUpperCase()
                      }}</td>
                    <td>{{ nestedItem.userActivity }}</td>
                    <td>{{ nestedItem.detail }}</td>
                  </tr>
                </tbody>

              </table>
              <div class="no-data" v-if="!item.children.length">
                NO RECORDS FOUND
              </div>
            </td>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import NestIcon from "@/assets/icons/nest-icon.vue";
import NestReverseIcon from "@/assets/icons/nest-reverse-icon.vue";
import AmountSlot from "@/tables/UserTable/slots/amount-slot.vue";
import NameSlot from "@/tables/UserTable/slots/name-slot.vue";
import PaymentStatusSlot from "@/tables/UserTable/slots/payment-status-slot.vue";
import StatusSlot from "@/tables/UserTable/slots/status-slot.vue";
import { Checkbox } from "@arco-design/web-vue";
import AppButtonText from "@/components/AppButtonText.vue";
import MenuItem from "@/components/MenuItem.vue";
import moment from "moment";
import { reactive } from "vue";
import type { ColumnType, TableData } from "@/types/TableTypes";

const props = defineProps({
  columns: {
    required: true,
    type: Array<ColumnType>
  },
  nestedColumns: {
    required: true,
    type: Array<ColumnType>
  },
  tableData: {
    required: true,
    type: Array<TableData>
  }
})

const data = reactive(props.tableData)

// Function to toggle the visibility of the nested table
const toggleNestedTable = (index: number) => {
  data[index].showNested = !data[index].showNested;
};


</script>

<style scoped>
/* Main Table Styles */
.table {
  border-radius: 10px;
  width: 100%;
  overflow: hidden;
}

.table_header {
  padding: 14px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
}



.main_table {
  width: 100%;
  background-color: #FFFFFF;
}

.main_table_head th {
  padding: 20px;
  text-align: left;
  text-transform: uppercase;
  background-color: #F4F2FF;
  border-bottom: 1px solid #D9D5EC;
  color: #6E6893;
}

.main_table_body tr {
  border: 1px solid #D9D5EC;
}

.main_table_body td {
  padding: 14px 20px;
  text-align: left;
  border-bottom: 1px solid #D9D5EC;
  color: #6E6893;
}


.nested_table {
  width: 100%;
  background-color: #FFFFFF;
}

.nested_table_head th {
  padding: 18px;
  text-align: left;
  text-transform: uppercase;
  background-color: #F2F0F9;
  border-bottom: 1px solid #D9D5EC;
  color: #6E6893;
}

.nested_table_body tr {
  background-color: #F4F2FF;
}


.nested_table_body td {
  padding: 20px;
  text-align: left;
  border-bottom: 1px solid #D9D5EC;
  color: #000;
}

.nested_table_body td:first-child {
  padding: 20px;
  text-align: left;
  border-bottom: 1px solid #D9D5EC;
  color: #6E6893 !important;
}

.no-data {
  background-color: #F4F2FF;
  padding: 24px;
  text-align: center;
}
</style>
