<template>
  <div class="tab-container">
    <div class="tab-bar">
      <slot name="tab"></slot>
    </div>
    <div class="slot">
      <slot name="child"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
// Props
defineProps({
  tabs: {
    type: Array as () => { label: string }[],
    required: true,
  },
})
</script>

<style>
.tab-container {
  margin-bottom: 20px;
  border-bottom: 1px solid #c6c2de;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

}

.tab-bar {
  display: flex;
  width: 100%;
}

.tab-bar-item {
  width: fit-content;
  border-bottom: 2px solid transparent;
  font-size: 14px;
  cursor: pointer;
  padding: 10px;
  text-align: center;
  color: #6e6893;
}

.slot {
  padding-bottom: 10px;
  width: 100%;

}

.tab-bar-item.active {
  border-bottom: 2px solid #25213b;
}

.tab-bar-item span {
  width: 100%;
  text-transform: capitalize;
}
</style>
