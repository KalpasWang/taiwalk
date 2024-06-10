<script lang="ts" setup></script>

<template>
  <section class="carousel__container">
    <ElCarousel :interval="3000" arrow="always">
      <ElCarouselItem v-for="item in 4" :key="item">
        <h3 text="2xl" justify="center">{{ item }}</h3>
      </ElCarouselItem>
    </ElCarousel>
  </section>
</template>

<style scoped>
.carousel__container {
  padding-top: 52px;
}
.carousel__container:deep() .el-carousel {
  border-radius: 24px;
  max-width: 1110px;
  margin: 0 auto;
}
.carousel__container:deep() .el-carousel__indicators {
  left: auto;
  right: 0;
}
.carousel__container:deep() .el-carousel__button {
  width: 16px;
  height: 16px;
  margin: 0 2px;
  border-radius: 999px;
}
.carousel__container:deep() .is-active .el-carousel__button {
  transform: scale(1.25);
  transform-origin: center;
}
.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 400px;
  max-width: 1110px;
  margin: 0 auto;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
