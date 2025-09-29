<template>
  <div class="w-full overflow-hidden">
    <section
      class="w-full bg-no-repeat bg-cover"
      style="background-image: url('/images/bg1.png')" id="home"
    >
      <div class="w-full h-full">
        <NavBar class="text-white" />
        <Hero class="container mx-auto" />
      </div>
    </section>
    <section class="relative z-10 w-full p-16 bg-base-200" id="company">
      <div class="container mx-auto">
        <h3
          class="text-base font-bold tracking-wide text-center uppercase text-primary"
        >
          Why us ?
        </h3>
        <h5 class="mt-2 text-3xl font-bold text-center">
          Why would you choose ICES as a partner ?
        </h5>

        <WhyUs class="mt-8" />
      </div>
    </section>

    <section class="relative z-10 w-full p-16" id="company2">
      <div class="container mx-auto">
        <h3
          class="text-base font-bold tracking-wide text-center uppercase text-primary"
        >
          OUR COMPANY
        </h3>
        <h5
          class="max-w-xl mx-auto mt-4 text-3xl font-bold tracking-wide text-center"
        >
          We provide effective and efficient support services that guarantee
          seamless operations
        </h5>
        <OurCompany class="max-w-5xl mx-auto mt-8" />
      </div>
    </section>

    <section class="relative z-10 w-full p-16 mt-16 bg-base-200" id="services">
      <div class="container mx-auto">
        <h3
          class="text-base font-bold tracking-wide text-center uppercase text-primary"
        >
          SERVICES WE DELIVER
        </h3>
        <h5 class="mt-2 text-3xl font-bold text-center">
          Optimize your IT Infrastructure
        </h5>

        <OurServices class="mt-16" />
      </div>
    </section>

    <section class="w-full py-12">
      <div class="container mx-auto">
        <h3
          class="text-base font-bold tracking-wide text-center uppercase text-primary"
        >
          OUR CUSTOMER
        </h3>

        <OurClients class="mt-8" />
      </div>
    </section>
    <section class="w-full py-12 bg-neutral" id="events">
      <div class="container mx-auto">
        <h3
          class="hidden text-base font-bold tracking-wide text-center uppercase text-primary"
        >
          COMING UP
        </h3>
        <h5
          class="max-w-xl mx-auto mt-4 text-3xl font-bold tracking-wide text-center"
        >
          Learn about our upcoming events
        </h5>
        <Upcoming class="mt-16" />
      </div>
    </section>
    <section class="w-full py-12">
      <div class="container mx-auto">
        <h3
          class="text-base font-bold tracking-wide text-center uppercase text-primary"
        >
          OUR TECHNOLOGY PARTNERS
        </h3>

        <OurTechPartners class="mt-8" />
      </div>
    </section>

    <section class="w-full py-12">
      <div class="container mx-auto">
        <h3
          class="text-base font-bold tracking-wide text-center uppercase text-primary"
        >
          OUR EDUCATIONAL PARTNERS
        </h3>

        <OurEducationPartners class="mt-8" />
      </div>
    </section>

    <section class="w-full py-12">
      <div class="container mx-auto">
        <h3
          class="text-base font-bold tracking-wide text-center uppercase text-primary"
        >
          Training Gallery
        </h3>

        <TrainingGalery class="mt-8" />
      </div>
    </section>
  </div>
</template>
<script lang="ts" setup>
useHead({
  title: "ICES - Maximizing business potentials with technology",
  meta: [
    {
      name: "title",
      content: "ICES - Maximizing business potentials with technology",
    },

    {
      name: "description",
      content:
        "We align with your company’s business objectives and provide the technological solution enablers to achieve these objectives",
    },
    { property: "og:image", content: "/images/ICES.png" },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://icesinternational.com" },
    {
      property: "og:title",
      content: "ICES - Maximizing business potentials with technology",
    },
    {
      name: "og:description",
      content:
        "We align with your company’s business objectives and provide the technological solution enablers to achieve these objectives",
    },

    { property: "twitter:image", content: "/images/ICES.png" },
    { property: "twitter:card", content: "summary_large_image" },
    { property: "twitter:url", content: "https://icesinternational.com" },
    {
      property: "twitter:title",
      content: "ICES - Maximizing business potentials with technology",
    },
    {
      name: "twitter:description",
      content:
        "We align with your company’s business objectives and provide the technological solution enablers to achieve these objectives",
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
