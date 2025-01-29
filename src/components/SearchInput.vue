<template>
  <a-input
    :value="props.modelValue"
    @input="updateValue"
    :style="{
      width: '320px',
      background: '#F4F2FF',
      borderRadius: '8px',
      fontSize: '16px',
      paddingInline: '15px',
      paddingBlock: '4px',
    }"
    placeholder="Search Users by Name, Email or Date"
    allow-clear
  >
    <template #prefix>
      <icon-search
        size="large"
        :style="{
          color: '#8B83BA',
        }"
      />
    </template>
  </a-input>
</template>
<script setup lang="ts">
const props = defineProps({
  modelValue: String,
})
const emit = defineEmits(['update:modelValue'])

const updateValue = (value: string, event: Event) => {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target.value)
}
</script>
