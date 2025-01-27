<script setup lang="ts">
import TabBar from '@/components/TabBar.vue'
import { reactive } from 'vue'
import NestedTable from '@/components/NestedTable.vue'

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
    <TabBar :set-active="setActive" :active="active" :tabs="tabs">
      <div class="total">
        Total payable amount: <span>$900.00</span> <span class="currency">USD</span>
      </div>
    </TabBar>
    <NestedTable />
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
