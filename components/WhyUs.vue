<template>
  <div class="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <div
      v-for="reason of reasons"
      :key="reason.title"
      class="card-elev reveal p-8 text-left"
    >
      <div
        class="w-16 h-16 rounded-2xl bg-emerald/10 ring-1 ring-emerald/15 flex justify-center items-center"
      >
        <img :src="reason.image" :alt="reason.title" class="w-8 h-8 object-contain" />
      </div>
      <h4 class="mt-6 font-display text-lg font-semibold text-ink">
        {{ reason.title }}
      </h4>
      <p class="mt-3 text-slate2 leading-relaxed">{{ reason.description }}</p>
    </div>
  </div>
</template>
<script lang="ts" setup>
const reasons: { image: string; title: string; description: string }[] = [
  {
    image: "/images/expert.svg",
    title: "A sharp expertise",
    description:
      "Field expertise built around a mastery of the local and African Tech/IT/Telco ecosystem",
  },

  {
    image: "/images/results.svg",
    title: "Strong result-oriented culture",
    description:
      "We are results-oriented from the beginning to the end of every project, every assignment",
  },
  {
    image: "/images/standard.svg",
    title: "Established standards",
    description:
      "Alignment to established industry standards for future-proof solutions and recommendations",
  },
  {
    image: "/images/passion.svg",
    title: "A passion for success",
    description: "Our passion for success, your success is our driving force",
  },
  {
    image: "/images/partner.svg",
    title: "Strong partnerships",
    description: "Complementary skills brought together around your challenges",
  },
  {
    image: "/images/solutions.svg",
    title: "Customized solutions",
    description: "Answers tailored to the specifics of each of our clients",
  },
];
</script>
