<template>
  <div class="w-full overflow-hidden">
    <!-- Hero -->
    <section class="relative w-full hero-mesh overflow-hidden">
      <div class="absolute inset-0 grid-lines pointer-events-none"></div>
      <div class="relative z-10">
        <div class="container mx-auto px-5 pt-32 pb-20 lg:pt-40 lg:pb-24 text-center">
          <span class="eyebrow eyebrow--center text-mint">About ICES</span>
          <h1 class="mt-5 display-title text-4xl sm:text-5xl lg:text-6xl text-white">
            Your trusted technology &amp; learning partner
          </h1>
          <p class="mt-6 max-w-2xl mx-auto text-lg text-white/70">
            Empowering professionals and organizations across Africa through
            reliable IT solutions and internationally recognized certifications.
          </p>
        </div>
      </div>
    </section>

    <!-- Body -->
    <section class="w-full bg-white py-20 lg:py-28">
      <div class="container mx-auto px-5 grid lg:grid-cols-2 gap-16">
        <!-- Story -->
        <div class="reveal">
          <span class="eyebrow">Who we are</span>
          <h2 class="mt-5 display-title text-3xl sm:text-4xl text-ink">
            Bridging the skills gap since 2003
          </h2>
          <div class="mt-6 space-y-5 text-lg leading-8 text-slate2">
            <p>
              We are a passionate team of industry experts dedicated to
              empowering professionals and organizations through high-quality
              training programs and internationally recognized certifications.
            </p>
            <p>
              Whether you're looking to advance your career, upskill your team,
              or pivot to a new field, we provide the guidance, resources and
              support you need to reach your professional goals and earn
              industry-valued certifications.
            </p>
          </div>

          <div class="mt-10">
            <p class="text-sm font-display font-semibold uppercase tracking-widest text-emerald">
              Follow us
            </p>
            <div class="mt-4 flex gap-3">
              <a
                v-for="s in socials"
                :key="s.label"
                :href="s.href"
                :aria-label="s.label"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center justify-center w-11 h-11 rounded-lg bg-mist text-navy hover:bg-emerald hover:text-white transition-colors"
              >
                <svg viewBox="0 0 24 24" class="w-5 h-5 fill-current">
                  <path :d="s.path" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <!-- Contact card -->
        <div class="reveal">
          <div class="card-elev p-8 sm:p-10">
            <span class="eyebrow">Get in touch</span>
            <h3 class="mt-5 display-title text-2xl text-ink">Talk to our team</h3>

            <a
              href="mailto:info@icesinternational.com"
              class="mt-6 flex items-center gap-3 text-navy font-medium hover:text-emerald transition-colors"
            >
              <span class="flex items-center justify-center w-10 h-10 rounded-lg bg-emerald/10 text-emerald shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M3 6.5A1.5 1.5 0 014.5 5h15A1.5 1.5 0 0121 6.5v11a1.5 1.5 0 01-1.5 1.5h-15A1.5 1.5 0 013 17.5v-11z" stroke="currentColor" stroke-width="1.6"/>
                  <path d="M4 7l8 6 8-6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
                </svg>
              </span>
              info@icesinternational.com
            </a>

            <div class="mt-8 grid sm:grid-cols-2 gap-8">
              <div>
                <p class="font-display font-semibold text-ink">ICES Cameroon</p>
                <div class="mt-2 space-y-1 text-sm text-slate2">
                  <p>Bata Nlongkak BP 11102</p>
                  <p>Yaoundé, Cameroon</p>
                  <p>+237 621231978</p>
                  <p>+237 677510049</p>
                  <p>France: +33 745518545</p>
                </div>
              </div>
              <div>
                <p class="font-display font-semibold text-ink">ICES DRC</p>
                <div class="mt-2 space-y-1 text-sm text-slate2">
                  <p>41 Avenue Tombalbaye</p>
                  <p>Quartier Fatima, La Gombe</p>
                  <p>Kinshasa, DRC</p>
                  <p>+243 812679046</p>
                  <p>+243 850564619</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
useHead({
  title: "About & Contact - ICES International",
  meta: [
    {
      name: "description",
      content:
        "ICES International — your trusted technology and learning partner across Cameroon and the DRC since 2003. Get in touch with our team.",
    },
    { property: "og:title", content: "About & Contact - ICES International" },
    { property: "og:type", content: "website" },
    { property: "og:image", content: "/images/ICES.png" },
    { property: "og:url", content: "https://www.icesinternational.com/about" },
    {
      property: "og:description",
      content:
        "Your trusted technology and learning partner across Africa since 2003.",
    },
  ],
});

const socials = [
  {
    label: "Facebook",
    href: "https://facebook.com/ices.sarl",
    path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
  },
  {
    label: "Instagram",
    href: "https://instagram.com/ices.internaltional",
    path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/company/ices-international",
    path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
  },
  {
    label: "X (Twitter)",
    href: "https://twitter.com/ices_sarl",
    path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
  },
];
</script>
