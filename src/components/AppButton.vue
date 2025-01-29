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
    default: '#000',
    required: true
  },
  styles: {
    type: Object,
    required: false
  }
})

</script>
