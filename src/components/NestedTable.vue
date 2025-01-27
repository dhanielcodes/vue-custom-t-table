<template>
  <div class="table">
    <!-- Main Table -->
    <div class="table_header">
      <div class="table_header_filter">

        <PopOver position="bl">
          <template #action-btn>
            <AppButton :style="{
              paddingInline: '15px',
              paddingBlock: '19px',
              display: 'flex',
              gap: '4px',
              background: 'transparent',
              border: '1px solid #C6C2DE',
              borderRadius: '8px',
              fontSize: '18px'
            }"><icon-filter /> Filter</AppButton>
          </template>
          <template #content>
            <div :style="{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start'
            }">
              <AppButtonText color="red" :style="{
                color: '#6E6893',
                fontSize: '12px'
              }">SORT BY:</AppButtonText>
              <a-radio-group v-model="sortValue" :options="RadioList" />
              <AppButtonText color="red" :style="{
                borderTop: '1px solid #F2F0F9',
                color: '#6E6893',
                fontSize: '12px'
              }">USERS:</AppButtonText>
              <a-radio-group v-model="sortValue2" :options="RadioList2" />
            </div>
          </template>
        </popover>
        <SearchInput />
      </div>
      <AppButton :style="{
        padding: '14px 12px',
        display: 'flex',
        gap: '4px',
        background: '#6D5BD0',
        color: 'white',
        borderRadius: '8px',
        fontSize: '16px'
      }"> PAY DUES</AppButton>
    </div>
    <table cellspacing="0" cellpadding="0" class="main_table">
      <thead class="main_table_head">
        <tr>
          <th v-for="(it, idx) in columns" :key="idx" :style="{ width: it.width + 'px' }">
            {{ it.title }}
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
                    <th v-for="(it, idx) in nestedColumns" :key="idx" :style="{ width: it.width + 'px' }">
                      {{ it.title }}
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
import { data } from "@/libs/data";
import AmountSlot from "@/tables/UserTable/slots/amount-slot.vue";
import NameSlot from "@/tables/UserTable/slots/name-slot.vue";
import PaymentStatusSlot from "@/tables/UserTable/slots/payment-status-slot.vue";
import StatusSlot from "@/tables/UserTable/slots/status-slot.vue";
import { Checkbox } from "@arco-design/web-vue";
import AppButtonText from "./AppButtonText.vue";
import MenuItem from "./MenuItem.vue";
import PopOver from "./PopOver.vue";
import AppButton from "./AppButton.vue";
import moment from "moment";
import { ref } from "vue";
import SearchInput from "./SearchInput.vue";

const columns = [
  {
    title: '',
    slotName: 'name',
    width: 80,
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

const nestedColumns = [
  {
    title: '',
    slotName: 'view',
    width: 60,
  },
  {
    title: 'Date',
    slotName: 'name',
    width: 80,
  },
  {
    title: 'User activity',
    slotName: 'status',
    width: 300,
  },
  {
    title: 'Detail',
    slotName: 'status',
    width: 500,
  },

]
// Function to toggle the visibility of the nested table
const toggleNestedTable = (index: number) => {
  data[index].showNested = !data[index].showNested;
};

const RadioList = [
  {
    label: 'Default',
    value: 'default'
  },
  {
    label: 'First Name',
    value: 'firstName'
  },
  {
    label: 'Last Name',
    value: 'lastName'
  },
  {
    label: 'Due Date',
    value: 'dueDate'
  },
  {
    label: 'Last Login',
    value: 'lastLogin'
  },
]

const RadioList2 = [
  {
    label: 'All',
    value: 'all'
  },
  {
    label: 'Active',
    value: 'active'
  },
  {
    label: 'Inactive',
    value: 'inactive'
  },
]
const sortValue = ref()
const sortValue2 = ref()
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

.table_header_filter {
  display: flex;
  gap: 10px
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
  padding: 20px;
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
