<script setup lang="ts">
import UserTable from '@/tables/UserTable/UserTable.vue'
import TabBar from '@/components/TabBar.vue'
import { reactive } from 'vue'

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

const setActive: (state: object) => void = (state: object) => {
  Object.assign(active, state)
}
</script>

<template>
  <div class="body">
    <TabBar :set-active="setActive" :active="active" :tabs="tabs" />
    <UserTable />
  </div>
</template>

<style scoped>
.body {
  max-width: 1400px;
  width: 90%;
  margin: 0 auto;
  padding-block: 40px;
}
</style>
