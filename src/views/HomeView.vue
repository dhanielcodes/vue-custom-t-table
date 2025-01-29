<script setup lang="ts">
import TabBar from '@/components/TabBar.vue'
import { reactive, ref, watch } from 'vue'
import type { ColumnType } from '@/types/TableTypes'
import UserTable from '@/tables/UserTable/UserTable.vue'
import AppButton from '@/components/AppButton.vue'
import AppButtonText from '@/components/AppButtonText.vue'
import PopOver from '@/components/PopOver.vue'
import SearchInput from '@/components/SearchInput.vue'
import { useUserStore } from '@/stores/user.store'
import type { TableData } from '@/types/TableTypes'


const userStore = useUserStore()

const active: object = reactive({
  name: 'All',
})
const searchQuery = defineModel<string>('')
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
    icon: 'icon-info-circle'
  },

]
const setActive: (state: { name: string }) => void = (state: { name: string }) => {
  userStore.paymentStatus = state.name.toLocaleLowerCase()
  console.log(userStore.paymentStatus, 'payme')
  updateFilteredAndSortedUsers()
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
    label: 'Email',
    value: 'email'
  },
]

const RadioList2 = [
  {
    label: 'All Users',
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
const filter = () => {
  if (userStore.sortBy) {
    console.log(userStore.sortBy, userStore.status, 'sortby')
    sortTable(userStore.sortBy as keyof TableData)
  }
}

const reset = () => {
}


// Sort State
const sortKey = ref<keyof typeof userStore.userList[0] | null>(null);
const sortOrder = ref<"asc" | "desc">("asc");

// Filter State


// Filter and Sort Logic
const updateFilteredAndSortedUsers = () => {
  let filtered: TableData[] = [...userStore.userList];

  // Apply Filters
  if (userStore.status) {
    userStore.updateFilteredUsers(filtered.filter((user) => user.status === userStore.status));
    //filtered = filtered.filter((user) => user.status === userStore.status);
  }
  if (userStore.paymentStatus) {
    userStore.updateFilteredUsers(filtered.filter((user) => user.paymentStatus === userStore.paymentStatus));
    //filtered = filtered.filter((user) => user.paymentStatus === userStore.paymentStatus);
  }
  if (searchQuery.value) {
    const term = searchQuery.value.toLowerCase();
    filtered = filtered.filter((user) => {
      return (
        user.firstName.toLowerCase().includes(term) ||
        user.lastName.toLowerCase().includes(term) ||
        user.email.toLowerCase().includes(term)
      );
    });
  }
  // Apply Sorting
  if (sortKey.value) {
    filtered.sort((a, b) => {
      const valA = sortKey.value ? a[sortKey.value]?.toLowerCase() : '';
      const valB = sortKey.value ? b[sortKey.value]?.toLowerCase() : '';

      if (valA < valB) return sortOrder.value === "asc" ? -1 : 1;
      if (valA > valB) return sortOrder.value === "asc" ? 1 : -1;
      return 0;
    });
  }

  // Update Store
  userStore.updateFilteredUsers(filtered);
};

// Watch Filters and Sorting
watch([userStore.status, userStore.paymentStatus, sortKey, searchQuery, sortOrder], () => {
  updateFilteredAndSortedUsers();
});

// Sorting Function
const sortTable = (key: keyof typeof userStore.userList[0]) => {
  if (sortKey.value === key) {
    sortOrder.value = sortOrder.value === "asc" ? "desc" : "asc";
  } else {
    sortKey.value = key;
    sortOrder.value = "asc";
  }
};

</script>

<template>
  <div class="body">
    {{ searchQuery }}
    <TabBar :set-active="setActive" :active="active" :tabs="tabs">
      <div class="total">
        Total payable amount: <span>$900.00</span> <span class="currency">USD</span>
      </div>
    </TabBar>
    <UserTable :columns="columns" :nested-columns="nestedColumns" :table-data="userStore.filteredList">
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
                <a-radio-group v-model="userStore.sortBy" :options="RadioList" />
                <AppButtonText color="red" :style="{
                  borderTop: '1px solid #F2F0F9',
                  color: '#6E6893',
                  fontSize: '12px'
                }">USERS:</AppButtonText>
                <a-radio-group v-model="userStore.status" :options="RadioList2" />
                <br />
                <div class="sort-btns">
                  <div @click="filter">
                    <AppButton color="black">Filter</AppButton>
                  </div>
                  <div @click="reset">
                    <AppButton color="blue">Reset</AppButton>
                  </div>
                </div>
              </div>
            </template>
          </PopOver>
          <SearchInput v-model="searchQuery" />
        </div>
        <AppButton :style="{
          padding: '14px 12px', display: 'flex', gap: '4px', background: '#6D5BD0', color: 'white',
          borderRadius: '8px', fontSize: '16px'
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

.sort-btns {
  display: flex;
  justify-content: space-between;
  gap: 10px
}
</style>
