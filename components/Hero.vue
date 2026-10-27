<template>
  <div class="py-20 lg:py-28">
    <div class="max-w-3xl">
      <span
        class="inline-flex items-center gap-2.5 text-xs font-display font-semibold uppercase tracking-[0.18em] text-mint"
      >
        <span class="h-1.5 w-1.5 rounded-full bg-mint"></span>
        ICES International · Since 2003
      </span>

      <h1
        class="display-title mt-6 text-4xl sm:text-5xl xl:text-[4.25rem] text-white"
      >
        Maximizing business potential with
        <span
          class="bg-gradient-to-r from-mint to-emerald bg-clip-text text-transparent"
        >
          technology
        </span>
      </h1>

      <p class="mt-7 max-w-xl text-lg leading-8 text-white/70">
        We align with your business objectives and deliver the technology
        enablers to reach them — from infrastructure and cloud to security and
        training, across Cameroon, Gabon, the DRC, Madagascar and beyond.
      </p>

      <div class="mt-9 flex flex-col sm:flex-row gap-4">
        <nuxt-link
          to="/about"
          class="btn btn-primary font-display px-7 shadow-lg shadow-emerald/30"
        >
          Talk to our team
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" class="ml-1">
            <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </nuxt-link>
        <nuxt-link
          to="/events"
          class="btn btn-outline font-display px-7 text-white border-white/25 hover:bg-white/10 hover:border-white/40"
        >
          Explore the 2026 Summit
        </nuxt-link>
      </div>
    </div>

    <!-- Stat rail -->
    <div class="mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 max-w-5xl">
      <div v-for="stat in stats" :key="stat.label" class="stat-chip px-5 py-5">
        <div class="font-display text-3xl font-bold text-white leading-none">
          {{ stat.value }}
        </div>
        <div class="mt-2 text-sm text-white/75 leading-snug">
          {{ stat.label }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const stats = [
  { value: "2003", label: "Delivering reliable tech since" },
  { value: "Cameroon", label: "Head office · Yaoundé" },
  { value: "Gabon", label: "Branch · Libreville" },
  { value: "DR Congo", label: "Branch · Kinshasa" },
  { value: "Madagascar", label: "Branch · Antananarivo" },
];
</script>
