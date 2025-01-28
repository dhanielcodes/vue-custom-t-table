<script setup lang="ts">
import TabBar from '@/components/TabBar.vue'
import { reactive, ref } from 'vue'
import type { ColumnType } from '@/types/TableTypes'
import { data } from '@/libs/data'
import UserTable from '@/tables/UserTable/UserTable.vue'
import AppButton from '@/components/AppButton.vue'
import AppButtonText from '@/components/AppButtonText.vue'
import PopOver from '@/components/PopOver.vue'
import SearchInput from '@/components/SearchInput.vue'

const active: object = reactive({
  name: 'All',
})

const tabs = reactive([
  {
    name: 'All',
  },
  {
    name: 'Paid',
  },
  {
    name: 'Unpaid',
  },
  {
    name: 'Overdue',
  },
])
const columns: ColumnType[] = [
  {
    title: '',
    width: 80,
  },
  {
    title: 'Name',
  },
  {
    title: 'User status',
    width: 500,
  },
  {
    title: 'Payment status',
    slotName: 'pStatus',
  },
  {
    title: 'Amount',
    width: 80,
  },
  {
    title: '',
    width: 110,
  },
  {
    title: '',
  },
]

const nestedColumns: ColumnType[] = [
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
    icon: 'icon-info-circle'
  },

]
const setActive: (state: object) => void = (state: object) => {
  Object.assign(active, state)
}

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

<template>
  <div class="body">
    <TabBar :set-active="setActive" :active="active" :tabs="tabs">
      <div class="total">
        Total payable amount: <span>$900.00</span> <span class="currency">USD</span>
      </div>
    </TabBar>
    <UserTable :columns="columns" :nested-columns="nestedColumns" :table-data="data">
      <template #header>
        <div style="display: flex;gap: 10px;">
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
          </PopOver>
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

      </template>
    </UserTable>
  </div>
</template>

<style scoped>
.body {
  max-width: 1400px;
  width: 90%;
  margin: 0 auto;
  padding-block: 40px;
}

.total {
  color: #25213B;
  width: 100%;
  text-align: right;
}

.total span {
  color: #6D5BD0;
  font-weight: 800;
  font-size: 18px;
}

.total .currency {
  color: #25213B;
  font-weight: 400;
  font-size: 18px;
}
</style>
