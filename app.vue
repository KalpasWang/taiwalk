<template>
  <div>
    <ElButton @click="ElMessage('Hello')">button</ElButton>
    <ElButton :icon="ElIconEditPen" type="success">button</ElButton>
    <LazyElButton type="warning">lazy button</LazyElButton>
  </div>
</template>

<script setup lang="ts">
import { ElMessage } from "element-plus";
</script>
