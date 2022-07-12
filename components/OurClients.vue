<template>
  <swiper
    :modules="modules"
    :slides-per-view="3"
    :space-between="50"
    navigation
    :pagination="{ clickable: true }"
    autoplay
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
    <swiper-slide v-for="client of clients">
      <div
        class="flex flex-col items-center py-8 px-8 rounded-lg border bg-base-100 shadow-lg"
      >
        <img class="w-32 h-32 object-contain" :src="client.image" />
        <p class="font-bold h-24 mt-4">{{ client.name }}</p>
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

import { clients } from "~~/data/clients";

const modules = [Navigation, Pagination, A11y, Autoplay];

const onSwiper = (swiper) => {
  console.log(swiper);
};
const onSlideChange = () => {
  console.log("slide change");
};
</script>
