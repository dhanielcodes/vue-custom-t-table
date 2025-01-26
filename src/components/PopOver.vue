<script setup lang="ts">
defineProps({
  position: {
    type: String as () => 'lt' | 'lb' | 'bl' | 'tl' | 'tr' | 'top' | 'bottom' | 'left',
  }
})


</script>
<template>
  <a-space>
    <a-popover :position="position" trigger="click">
      <slot name="action-btn"></slot>

      <template #content>
        <div>
          <slot name="content"></slot>
        </div>
      </template>
    </a-popover>
  </a-space>
</template>


<style>
.arco-popover-popup-content {
  padding: 4px 12px;
  width: 190px;
  border-radius: 8px;
}
</style>
