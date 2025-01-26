<template>
  <a-button :style="{
    padding: '4px',
    color: color,
    width: '100%',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    ...styles,
  }" type="text">
    <slot></slot>
  </a-button>
</template>

<script setup lang="ts">

defineProps({
  color: {
    type: String,
    default: '#000000',
    required: false
  },
  styles: {
    type: Object,
    required: false
  }
})

</script>
