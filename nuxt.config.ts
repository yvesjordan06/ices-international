import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],
  app: {
    head: {
      link: [
        { rel: "icon", type: "image/png", href: "/images/ices-emblem.png" },
        {
          rel: "apple-touch-icon",
          href: "/images/ices-emblem.png",
        },
      ],
      htmlAttrs: { lang: "en" },
    },
  },
});
