<template>
  <div class="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <div
      v-for="service of services"
      :key="service.title"
      class="card-elev reveal p-7 flex flex-col text-left"
    >
      <div class="h-36 rounded-xl bg-mist flex items-center justify-center p-4">
        <img
          :src="service.image"
          :alt="service.title"
          class="max-h-full w-auto object-contain"
        />
      </div>
      <h4 class="mt-6 font-display text-lg font-semibold text-ink">
        {{ service.title }}
      </h4>
      <p class="mt-3 text-[15px] leading-relaxed text-slate2">
        {{ service.description }}
      </p>
    </div>
  </div>
</template>
<script lang="ts" setup>
const services: { image: string; title: string; description: string }[] = [
  {
    image: "/images/server.png",
    title: "Server Solutions",
    description:
      "We provide the most responsive and functional IT design for companies and businesses worldwide.",
  },

  {
    image: "/images/networking.png",
    title: "Managed Network Solution",
    description:
      "Keep you business connected and easily manage the day to day operations of your network with secure, reliable and fast managed network solutions",
  },
  {
    image: "/images/storage.png",
    title: "Storage and Data Management",
    description:
      "Back up your database, store in a safe and secure place while still maintaining its accessibility.",
  },
  {
    image: "/images/security.png",
    title: "Security",
    description:
      "Protect the integrity and security of your company's electronic information, functioning and databases from malicious sources.",
  },
  {
    image: "/images/virtualization.png",
    title: "Virtualization and Cloud",
    description:
      "Simplify data center management, reduce capital and operating costs, minimize or eliminate downtime, increase IT productivity, efficiency, agility and responsiveness with virtualization",
  },
  {
    image: "/images/business-continuity.png",
    title: "Business Continuity",
    description:
      "Ensure your company's reputation, operations, and data won't be impacted by system failure, security breach, natural disaster, or human error.",
  },

  {
    image: "/images/power.png",
    title: "Power",
    description:
      "Harness the benefits of power distribution systems to improve daily operations",
  },

  {
    image: "/images/collaboration.png",
    title: "Collaboration",
    description:
      "Bring all your communications, messaging, collaboration, audio-conferencing, and enterprise social media tools together in one package that works in your environment without losing sight of what your users need.",
  },

  {
    image: "/images/workforce.png",
    title: "Workforce",
    description:
      "Manage and handle employee time and attendance, scheduling, workforce planning and optimization.",
  },
];
</script>
