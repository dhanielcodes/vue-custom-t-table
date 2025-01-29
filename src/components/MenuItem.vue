<script setup lang="ts">
defineProps({
  position: {
    type: String as () => 'bl' | 'br' | 'tl' | 'tr' | 'top' | 'bottom',
  },
})
</script>

<template>
  <a-space>
    <a-dropdown :position="position" trigger="click">
      <slot name="action-btn"></slot>

      <template #content>
        <div>
          <slot name="content"></slot>
        </div>
      </template>
    </a-dropdown>
  </a-space>
</template>

<style>
.arco-dropdown {
  width: 150px;
  padding: 10px !important;
  border-radius: 10px !important;
}
</style>
