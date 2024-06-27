<script lang="ts" setup></script>

<template>
  <section class="events__container">
    <h2 class="events__title">近期活動</h2>
    <ul class="events__list">
      <li v-for="n in 4" class="events__item" :key="n">
        <ElCard shadow="hover" class="events__card">
          <ElRow>
            <ElCol :span="7">
              <ElImage
                src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
                fit="cover"
                class="events__cardImg"
              />
            </ElCol>
            <ElCol :span="15" :offset="1">
              <div class="events__cardBody">
                <p class="events__date">2021/10/30 - 2021/11/13</p>
                <h4 class="events__title">活動標題</h4>
                <div class="events__footer">
                  <p><IconsSpotSmall />&nbsp;南投縣</p>
                  <p
                    ><NuxtLink to="/" class="events__link"
                      >詳細介紹&nbsp;<IconsArrowRight /></NuxtLink
                  ></p>
                </div>
              </div>
            </ElCol>
          </ElRow>
        </ElCard>
      </li>
    </ul>
    <p class="events__more"><NuxtLink to="/">查看更多活動</NuxtLink></p>
  </section>
</template>

<style scoped>
.events__container {
  position: relative;
  padding-top: 36px;
}
.events__title {
  font-size: 2.25rem;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 0.25rem;
  color: var(--el-text-color-regular);
}
.events__list {
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  gap: 12px 30px;
}
.events__card {
  border-radius: 12px;
  height: 10rem;
  overflow: hidden;
}
.events__card:deep() .el-card__body {
  padding: 0;
}
.events__cardImg {
  width: 100%;
  height: 10rem;
}
.events__cardBody {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: stretch;
  width: 100%;
  height: 100%;
  padding-top: 16px;
  padding-bottom: 16px;
}
.events__date {
  font-size: 1rem;
  line-height: 1.5;
  color: var(--el-text-color-primary);
}
.events__title {
  flex: 1 0 auto;
  font-size: 1.375rem;
  font-weight: 700;
  line-height: 1.5;
  letter-spacing: 0.125rem;
  color: var(--el-text-color-secondary);
}
.events__footer {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: var(--el-text-color-primary);
}
.events__link {
  text-decoration: none;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: var(--el-text-color-primary);
}
</style>
