<template>
  <div class="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
    <!-- Big stat -->
    <div class="reveal">
      <span class="eyebrow text-mint">Our company</span>
      <div class="mt-8 flex items-end gap-6">
        <span
          class="font-display font-bold leading-none text-white text-[7rem] sm:text-[10rem] tracking-tightest"
        >
          19<span class="text-emerald">92</span>
        </span>
        <span class="pb-6 text-lg text-white/60 max-w-[9rem] leading-snug">
          Delivering reliable technology since
        </span>
      </div>
    </div>

    <!-- Copy -->
    <div class="reveal">
      <h2 class="display-title text-3xl sm:text-4xl text-white">
        A team you can build on
      </h2>
      <p class="mt-6 text-lg leading-8 text-white/70">
        We leverage the collective experience of a team of highly skilled,
        committed professionals to consistently deliver excellent service and
        reliable support that guarantees seamless operations.
      </p>

      <div class="mt-10 grid grid-cols-3 gap-5">
        <div
          v-for="fact in facts"
          :key="fact.label"
          class="border-l border-white/15 pl-4"
        >
          <div class="font-display text-xl font-semibold text-mint">
            {{ fact.value }}
          </div>
          <div class="mt-1 text-sm text-white/55 leading-snug">
            {{ fact.label }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
const facts = [
  { value: "Cameroon", label: "Yaoundé office" },
  { value: "DR Congo", label: "Kinshasa office" },
  { value: "Microsoft", label: "Certified partner" },
];
</script>
