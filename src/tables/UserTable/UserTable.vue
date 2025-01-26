<script setup lang="ts">
import { ref, reactive } from 'vue'
import '@/assets/tableStyles.css'
import { data } from '@/libs/data.ts'
import enUS from '@arco-design/web-vue/es/locale/lang/en-us'
import NameSlot from '@/tables/UserTable/slots/name-slot.vue'
import StatusSlot from '@/tables/UserTable/slots/status-slot.vue'
import PaymentStatusSlot from '@/tables/UserTable/slots/payment-status-slot.vue'
import { CFormatter } from '@/libs/utils'
import type { TableRowSelection } from '@arco-design/web-vue'
import MenuItem from '@/components/MenuItem.vue'
import AppButtonText from '@/components/AppButtonText.vue'
import AppButton from '@/components/AppButton.vue'
import SearchInput from '@/components/SearchInput.vue'
import PopOver from '@/components/PopOver.vue'

const expandedKeys = ref([])

const columns = [
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

const rowSelection: TableRowSelection = reactive({
  type: 'checkbox',
  showCheckedAll: true,
  onlyCurrent: false,
})

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
  <div class="table">
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
        padding: '8px',
        display: 'flex',
        gap: '4px',
        background: '#6D5BD0',
        color: 'white',
        borderRadius: '8px',
        fontSize: '16px'
      }"> PAY DUES</AppButton>
    </div>
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
          <div class="slot_amount">
            <div class="slot_amount_value">{{ CFormatter(record.amount) }}</div>
            <div class="slot_amount_currency">{{ record.currency }}</div>
          </div>
        </template>
        <template #view="{}">
          <AppButtonText :style="{
            color: '#6E6893',
            fontSize: '14px'
          }">View More</AppButtonText>
        </template>
        <template #action="{}">
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
        </template>
      </a-table>
    </a-config-provider>
  </div>
</template>

<style scoped>
.table {
  border-radius: 10px;
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

.slot_name {
  color: #25213b;
}

.slot_email {
  color: #6e6893;
}

.slot_amount {
  text-align: right;
}

.slot_amount_value {
  color: #25213b;
  font-weight: 500;
  font-size: 14px;
}

.slot_amount_currency {
  color: #6e6893;
  font-weight: 300;
  font-size: 14px;
}

.slot_action {
  cursor: pointer;
}
</style>
