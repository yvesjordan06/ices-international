<template>
  <div class="flex flex-col items-center justify-center gap-16 lg:flex-row">
    <!-- Date block -->
    <div class="relative shrink-0">
      <div
        class="w-[24rem] h-[24rem] sm:w-[27rem] sm:h-[27rem] rounded-2xl bg-gradient-to-tl from-emerald to-navy p-[2px]"
      >
        <div
          class="flex flex-col items-center justify-center w-full h-full text-center bg-white rounded-2xl shadow-lift"
        >
          <span class="text-xs font-display font-semibold tracking-[0.2em] uppercase text-emerald">
            Yaoundé, Cameroon
          </span>
          <span class="mt-3 font-display font-bold leading-none text-8xl text-ink">
            24<span class="text-5xl text-emerald">–</span>25
          </span>
          <span class="mt-3 text-2xl font-display font-semibold tracking-wide uppercase text-navy">
            September 2026
          </span>
          <span class="mt-6 text-slate2">CAA Conference Hall</span>
          <span class="mt-6 inline-flex items-center gap-2 rounded-full bg-emerald/10 px-4 py-1.5 text-sm font-medium text-emerald">
            300+ participants
          </span>
        </div>
      </div>
    </div>

    <!-- Text block -->
    <div class="max-w-xl text-center lg:text-left">
      <span class="eyebrow eyebrow--center lg:!inline-flex text-mint">
        Featured event
      </span>
      <h3 class="mt-5 display-title text-3xl sm:text-4xl text-white">
        MCT Africa Tech Summit 2026
      </h3>

      <p class="mt-5 text-lg italic text-mint/80">
        Beyond Technology: Building a Trusted &amp; Intelligent Digital Era
      </p>

      <p class="mt-7 text-white/70 leading-relaxed">
        ICES is organizing the <strong class="text-white">MCT Africa Tech Summit 2026</strong>,
        two days bringing together over 300 decision-makers, developers,
        educators and entrepreneurs from across the continent. Keynotes, panels,
        product demos and networking sessions led by more than 20 African and
        international experts.
      </p>

      <p class="mt-5 text-white/70 leading-relaxed">
        The summit also includes a <strong class="text-white">training track</strong>:
        hands-on workshops on Azure OpenAI, Copilot and the Power Platform, along
        with Train-the-Trainer sessions leading to the
        <strong class="text-white">Microsoft Certified Trainer (MCT)</strong> certification.
      </p>

      <a
        href="https://mctafrica.org"
        target="_blank"
        rel="noopener noreferrer"
        class="mt-8 btn btn-primary font-display px-6 shadow-lg shadow-emerald/25"
      >
        Discover the summit on mctafrica.org
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" class="ml-1">
          <path d="M7 17L17 7M17 7H9M17 7v8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </a>
    </div>
  </div>
</template>

<script lang="ts" setup></script>
