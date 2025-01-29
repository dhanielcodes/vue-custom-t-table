<script setup lang="ts">
import TabBar from '@/components/TabBar.vue'
import { ref, watch } from 'vue'
import type { ColumnType } from '@/types/TableTypes'
import UserTable from '@/tables/UserTable/UserTable.vue'
import AppButton from '@/components/AppButton.vue'
import AppButtonText from '@/components/AppButtonText.vue'
import PopOver from '@/components/PopOver.vue'
import SearchInput from '@/components/SearchInput.vue'
import { useUserStore } from '@/stores/user.store'
import type { TableData } from '@/types/TableTypes'

const userStore = useUserStore()
const sortBy = ref<string>('')
const byStatus = ref<string>('')
const byPaymentStatus = ref<string>('')
const searchQuery = defineModel<string>('')
const tabs = [
  {
    label: 'All',
    value: '',
  },
  {
    label: 'Paid',
    value: 'paid',
  },
  {
    label: 'Unpaid',
    value: 'unpaid',
  },
  {
    label: 'Overdue',
    value: 'overdue',
  },
]
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
    width: 220,
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
    icon: 'icon-info-circle',
  },
]

const RadioList = [
  {
    label: 'Default',
    value: '',
  },
  {
    label: 'First Name',
    value: 'firstName',
  },
  {
    label: 'Last Name',
    value: 'lastName',
  },
  {
    label: 'Email',
    value: 'email',
  },
]

const RadioList2 = [
  {
    label: 'All Users',
    value: '',
  },
  {
    label: 'Active',
    value: 'active',
  },
  {
    label: 'Inactive',
    value: 'inactive',
  },
]

const reset = () => {
  byPaymentStatus.value = ''
  byStatus.value = ''
  sortBy.value = ''
}

// Sort State
const sortKey = ref<keyof (typeof userStore.userList)[0] | null>(null)
const sortOrder = ref<'asc' | 'desc'>('asc')

// Filter State

// Filter and Sort Logic
const updateFilteredAndSortedUsers = () => {
  let filtered: TableData[] = [...userStore.userList]

  // Apply Filters

  if (byStatus.value) {
    if (byStatus.value === '') {
      filtered = userStore.userList
    } else {
      filtered = filtered.filter((user) => user.status === byStatus.value)
    }
  }
  if (byPaymentStatus.value) {
    if (byPaymentStatus.value === '') {
      filtered = userStore.userList
    } else {
      filtered = filtered.filter((user) => user.paymentStatus === byPaymentStatus.value)
    }
  }
  if (searchQuery.value) {
    const term = searchQuery.value.toLowerCase()
    filtered = filtered.filter((user) => {
      return user.name.toLowerCase().includes(term) || user.email.toLowerCase().includes(term)
    })
  }
  // Apply Sorting
  sortTable(sortBy.value as keyof TableData)
  if (sortKey.value) {
    filtered.sort((a, b) => {
      const valA = sortKey.value ? a[sortKey.value]?.toLowerCase() : ''
      const valB = sortKey.value ? b[sortKey.value]?.toLowerCase() : ''

      if (valA < valB) return sortOrder.value === 'asc' ? -1 : 1
      if (valA > valB) return sortOrder.value === 'asc' ? 1 : -1
      return 0
    })
  }

  // Update Store
  userStore.updateFilteredUsers(filtered)
}

// Watch Filters and Sorting
watch([byStatus, byPaymentStatus, searchQuery, sortBy], () => {
  updateFilteredAndSortedUsers()
})

// Sorting Function
const sortTable = (key: keyof (typeof userStore.userList)[0]) => {
  if (sortKey.value === key) {
    sortOrder.value = sortOrder.value === 'asc' ? 'desc' : 'asc'
  } else {
    sortKey.value = key
    sortOrder.value = 'asc'
  }
}
</script>

<template>
  <div class="body">
    <TabBar :tabs="tabs">
      <template #tab>
        <a-radio-group v-model="byPaymentStatus" :options="tabs" type="button" />
      </template>
      <template #child>
        <div class="total">
          Total payable amount: <span>$900.00</span> <span class="currency">USD</span>
        </div>
      </template>
    </TabBar>
    <UserTable
      :columns="columns"
      :nested-columns="nestedColumns"
      :table-data="userStore.filteredList"
    >
      <template #header>
        <div style="display: flex; gap: 10px">
          <PopOver position="bl">
            <template #action-btn>
              <AppButton
                :style="{
                  paddingInline: '15px',
                  paddingBlock: '19px',
                  display: 'flex',
                  gap: '4px',
                  background: 'transparent',
                  border: '1px solid #C6C2DE',
                  borderRadius: '8px',
                  fontSize: '18px',
                }"
                ><icon-filter /> Filter</AppButton
              >
            </template>
            <template #content>
              <div
                :style="{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                }"
              >
                <AppButtonText
                  color="red"
                  :style="{
                    color: '#6E6893',
                    fontSize: '12px',
                  }"
                  >SORT BY:</AppButtonText
                >
                <a-radio-group v-model="sortBy" :options="RadioList" />
                <AppButtonText
                  color="red"
                  :style="{
                    borderTop: '1px solid #F2F0F9',
                    color: '#6E6893',
                    fontSize: '12px',
                  }"
                  >USERS:</AppButtonText
                >
                <a-radio-group v-model="byStatus" :options="RadioList2" />
                <br />
                <div class="sort-btns">
                  <div @click="reset">
                    <AppButton color="blue">Reset</AppButton>
                  </div>
                </div>
              </div>
            </template>
          </PopOver>
          <SearchInput v-model="searchQuery" />
        </div>
        <AppButton
          @click="userStore.payDues"
          :style="{
            padding: '14px 12px',
            display: 'flex',
            gap: '4px',
            background: '#6D5BD0',
            color: 'white',
            borderRadius: '8px',
            fontSize: '16px',
          }"
        >
          PAY DUES</AppButton
        >
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
  color: #25213b;
  width: 100%;
  text-align: right;
}

.total span {
  color: #6d5bd0;
  font-weight: 800;
  font-size: 18px;
}

.total .currency {
  color: #25213b;
  font-weight: 400;
  font-size: 18px;
}

.sort-btns {
  display: flex;
  justify-content: space-between;
  gap: 10px;
}
</style>
