<template>
  <div
    class="reveal"
    :class="align === 'center' ? 'text-center flex flex-col items-center' : ''"
  >
    <span class="eyebrow" :class="{ 'eyebrow--center': align === 'center' }">
      {{ eyebrow }}
    </span>
    <h2
      class="display-title mt-5 text-3xl sm:text-4xl lg:text-[2.75rem] text-ink"
      :class="align === 'center' ? 'max-w-2xl' : 'max-w-3xl'"
    >
      <slot name="title">{{ title }}</slot>
    </h2>
    <p
      v-if="subtitle || $slots.subtitle"
      class="mt-5 text-lg leading-8 text-slate2"
      :class="align === 'center' ? 'max-w-2xl' : 'max-w-2xl'"
    >
      <slot name="subtitle">{{ subtitle }}</slot>
    </p>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  eyebrow: string;
  title?: string;
  subtitle?: string;
  align?: "left" | "center";
}>();
</script>
