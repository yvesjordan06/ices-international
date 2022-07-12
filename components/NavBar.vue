<template>
  <div class="w-full text-base">
    <div class="container mx-auto items-center flex py-8 justify-between">
      <Logo class="h-20" />
      <ul
        class="flex gap-4 [&>li]:px-5 [&>li:hover]:text-secondary [&>li]:cursor-pointer"
      >
        <li><nuxt-link to="/#company">Company</nuxt-link></li>
        <li><nuxt-link to="/#services">Services</nuxt-link></li>
        <li><nuxt-link to="/#event">Events</nuxt-link></li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts" setup>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
</script>
