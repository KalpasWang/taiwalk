<script lang="ts" setup></script>

<template>
  <div>
    <ElContainer>
      <ElHeader>
        <SiteHeader />
      </ElHeader>
      <ElMain>
        <slot />
      </ElMain>
      <ElFooter class="footer">
        <SiteFooter />
      </ElFooter>
    </ElContainer>
  </div>
</template>

<style scoped>
.footer {
  background-color: var(--el-color-primary);
}
</style>
