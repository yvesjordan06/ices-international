<template>
  <div class="min-h-screen">
    <ContactHeader />
    <NavBar class="hidden" />

    <slot />
    <Footer class="mt-auto" />
  </div>
</template>
<script lang="ts" setup></script>
