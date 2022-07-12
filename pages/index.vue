<template>
  <div class="w-full overflow-hidden">
    <section
      class="w-full bg-cover"
      style="background-image: url('/images/bg.webp')"
    >
      <div class="w-full h-full">
        <NavBar class="text-white" />
        <Hero class="container mx-auto" />
      </div>
    </section>
    <section class="w-full bg-base-200 z-10 relative p-16">
      <div class="container mx-auto">
        <h3
          class="text-base uppercase tracking-wide font-bold text-primary text-center"
        >
          Why us ?
        </h3>
        <h5 class="text-3xl mt-2 text-center font-bold">
          Why would you choose ICES as a partner ?
        </h5>

        <WhyUs class="mt-8" />
      </div>
    </section>

    <section class="w-full z-10 relative p-16" id="company">
      <div class="container mx-auto">
        <h3
          class="text-base uppercase tracking-wide font-bold text-primary text-center"
        >
          OUR COMPANY
        </h3>
        <h5
          class="text-3xl mt-4 text-center font-bold max-w-xl tracking-wide mx-auto"
        >
          We provide effective and efficient support services that guarantee
          seamless operations
        </h5>
        <OurCompany class="mt-8 max-w-5xl mx-auto" />
      </div>
    </section>

    <section class="w-full bg-base-200 mt-16 z-10 relative p-16" id="services">
      <div class="container mx-auto">
        <h3
          class="text-base uppercase tracking-wide font-bold text-primary text-center"
        >
          SERVICES WE DELIVER
        </h3>
        <h5 class="text-3xl mt-2 text-center font-bold">
          Optimize your IT Infrastructure
        </h5>

        <OurServices class="mt-16" />
      </div>
    </section>

    <section class="w-full py-12">
      <div class="container mx-auto">
        <h3
          class="text-base uppercase tracking-wide font-bold text-primary text-center"
        >
          OUR CUSTOMER
        </h3>

        <OurClients class="mt-8" />
      </div>
    </section>
    <section class="w-full py-12 bg-neutral" id="events">
      <div class="container mx-auto">
        <h3
          class="text-base uppercase tracking-wide font-bold text-primary text-center"
        >
          COMING UP
        </h3>
        <h5
          class="text-3xl mt-4 text-center font-bold max-w-xl tracking-wide mx-auto"
        >
          Learn about our upcoming events
        </h5>
        <Upcoming class="mt-16" />
      </div>
    </section>
    <section class="w-full py-12">
      <div class="container mx-auto">
        <h3
          class="text-base uppercase tracking-wide font-bold text-primary text-center"
        >
          OUR TECHNOLOGY PARTNERS
        </h3>

        <OurTechPartners class="mt-8" />
      </div>
    </section>

    <section class="w-full py-12">
      <div class="container mx-auto">
        <h3
          class="text-base uppercase tracking-wide font-bold text-primary text-center"
        >
          OUR EDUCATIONAL PARTNERS
        </h3>

        <OurEducationPartners class="mt-8" />
      </div>
    </section>
  </div>
</template>
<script></script>
