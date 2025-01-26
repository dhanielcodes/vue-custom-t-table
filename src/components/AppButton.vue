<template>
  <a-button :style="{
    color: color,
    ...styles
  }">
    <slot></slot>
  </a-button>
</template>

<script setup lang="ts">

defineProps({
  color: {
    type: String,
    def: '#000',
    req: true
  },
  styles: {
    type: Object,
    required: false
  }
})

</script>
