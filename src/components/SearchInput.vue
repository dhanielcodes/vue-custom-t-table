<template>
  <a-input :style="{
    width: '320px',
    background: '#F4F2FF',
    borderRadius: '8px',
    fontSize: '16px',
    paddingInline: '15px',
    paddingBlock: '4px'
  }" placeholder="Search Users by Name, Email or Date" allow-clear>
    <template #prefix>
      <icon-search size="large" :style="{
        color: '#8B83BA'
      }" />
    </template>
  </a-input>
</template>
