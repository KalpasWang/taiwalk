<script lang="ts" setup></script>

<template>
  <div>
    <nav class="mobileMenu__container">
      <IconsLogoMobile />
      <IconsMenu class="mobileMenu__menuIcon" />
    </nav>
    <Teleport to="body">
      <aside class="mobileMenu__fixedMenu">
        <div class="mobileMenu__overlay"></div>
        <ul role="menubar" class="mobileMenu__list">
          <li role="menuitem" class="mobileMenu__item">探索景點</li>
          <li role="menuitem" class="mobileMenu__item">節慶活動</li>
          <li role="menuitem" class="mobileMenu__item">品嚐美食</li>
        </ul>
      </aside>
    </Teleport>
  </div>
</template>

<style scoped>
.mobileMenu__container {
  position: relative;
  display: flex;
  width: 100%;
  height: 50px;
  justify-content: center;
  align-items: center;
}
.mobileMenu__menuIcon {
  position: fixed;
  top: 8px;
  right: 8px;
}
</style>
