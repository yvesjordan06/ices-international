<template>
  <div class="flex flex-col items-center justify-center gap-16 lg:flex-row">
    <!-- Date block -->
    <div
      class="w-[28rem] relative h-[28rem] bg-gradient-to-tl rounded-lg from-primary to-secondary flex items-center justify-center"
    >
      <div class="bg-base-100 w-[26rem] h-[26rem]"></div>

      <div
        class="absolute flex flex-col items-center justify-center w-full h-full text-center bg-white rounded-lg shadow-lg -top-8 -left-8"
      >
        <span class="text-sm font-bold tracking-widest uppercase text-secondary">
          Yaoundé, Cameroon
        </span>
        <span class="mt-2 font-bold leading-none text-8xl text-primary">
          24<span class="text-5xl">-</span>25
        </span>
        <span class="mt-2 text-2xl font-bold tracking-wide uppercase text-primary">
          September 2026
        </span>
        <span class="max-w-xs mt-6 text-text2">CAA Conference Hall</span>
      </div>
    </div>

    <!-- Text block -->
    <div class="max-w-xl text-center lg:text-left">
      <h3 class="text-4xl font-bold tracking-wide text-primary">
        MCT Africa Tech Summit 2026
      </h3>

      <p class="mt-6 text-lg italic text-gray-400">
        Beyond Technology : Building a Trusted &amp; Intelligent Digital Era
      </p>

      <p class="mt-8 text-gray-300">
        ICES is organizing the <strong>MCT Africa Tech Summit 2026</strong>, two
        days bringing together over 300 decision-makers, developers, educators
        and entrepreneurs from across the continent. Keynotes, panels, product
        demos and networking sessions led by more than 20 African and
        international experts.
      </p>

      <p class="mt-6 text-gray-300">
        The summit also includes a <strong>training track</strong>: hands-on
        workshops on Azure OpenAI, Copilot and the Power Platform, along with
        Train-the-Trainer sessions leading to the
        <strong>Microsoft Certified Trainer (MCT)</strong> certification.
      </p>

      <a
        href="https://mctafrica.org"
        target="_blank"
        rel="noopener noreferrer"
        class="mt-8 btn btn-sm btn-secondary"
      >
        Discover the summit on mctafrica.org
      </a>
    </div>
  </div>
</template>

<script lang="ts" setup></script>
