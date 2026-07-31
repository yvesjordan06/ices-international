<template>
  <swiper
    :modules="modules"
    :slides-per-view="3"
    :space-between="24"
    :breakpoints="{
      0: { slidesPerView: 1 },
      640: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
    }"
    :pagination="{ clickable: true }"
    :autoplay="{ delay: 3000, disableOnInteraction: false }"
    loop
    class="py-4 pb-14"
  >
    <swiper-slide v-for="client of clients" :key="client.name" class="h-auto">
      <div
        class="flex flex-col items-center justify-center gap-5 h-56 py-8 px-6 rounded-2xl border border-navy/10 bg-white shadow-card"
      >
        <img
          class="w-24 h-24 object-contain"
          :src="client.image"
          :alt="client.name"
        />
        <p class="font-display font-semibold text-center text-ink">
          {{ client.name }}
        </p>
      </div>
    </swiper-slide>
  </swiper>
</template>
<script lang="ts" setup>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination, A11y, Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { clients } from "~~/data/education";

const modules = [Navigation, Pagination, A11y, Autoplay];

const onSwiper = (swiper) => {
  console.log(swiper);
};
const onSlideChange = () => {
  console.log("slide change");
};
</script>
