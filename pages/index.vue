<script lang="ts" setup>
import { ElMessage } from "#imports";
</script>

<template>
  <main>
    <ElButton @click="ElMessage('hello')">Home</ElButton>
  </main>
</template>

<style scoped></style>
