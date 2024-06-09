<script lang="ts" setup></script>

<template>
  <ClientOnly fallback-tag="span" fallback="...">
    <nav class="menu__desktop">
      <ElMenu mode="horizontal" :ellipsis="false">
        <ElMenuItem index="0">
          <IconsLogo />
        </ElMenuItem>
        <div class="menu__space" />
        <ElMenuItem index="1" class="menu__item">探索景點</ElMenuItem>
        <ElMenuItem index="2" class="menu__item">節慶活動</ElMenuItem>
        <ElMenuItem index="3" class="menu__lastItem">品嚐美食</ElMenuItem>
      </ElMenu>
    </nav>
    <MobileMenu class="menu__mobile" />
  </ClientOnly>
</template>

<style scoped>
.menu__desktop {
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
}
.menu__mobile {
  @media (min-width: 768px) {
    display: none;
  }
}
.menu__space {
  flex-grow: 1;
}
.menu__item {
  padding-left: 10px;
  padding-right: 10px;
}
.menu__lastItem {
  padding-left: 10px;
  padding-right: 20px;
}
</style>
