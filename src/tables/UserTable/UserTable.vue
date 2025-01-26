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
import EllipsesIcon from '@/assets/icons/ellipses-icon.vue'
import MenuItem from '@/components/MenuItem.vue'

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
</script>

<template>
  <div class="table">
    <div class="table_header"></div>
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
          <a-button> View More </a-button>
        </template>
        <template #action="{}">
          <div class="slot_action">
            <MenuItem>
            <template #action-btn>
              <EllipsesIcon />
            </template>
            <template #content>
              <div :style="{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start'
              }">
                <a-button type="text" status="normal" :style="{
                  color: '#000',
                }">
                  Edit
                </a-button>
                <a-button type="text" status="normal" :style="{
                  color: '#000'
                }">
                  View Profile
                </a-button>
                <a-button status="success" type="text">
                  Activate User
                </a-button>
                <a-button status="danger" type="text">
                  Delete
                </a-button>
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
