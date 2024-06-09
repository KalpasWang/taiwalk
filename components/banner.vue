<script lang="ts" setup>
import { useResizeObserver } from "@vueuse/core";

const el = ref(null);
const style = ref("");

const { stop } = useResizeObserver(el, (entries) => {
  const entry = entries[0];
  const { width } = entry.contentRect;

  if (width >= 1024) {
    style.value = "width: 350px;";
  } else if (width >= 736) {
    style.value = "width: 250px;";
  } else {
    style.value = `width: ${width}px;`;
  }
});

onUnmounted(stop);

const form = reactive({
  location: "",
  keyword: "",
});
</script>

<template>
  <section ref="el" class="banner__container">
    <div>
      <h1 class="banner__title"
        >探索
        <span class="banner__highlight">台灣之美</span>
      </h1>
      <h2 class="banner__title">讓我們更親近這片土地</h2>
      <p class="banner__description"
        ><IconsSpot />台灣旅遊景點導覽 Taiwan Travel Guide</p
      >
    </div>
    <div>
      <ElForm :model="form">
        <ElFormItem>
          <ElSelect
            size="large"
            placeholder="探索景點"
            v-model="form.location"
            class="banner__select"
            :style="style"
          ></ElSelect>
        </ElFormItem>
        <ElFormItem>
          <ElInput
            size="large"
            placeholder="你想去哪裡？請輸入關鍵字"
            v-model="form.keyword"
            class="banner__input"
          ></ElInput>
        </ElFormItem>
        <ElButton type="primary" size="large" class="banner__searchBtn"
          ><IconsSearch />搜尋</ElButton
        >
      </ElForm>
    </div>
  </section>
</template>

<style scoped>
.banner__container {
  padding-top: 6px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
  @media (min-width: 768px) {
    padding-top: 64px;
    gap: clamp(16px, 3vw, 75px);
    flex-direction: row;
  }
}
.banner__title {
  font-size: 1.75rem;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 0.25rem;
  text-align: center;
  color: var(--el-text-color-regular);
  @media (min-width: 768px) {
    font-size: clamp(2rem, 3.5vw, 3rem);
    text-align: left;
  }
}
.banner__highlight {
  text-decoration: underline var(--el-color-success) 2px;
}
.banner__description {
  font-size: 0.875rem;
  line-height: 1.5;
  letter-spacing: 0.125rem;
  text-align: center;
  color: var(--el-text-color-primary);
  padding-top: 12px;
  @media (min-width: 768px) {
    font-size: clamp(1rem, 1.5vw, 1.25rem);
    text-align: left;
    padding-top: 16px;
  }
}
.banner__select:deep() .el-select__wrapper {
  min-height: 50px;
  line-height: 1.75;
  font-size: 1rem;
}
.banner__input:deep() .el-input__wrapper {
  padding: 6px 15px;
  line-height: 1.75;
  font-size: 1rem;
}
.banner__searchBtn {
  width: 100%;
  height: 50px;
  letter-spacing: 10px;
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.75;
}
</style>
