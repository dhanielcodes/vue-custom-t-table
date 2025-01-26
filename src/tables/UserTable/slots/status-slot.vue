<!-- eslint-disable vue/valid-attribute-name -->
<template>
  <div class="status">
    <BadgeStatus :status="record.status" />
    <div class="date">
      Last login: {{ moment(record.lastLogin).format('DD/MMM/Y').toUpperCase() }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import BadgeStatus from '@/components/BadgeStatus.vue'
import moment from 'moment'

defineProps<{
  record: {
    status: 'active' | 'paid' | 'unpaid' | 'inactive' | 'overdue'
    lastLogin: string
  }
}>()
</script>

<style scoped>
.status {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.date {
  color: #6e6893;
  font-size: 12px;
}
</style>
