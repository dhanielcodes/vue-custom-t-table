<template>
  <a-space>
    <a-popover position="lt" trigger="click">
      <a-button type="text">
        <slot name="action-btn"></slot>
      </a-button>

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
  padding: 0px;
  width: 150px;
}
</style>
