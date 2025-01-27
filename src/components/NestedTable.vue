<template>
  <div>
    <!-- Main Table -->
    <table class="main-table">
      <thead class="table-header">
        <tr>
          <th v-for="(it, idx) in columns" :key="idx" class="table-cell arco-table-th"
            :style="{ width: it.width + 'px' }">{{ it.title }}
          </th>
        </tr>
      </thead>
      <tbody>
        <template v-for="(item, index) in data" :key="index">
          <tr class="main-row">
            <td class="table-cell arco-table-td">
              <div :style="{ display: 'flex', alignItems: 'center', gap: '10px' }">
                <Checkbox />
                <div @click="toggleNestedTable(index)">
                  <div v-if="item.showNested">
                    <NestReverseIcon />
                  </div>
                  <div v-else>
                    <NestIcon />
                  </div>
                </div>
              </div>
            </td>
            <td class="table-cell arco-table-td">
              <NameSlot :record="item" />
            </td>
            <td class="table-cell arco-table-td">
              <StatusSlot :record="{ status: item.status, lastLogin: item.lastLogin }" />
            </td>
            <td class="table-cell arco-table-td">
              <PaymentStatusSlot :record="{ paymentStatus: item.paymentStatus, paymentDate: item.paymentDate }" />
            </td>
            <td class="table-cell arco-table-td">
              <AmountSlot :record="item" />
            </td>
            <td class="table-cell arco-table-td">
              <AppButtonText :style="{
                color: '#6E6893',
                fontSize: '14px'
              }">View More</AppButtonText>
            </td>
            <td class="table-cell arco-table-td">
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
            <td :colspan="columns.length" class="nested-table-container">
              <table class="nested-table">
                <thead>
                  <tr>
                    <th class="nested-cell arco-table-th">Nested Column 1</th>
                    <th class="nested-cell arco-table-th">Nested Column 2</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(nestedItem, nestedIndex) in item.children" :key="nestedIndex">
                    <td class="nested-cell arco-table-td">{{ nestedItem.name }}</td>
                    <td class="nested-cell arco-table-td">{{ nestedItem.email }}</td>
                  </tr>
                </tbody>
              </table>
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
import { data } from "@/libs/data";
import AmountSlot from "@/tables/UserTable/slots/amount-slot.vue";
import NameSlot from "@/tables/UserTable/slots/name-slot.vue";
import PaymentStatusSlot from "@/tables/UserTable/slots/payment-status-slot.vue";
import StatusSlot from "@/tables/UserTable/slots/status-slot.vue";
import { Checkbox } from "@arco-design/web-vue";
import AppButtonText from "./AppButtonText.vue";
import MenuItem from "./MenuItem.vue";

const columns = [
  {
    title: '',
    slotName: 'view',
    width: 110,
  },
  {
    title: 'Name',
    slotName: 'name',
  },
  {
    title: 'User status',
    slotName: 'status',
    width: 500,
  },
  {
    title: 'Payment status',
    slotName: 'pStatus',
  },
  {
    title: 'Amount',
    slotName: 'amount',
    width: 80,
  },
  {
    title: '',
    slotName: 'view',
    width: 110,
  },
  {
    title: '',
    slotName: 'action',
  },
]
// Function to toggle the visibility of the nested table
const toggleNestedTable = (index: number) => {
  data[index].showNested = !data[index].showNested;
};
</script>

<style scoped>
/* Main Table Styles */
.main-table {
  width: 90%;
  max-width: 1400px;
  margin: 20px auto;
  border-collapse: collapse;
}

.table-header {
  background-color: #f9fafb;
}

.table-cell {
  padding: 12px;
  text-align: left;
}

/* Action Button Styles */
.action-button {
  background-color: #3b82f6;
  color: white;
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.action-button:hover {
  background-color: #2563eb;
}

/* Nested Table Styles */
.nested-table-container {
  padding: 12px;
  background-color: #f3f4f6;
  border-radius: 8px;
}

.nested-table {
  width: 100%;
  border-collapse: collapse;
  border: 1px solid #d1d5db;
  margin-top: 8px;
}

.nested-cell {
  border: 1px solid #e5e7eb;
  padding: 10px;
  text-align: left;
  background-color: #ffffff;
}

.nested-header th {
  background-color: #f9fafb;
  font-weight: 600;
  padding: 10px;
}

/* Ensure Rows Spread Properly */
.main-row {
  height: 48px;
}
</style>
