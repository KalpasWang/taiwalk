<script lang="ts" setup></script>

<template>
  <div>
    <ElContainer>
      <ElHeader class="layout__headerContainer">
        <SiteHeader />
      </ElHeader>
      <ElMain class="layout__mainContainer">
        <slot />
      </ElMain>
      <ElFooter class="layout__footerContainer">
        <SiteFooter />
      </ElFooter>
    </ElContainer>
  </div>
</template>

<style scoped>
.layout__headerContainer {
  height: auto;
  padding-top: 8px;
  padding-bottom: 8px;
  @media (min-width: 768px) {
    padding-top: 24px;
    padding-bottom: 24px;
  }
}
.layout__mainContainer {
  padding-left: 16px;
  padding-right: 16px;
}
.layout__footerContainer {
  background-color: var(--el-color-primary);
}
</style>
