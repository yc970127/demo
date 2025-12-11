<template>
  <client-only>
    <Swiper
      :modules="[Navigation, Pagination, Autoplay]"
      :slides-per-view="1"
      :space-between="20"
      :loop="true"
      :autoplay="{ delay: autoplayDelay, disableOnInteraction: false }"
      navigation
      pagination
      class="swiper-banner"
    >
      <SwiperSlide v-for="(item, index) in slides" :key="index">
        <div class="slide-wrapper">
          <img :src="item.src" :alt="item.alt || `slide-${index}`" class="slide-img" />
          <div v-if="item.title" class="slide-title">{{ item.title }}</div>
        </div>
      </SwiperSlide>
    </Swiper>
  </client-only>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

interface SlideItem {
  src: string
  alt?: string
  title?: string
}

// 传入轮播数据
defineProps<{
  slides: SlideItem[]
  autoplayDelay?: number
}>()

// 默认自动轮播时间 3 秒
const props = defineProps({
  slides: {
    type: Array,
    required: true
  },
  autoplayDelay: {
    type: Number,
    default: 3000
  }
})
</script>

<style scoped>
.swiper-banner {
  width: 100%;
  height: 300px;
}

.slide-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
}

.slide-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
}

.slide-title {
  position: absolute;
  bottom: 20px;
  left: 20px;
  color: #fff;
  font-size: 20px;
  text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.7);
}
</style>
