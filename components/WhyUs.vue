<template>
  <div class="w-full grid grid-cols-3 gap-12">
    <div
      v-for="reason of reasons"
      class="bg-base-100 rounded-lg flex-col flex items-center shadow-lg p-12"
    >
      <div
        class="w-32 rounded-full h-32 bg-secondary/30 flex justify-center items-center"
      >
        <img :src="reason.image" class="w-24 h-24" />
      </div>
      <h4 class="mt-8 font-bold uppercase">{{ reason.title }}</h4>
      <p class="mt-8 text-text2">{{ reason.description }}</p>
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
