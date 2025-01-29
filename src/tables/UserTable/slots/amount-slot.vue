<!-- eslint-disable vue/valid-attribute-name -->
<template>
  <div class="slot_amount">
    <div class="slot_amount_value">{{ CFormatter(record.amount) }}</div>
    <div class="slot_amount_currency">{{ record.currency }}</div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import { CFormatter } from '@/libs/utils'

defineProps<{
  record: {
    amount: number
    currency: string
  }
}>()
</script>

<style scoped>
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
</style>
