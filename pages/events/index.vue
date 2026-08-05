<template>
  <div class="w-full overflow-hidden">
    <!-- Hero -->
    <section class="relative w-full hero-mesh overflow-hidden">
      <div class="absolute inset-0 grid-lines pointer-events-none"></div>
      <div class="relative z-10">
        <div class="container mx-auto px-5 pt-32 pb-20 lg:pt-40 lg:pb-24 text-center">
          <span class="eyebrow eyebrow--center text-mint">What's next at ICES</span>
          <h1 class="mt-5 display-title text-4xl sm:text-5xl lg:text-6xl text-white">
            Upcoming events
          </h1>
          <p class="mt-6 max-w-xl mx-auto text-lg text-white/70">
            Conferences, summits and hands-on training designed to move African
            tech forward.
          </p>
        </div>
      </div>
    </section>

    <!-- September 2026 -->
    <section class="w-full bg-neutral py-20 lg:py-24">
      <div class="container mx-auto px-5">
        <span class="eyebrow text-mint">September 2026</span>
        <div class="mt-12">
          <MctSummit />
        </div>
        <div class="mt-24 border-t border-white/10 pt-16">
          <Upcoming />
        </div>
      </div>
    </section>
  </div>
</template>
<script lang="ts" setup>
useHead({
  title: "Our Events - ICES",
  meta: [
    {
      name: "title",
      content: "Our Events - ICES",
    },

    {
      name: "description",
      content: "Discover and learn more with our upcoming events",
    },
    { property: "og:image", content: "/images/ices-logo-color.png" },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://www.icesinternational.com" },
    {
      property: "og:title",
      content: "Our Events - ICES",
    },
    {
      property: "og:description",
      content: "Discover and learn more with our upcoming events",
    },

    { name: "twitter:image", content: "/images/ices-logo-color.png" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:url", content: "https://www.icesinternational.com" },
    {
      name: "twitter:title",
      content: "Our Events - ICES",
    },
    {
      name: "twitter:description",
      content: "Discover and learn more with our upcoming events",
    },

    {
      name: "keywords",
      content: "technology, microsoft, objectives",
    },
    {
      name: "language",
      content: "English",
    },
  ],
});
</script>
