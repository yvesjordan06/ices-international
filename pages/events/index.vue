<template>
  <div class="w-full overflow-hidden">
    <NavBar class="text-base-content" />
    <section class="w-full bg-cover">
      <div class="w-full h-full">
        <div class="container mx-auto py-16">
          <div>
            <h1 class="text-6xl font-bold tracking-wide text-center">
              Upcoming Events
            </h1>
          </div>
        </div>
      </div>
    </section>
    <div class="mt-8 bg-neutral py-8">
      <div class="container mx-auto">
        <h2 class="text-4xl font-bold tracking-wide text-primary mb-8">
          July 2022
        </h2>

        <Upcoming />
      </div>
    </div>
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
    { property: "og:image", content: "/images/ICES.png" },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://icesinternational.com" },
    {
      property: "og:title",
      content: "Our Events - ICES",
    },
    {
      name: "og:description",
      content: "Discover and learn more with our upcoming events",
    },

    { property: "twitter:image", content: "/images/ICES.png" },
    { property: "twitter:card", content: "summary_large_image" },
    { property: "twitter:url", content: "https://icesinternational.com" },
    {
      property: "twitter:title",
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
