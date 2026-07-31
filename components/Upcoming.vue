<template>
  <div class="flex flex-col items-center justify-center gap-16 lg:flex-row">
    <!-- Photo block -->
    <div class="relative shrink-0">
      <div
        class="w-[24rem] h-[24rem] sm:w-[27rem] sm:h-[27rem] rounded-2xl bg-gradient-to-tl from-emerald to-navy p-[2px]"
      >
        <img
          src="/images/kobe.jpg"
          alt="Joseph Kobe, CEO of ICES SARL"
          class="object-cover object-top w-full h-full bg-white rounded-2xl shadow-lift"
        />
      </div>
    </div>

    <!-- Text block -->
    <div class="max-w-xl text-center lg:text-left">
      <span class="eyebrow eyebrow--center lg:!inline-flex text-mint">Leadership</span>
      <h3 class="mt-5 display-title text-3xl sm:text-4xl text-white">
        Meet our CEO
      </h3>

      <p class="mt-7 text-white/70 leading-relaxed">
        <strong class="text-white">Joseph Kobe</strong>, CEO of ICES SARL, is a Microsoft Hybrid
        Infrastructure Architect and Microsoft Certified Trainer (MCT). With
        over 30 years of experience in designing, implementing, and managing
        Microsoft on-premises and Azure-based cloud solutions, he translates
        business needs into technical blueprints while ensuring security,
        scalability, and cost-effectiveness.
      </p>

      <p class="mt-5 text-white/70 leading-relaxed">
        His achievements include reducing costs, improving performance, and
        increasing productivity. An expert in security practices, Zero Trust
        architectures, and hybrid cloud infrastructures, he works closely with
        stakeholders to ensure seamless cloud adoption.
      </p>

      <p class="mt-5 text-white/70 leading-relaxed">
        As a trusted advisor, Joseph architects solutions covering identity,
        data, infrastructure, and business continuity, collaborating with
        cross-functional teams and staying at the forefront of Microsoft
        technologies.
      </p>

      <a
        href="https://www.linkedin.com/in/joseph-kobe-54348b13/"
        target="_blank"
        rel="noopener noreferrer"
        class="mt-8 btn btn-primary font-display px-6 shadow-lg shadow-emerald/25"
      >
        Learn more about Joseph
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" class="ml-1">
          <path d="M7 17L17 7M17 7H9M17 7v8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </a>
    </div>
  </div>
</template>

<script lang="ts" setup></script>
