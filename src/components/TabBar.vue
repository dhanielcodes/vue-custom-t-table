<template>
  <div class="tab-bar">
    <div
      v-for="item in tabs"
      :key="item.name"
      :class="['tab-bar-item', { active: active.name === item.name }]"
      @click="proceed(item)"
    >
      <span
        :style="{
          color: active.name === item.name ? '#25213B' : '#667085',
        }"
      >
        {{ item.name }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
// Props
const props = defineProps({
  active: {
    type: Object,
    required: true,
  },
  setActive: {
    type: Function,
    required: true,
  },
  tabs: {
    type: Array as () => { name: string }[],
    required: true,
  },
})

const proceed: (toObject: object) => void = (toObject: object) => {
  props.setActive(toObject)
}
</script>

<style>
.tab-bar {
  display: flex;
  width: 100%;
  margin-bottom: 20px;
  border-bottom: 1px solid #c6c2de;
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

.tab-bar-item.active {
  border-bottom: 2px solid #25213b;
}

.tab-bar-item span {
  width: 100%;
  text-transform: capitalize;
}
</style>
