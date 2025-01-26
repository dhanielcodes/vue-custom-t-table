<template>
  <a-tag size="small" class="badge" checkable :color="tagColors[status]" :default-checked="true">
    <a-badge class="badge_dot" :status="tagDot[status]" />
    <div class="badge_text">
      {{ text[status] }}
    </div>
  </a-tag>
</template>

<script setup lang="ts">
import { statusStates } from '@/libs/data'

// Props for the BadgeStatus component
defineProps({
  status: {
    type: String as () => 'inactive' | 'active' | 'paid' | 'unpaid' | 'overdue',
    default: 'inactive',
    validator: (value: string) => statusStates.includes(value),
  },
})

const tagColors: Record<string, string> = {
  inactive: 'grey',
  active: 'blue',
  paid: 'green',
  unpaid: 'orange',
  overdue: 'red',
}

const tagDot: Record<
  'inactive' | 'active' | 'paid' | 'unpaid' | 'overdue',
  'normal' | 'processing' | 'success' | 'warning' | 'danger'
> = {
  inactive: 'normal',
  active: 'processing',
  paid: 'success',
  unpaid: 'warning',
  overdue: 'danger',
}

const text: Record<string, string> = {
  inactive: 'Inactive',
  active: 'Active',
  paid: 'Paid',
  unpaid: 'Unpaid',
  overdue: 'Overdue',
}
</script>

<style scoped>
.badge {
  font-size: 12px;
  display: flex;
  align-items: center;
  border-radius: 999px;
  width: fit-content;
  gap: 4px;
  cursor: pointer;
}

.badge_dot {
  transform: translateY(-10%);
}
</style>
