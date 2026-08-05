<template>
  <img
    :src="src"
    alt="ICES International — A Commitment to Excellence"
    class="h-full w-auto object-contain"
  />
</template>
<script lang="ts" setup>
import { computed } from "vue";
const props = defineProps<{ variant?: "color" | "white" }>();
const src = computed(() =>
  props.variant === "white"
    ? "/images/ices-logo-white.png"
    : "/images/ices-logo-color.png"
);
</script>
