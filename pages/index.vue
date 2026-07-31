<template>
  <div class="w-full overflow-hidden">
    <!-- HERO -->
    <section class="relative w-full hero-mesh overflow-hidden" id="home">
      <div class="absolute inset-0 grid-lines pointer-events-none"></div>
      <div class="relative z-10 pt-16">
        <div class="container mx-auto px-5">
          <Hero />
        </div>
      </div>
    </section>

    <!-- WHY US -->
    <section class="relative w-full py-20 lg:py-28 bg-white" id="company">
      <div class="container mx-auto px-5">
        <SectionHeading
          align="center"
          eyebrow="Why us"
          title="Why leading teams choose ICES as a partner"
          subtitle="Two decades of field experience, an obsession with outcomes, and standards that keep your solutions future-proof."
        />
        <WhyUs class="mt-14" />
      </div>
    </section>

    <!-- OUR COMPANY — navy feature band -->
    <section class="relative w-full py-20 lg:py-28 bg-neutral overflow-hidden" id="company2">
      <div class="absolute inset-0 grid-lines opacity-60 pointer-events-none"></div>
      <div class="container mx-auto px-5 relative z-10">
        <OurCompany />
      </div>
    </section>

    <!-- SERVICES -->
    <section class="relative w-full py-20 lg:py-28 bg-mist" id="services">
      <div class="container mx-auto px-5">
        <SectionHeading
          align="center"
          eyebrow="Services we deliver"
          title="Optimize your IT infrastructure, end to end"
          subtitle="Nine core service lines covering everything from servers and networks to security, cloud and business continuity."
        />
        <OurServices class="mt-14" />
      </div>
    </section>

    <!-- CLIENTS -->
    <section class="w-full py-20 lg:py-28 bg-white">
      <div class="container mx-auto px-5">
        <SectionHeading
          align="center"
          eyebrow="Our customers"
          title="Trusted across the continent"
        />
        <OurClients class="mt-12" />
      </div>
    </section>

    <!-- EVENTS — navy feature band -->
    <section class="relative w-full py-20 lg:py-28 bg-neutral overflow-hidden" id="events">
      <div class="absolute inset-0 grid-lines opacity-60 pointer-events-none"></div>
      <div class="container mx-auto px-5 relative z-10">
        <div class="text-center flex flex-col items-center reveal">
          <span class="eyebrow eyebrow--center text-mint">Coming up</span>
          <h2 class="display-title mt-5 text-3xl sm:text-4xl lg:text-[2.75rem] text-white max-w-2xl">
            Learn about our upcoming events
          </h2>
        </div>
        <MctSummit class="mt-16 reveal" />
        <div class="mt-24 border-t border-white/10 pt-16 reveal">
          <Upcoming />
        </div>
      </div>
    </section>

    <!-- TECH PARTNERS -->
    <section class="w-full py-20 lg:py-28 bg-mist">
      <div class="container mx-auto px-5">
        <SectionHeading
          align="center"
          eyebrow="Technology partners"
          title="Built on best-in-class technology"
        />
        <OurTechPartners class="mt-12" />
      </div>
    </section>

    <!-- EDUCATION PARTNERS -->
    <section class="w-full py-20 lg:py-28 bg-white">
      <div class="container mx-auto px-5">
        <SectionHeading
          align="center"
          eyebrow="Educational partners"
          title="Certified training, recognized worldwide"
        />
        <OurEducationPartners class="mt-12" />
      </div>
    </section>

    <!-- TRAINING GALLERY -->
    <section class="w-full py-20 lg:py-28 bg-mist">
      <div class="container mx-auto px-5">
        <SectionHeading
          align="center"
          eyebrow="Training gallery"
          title="Hands-on learning in action"
        />
        <TrainingGalery class="mt-12" />
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
    { property: "og:url", content: "https://www.icesinternational.com" },
    {
      property: "og:title",
      content: "ICES - Maximizing business potentials with technology",
    },
    {
      property: "og:description",
      content:
        "We align with your company’s business objectives and provide the technological solution enablers to achieve these objectives",
    },

    { name: "twitter:image", content: "/images/ICES.png" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:url", content: "https://www.icesinternational.com" },
    {
      name: "twitter:title",
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
