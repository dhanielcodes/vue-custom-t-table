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

.arco-radio-button {
  background-color: transparent !important;
  width: fit-content;
  border-bottom: 2px solid transparent;
  font-size: 14px;
  cursor: pointer;
  text-align: center;
  transform: translateY(4px);
}

.arco-radio-button.arco-radio-checked {
  background-color: #f2f0f9 !important;
  width: fit-content;
  border-bottom: 2px solid #25213b;
  font-size: 14px;
  cursor: pointer;
  text-align: center;
}

.arco-radio-button-content {
  color: #6e6893;
  padding-block: 5px !important;
}

.arco-radio-button.arco-radio-checked>.arco-radio-button-content {
  color: #25213b;
}

.arco-radio-button::before {
  display: none !important;
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
