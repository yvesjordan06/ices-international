<template>
  <footer class="bg-ink text-neutral-content" id="contact">
    <div class="h-1 w-full bg-gradient-to-r from-emerald to-mint"></div>
    <div class="container mx-auto px-5 py-16">
      <div class="grid gap-12 lg:grid-cols-3">
        <!-- Brand -->
        <div>
          <Logo variant="white" class="h-12 w-auto" />
          <p class="mt-5 font-display font-semibold text-white">
            ICES International Sarl
          </p>
          <p class="mt-1 text-sm text-neutral-content/70">
            Providing reliable tech since 2003
          </p>

          <div class="mt-6 flex gap-3">
            <a
              v-for="s in socials"
              :key="s.label"
              :href="s.href"
              :aria-label="s.label"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center justify-center w-10 h-10 rounded-lg bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-emerald hover:border-emerald transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" class="fill-current">
                <path :d="s.path" />
              </svg>
            </a>
          </div>
        </div>

        <!-- Email -->
        <div>
          <h4 class="font-display text-sm font-semibold uppercase tracking-widest text-emerald">
            Email
          </h4>
          <div class="mt-5 space-y-2 text-sm">
            <a href="mailto:info@icesinternational.com" class="block link-underline text-white">
              info@icesinternational.com
            </a>
            <a href="mailto:info@icesacademy.com" class="block link-underline text-white">
              info@icesacademy.com
            </a>
          </div>
        </div>

        <!-- Web -->
        <div>
          <h4 class="font-display text-sm font-semibold uppercase tracking-widest text-emerald">
            Web
          </h4>
          <div class="mt-5 space-y-2 text-sm">
            <a href="https://www.icesinternational.com" target="_blank" rel="noopener noreferrer" class="block link-underline text-white">
              www.icesinternational.com
            </a>
            <a href="https://www.icesacademy.com" target="_blank" rel="noopener noreferrer" class="block link-underline text-white">
              www.icesacademy.com
            </a>
          </div>
        </div>
      </div>

      <!-- Offices -->
      <div class="mt-12 pt-12 border-t border-white/10 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        <div v-for="office in offices" :key="office.country">
          <div class="flex items-center gap-2 flex-wrap">
            <h4 class="font-display text-sm font-semibold uppercase tracking-widest text-emerald">
              ICES {{ office.country }}
            </h4>
            <span
              v-if="office.head"
              class="text-[10px] font-semibold uppercase tracking-wider text-mint bg-mint/10 border border-mint/20 rounded px-1.5 py-0.5"
            >
              Head office
            </span>
          </div>
          <div class="mt-5 space-y-1.5 text-sm text-neutral-content/80">
            <p>{{ office.address }}</p>
            <p>{{ office.city }}</p>
            <p v-for="phone in office.phones" :key="phone">{{ phone }}</p>
          </div>
        </div>
      </div>

      <div
        class="mt-14 pt-8 border-t border-white/10 text-sm text-neutral-content/60"
      >
        Copyright © {{ new Date().getFullYear() }} ICES International Sarl — All
        rights reserved
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup>
const offices = [
  {
    country: "Cameroon",
    address: "Rue Ceper",
    city: "Yaoundé, Cameroon",
    phones: ["(+237) 621 231 978", "(+237) 692 623 486"],
    head: true,
  },
  {
    country: "Gabon",
    address: "Akanda Sherko",
    city: "Libreville, Gabon",
    phones: ["(+241) 062 978 080", "(+241) 077 495 569"],
  },
  {
    country: "DRC",
    address: "Silikin Village",
    city: "Kinshasa, DRC",
    phones: ["(+243) 837 742 500", "(+243) 812 679 046"],
  },
];

const socials = [
  {
    label: "Twitter",
    href: "#",
    path: "M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z",
  },
  {
    label: "YouTube",
    href: "#",
    path: "M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z",
  },
  {
    label: "Facebook",
    href: "#",
    path: "M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z",
  },
];
</script>
