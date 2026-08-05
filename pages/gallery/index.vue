<template>
  <div class="w-full overflow-hidden">
    <!-- Hero -->
    <section class="relative w-full hero-mesh overflow-hidden">
      <div class="absolute inset-0 grid-lines pointer-events-none"></div>
      <div class="relative z-10">
        <div class="container mx-auto px-5 pt-32 pb-20 lg:pt-40 lg:pb-24 text-center">
          <span class="eyebrow eyebrow--center text-mint">In the field</span>
          <h1 class="mt-5 display-title text-4xl sm:text-5xl lg:text-6xl text-white">
            Training gallery
          </h1>
          <p class="mt-6 max-w-2xl mx-auto text-lg text-white/70">
            Snapshots from our hands-on workshops, certifications and corporate
            training sessions across Cameroon, Gabon and the DRC.
          </p>
        </div>
      </div>
    </section>

    <!-- Full gallery -->
    <section class="w-full bg-white py-20 lg:py-28">
      <div class="container mx-auto px-5">
        <SectionHeading
          align="center"
          eyebrow="Trainings & certifications"
          title="Where teams level up"
          subtitle="Tap any session to open the full-size viewer."
        />
        <TrainingGalery class="mt-14" />
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
useHead({
  title: "Training Gallery - ICES International",
  meta: [
    {
      name: "description",
      content:
        "Photos from ICES hands-on trainings, Microsoft certifications and corporate workshops across Cameroon, Gabon and the DRC.",
    },
    { property: "og:title", content: "Training Gallery - ICES International" },
    { property: "og:type", content: "website" },
    { property: "og:image", content: "/images/ices-logo-color.png" },
    { property: "og:url", content: "https://www.icesinternational.com/gallery" },
    {
      property: "og:description",
      content:
        "Snapshots from our hands-on workshops and certification sessions across Central Africa.",
    },
  ],
});
</script>
