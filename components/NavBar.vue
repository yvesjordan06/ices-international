<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300"
    :class="
      scrolled
        ? 'bg-white/95 backdrop-blur-md border-b border-navy/10 shadow-md shadow-navy/5'
        : 'bg-transparent border-b border-white/10'
    "
  >
    <div
      class="container mx-auto flex items-center justify-between px-5 py-3.5 lg:py-4"
    >
      <nuxt-link
        to="/"
        class="inline-flex items-center"
        aria-label="ICES International home"
      >
        <Logo :variant="scrolled ? 'color' : 'white'" class="h-9 lg:h-11" />
      </nuxt-link>

      <!-- Desktop nav -->
      <nav
        class="hidden lg:flex items-center gap-9 text-sm font-medium transition-colors"
        :class="scrolled ? 'text-navy/80' : 'text-white/90'"
      >
        <a
          v-for="link in links"
          :key="link.href"
          :href="link.href"
          class="link-underline transition-colors"
          :class="scrolled ? 'hover:text-emerald' : 'hover:text-white'"
        >
          {{ link.label }}
        </a>
        <nuxt-link
          to="/about"
          class="btn btn-primary btn-sm px-5 h-10 min-h-0 font-display shadow-lg shadow-emerald/25"
        >
          Contact us
        </nuxt-link>
      </nav>

      <!-- Mobile toggle -->
      <button
        class="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg border transition-colors"
        :class="
          scrolled
            ? 'text-navy bg-navy/5 border-navy/10'
            : 'text-white bg-white/10 border-white/15'
        "
        aria-label="Toggle menu"
        @click="open = !open"
      >
        <svg v-if="!open" width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
        </svg>
        <svg v-else width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
        </svg>
      </button>
    </div>

    <!-- Mobile panel (always solid white for readability) -->
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <nav
        v-if="open"
        class="lg:hidden bg-white border-t border-navy/10 shadow-lg px-5 py-4"
      >
        <a
          v-for="link in links"
          :key="link.href"
          :href="link.href"
          class="block py-3 text-navy/80 border-b border-navy/5 hover:text-emerald"
          @click="open = false"
        >
          {{ link.label }}
        </a>
        <nuxt-link
          to="/about"
          class="btn btn-primary w-full mt-4 font-display"
          @click="open = false"
        >
          Contact us
        </nuxt-link>
      </nav>
    </transition>
  </header>
</template>

<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const links = [
  { label: "Why us", href: "/#company" },
  { label: "Our company", href: "/#company2" },
  { label: "Services", href: "/#services" },
  { label: "Events", href: "/events" },
  { label: "Gallery", href: "/gallery" },
];

const open = ref(false);
const scrolled = ref(false);

const onScroll = () => {
  scrolled.value = window.scrollY > 24;
};

onMounted(() => {
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
});
onBeforeUnmount(() => window.removeEventListener("scroll", onScroll));
</script>
