<template>
  <div class="flex flex-col items-center justify-center gap-16 lg:flex-row">
    <!-- Photo block -->
    <div
      class="w-[28rem] relative h-[28rem] bg-gradient-to-tl rounded-lg from-primary to-secondary flex items-center justify-center"
    >
      <div class="bg-base-100 w-[26rem] h-[26rem]"></div>

      <img
        src="/images/kobe.jpg"
        class="absolute object-contain object-top w-full h-full bg-white rounded-lg shadow-lg -top-8 -left-8"
      />
    </div>

    <!-- Text block -->
    <div class="max-w-xl text-center lg:text-left">
      <h3 class="text-4xl font-bold tracking-wide text-primary">
        Meet Our CEO
      </h3>

      <p class="mt-12 text-gray-300">
        <strong>Joseph Kobe</strong>, CEO of ICES SARL, is a Microsoft Hybrid
        Infrastructure Architect and Microsoft Certified Trainer (MCT). With
        over 30 years of experience in designing, implementing, and managing
        Microsoft on-premises and Azure-based cloud solutions, he translates
        business needs into technical blueprints while ensuring security,
        scalability, and cost-effectiveness.
      </p>

      <p class="mt-6 text-gray-300">
        His achievements include reducing costs, improving performance, and
        increasing productivity. An expert in security practices, Zero Trust
        architectures, and hybrid cloud infrastructures, he works closely with
        stakeholders to ensure seamless cloud adoption.
      </p>

      <p class="mt-6 text-gray-300">
        As a trusted advisor, Joseph architects solutions covering identity,
        data, infrastructure, and business continuity, collaborating with
        cross-functional teams and staying at the forefront of Microsoft
        technologies.
      </p>

      <a
        href="https://www.linkedin.com/in/joseph-kobe-54348b13/"
        target="_blank"
        class="mt-8 btn btn-sm btn-secondary"
      >
        Learn More About Joseph
      </a>
    </div>
  </div>
</template>

<script lang="ts" setup></script>
