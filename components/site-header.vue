<script lang="ts" setup></script>

<template>
  <ElMenu mode="horizontal">
    <ElMenuItem index="0">
      <logo />
    </ElMenuItem>
    <div class="menu-grow" />
    <ElMenuItem index="1">探索景點</ElMenuItem>
    <ElMenuItem index="2">節慶活動</ElMenuItem>
    <ElMenuItem index="3">品嚐美食</ElMenuItem>
  </ElMenu>
</template>

<style scoped>
.menu-grow {
  flex-grow: 1;
}
</style>
