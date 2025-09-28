<template>
  <div class="w-full">
    <h3
      class="hidden mb-8 text-3xl font-bold tracking-wide text-center text-primary"
    >
      Trainings & Certifications
    </h3>

    <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      <div
        v-for="(training, index) in trainings"
        :key="index"
        class="relative overflow-hidden transition rounded-lg shadow-lg bg-base-100 hover:shadow-xl group"
        @mouseenter="pauseAutoSlide(index)"
        @mouseleave="resumeAutoSlide(index)"
        @click="openLightbox(index)"
      >
        <!-- Slider for multiple images -->
        <div class="relative w-full h-56 overflow-hidden">
          <img
            :src="training.images[currentImage[index]]"
            class="object-cover w-full h-full transition-all duration-300 cursor-pointer"
          />

          <!-- Show arrows only if multiple images and hovered -->
          <template v-if="training.images.length > 1">
            <button
              class="absolute px-2 py-1 text-white transition -translate-y-1/2 rounded-full opacity-0 left-2 top-1/2 bg-black/50 group-hover:opacity-100"
              @click.stop="prevImage(index)"
            >
              ‹
            </button>
            <button
              class="absolute px-2 py-1 text-white transition -translate-y-1/2 rounded-full opacity-0 right-2 top-1/2 bg-black/50 group-hover:opacity-100"
              @click.stop="nextImage(index, training.images.length)"
            >
              ›
            </button>
          </template>
        </div>

        <div class="p-4">
          <p class="text-sm font-semibold uppercase text-primary">
            {{ training.institute }}
          </p>
          <h4 class="mt-2 text-lg font-bold text-base-content">
            {{ training.title }}
          </h4>
        </div>
      </div>
    </div>

    <!-- Lightbox viewer -->
    <div
      v-if="lightboxOpen"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
    >
      <button
        class="absolute text-3xl text-white top-4 right-4"
        @click="closeLightbox"
      >
        ✕
      </button>

      <div class="absolute inset-0" @click="closeLightbox"></div>
      <div class="relative w-full max-w-4xl">
        <img
          :src="allImages[currentLightboxImage]"
          class="max-h-[80vh] mx-auto object-contain"
        />
        <button
          class="absolute px-3 py-2 text-white -translate-y-1/2 rounded-full left-4 top-1/2 bg-black/50"
          @click="prevLightbox"
        >
          ‹
        </button>
        <button
          class="absolute px-3 py-2 text-white -translate-y-1/2 rounded-full right-4 top-1/2 bg-black/50"
          @click="nextLightbox"
        >
          ›
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { trainings as trainingData } from "~~/data/training";

const trainings = ref(trainingData);

const currentImage = ref<number[]>(trainings.value.map(() => 0));
const intervals: NodeJS.Timer[] = [];

const autoSlide = (idx: number) => {
  if (trainings.value[idx].images.length > 1) {
    intervals[idx] = setInterval(() => {
      currentImage.value[idx] =
        (currentImage.value[idx] + 1) % trainings.value[idx].images.length;
    }, 3000);
  }
};

const pauseAutoSlide = (idx: number) => {
  if (intervals[idx]) clearInterval(intervals[idx]);
};

const resumeAutoSlide = (idx: number) => {
  autoSlide(idx);
};

const prevImage = (idx: number) => {
  const total = trainings.value[idx].images.length;
  currentImage.value[idx] = (currentImage.value[idx] - 1 + total) % total;
};
const nextImage = (idx: number, total: number) => {
  currentImage.value[idx] = (currentImage.value[idx] + 1) % total;
};

onMounted(() => {
  trainings.value.forEach((_, idx) => autoSlide(idx));
});
onBeforeUnmount(() => {
  intervals.forEach((i) => clearInterval(i));
});

// Lightbox logic
const lightboxOpen = ref(false);
const allImages = ref<string[]>([]);
const currentLightboxImage = ref(0);

const openLightbox = (idx: number) => {
  // Flatten all images from all trainings
  allImages.value = trainings.value.flatMap((t) => t.images);
  // Compute index in the flattened array
  const offset = trainings.value
    .slice(0, idx)
    .reduce((acc, t) => acc + t.images.length, 0);
  currentLightboxImage.value = offset + currentImage.value[idx];
  lightboxOpen.value = true;
};

const closeLightbox = () => {
  lightboxOpen.value = false;
};

const prevLightbox = () => {
  currentLightboxImage.value =
    (currentLightboxImage.value - 1 + allImages.value.length) %
    allImages.value.length;
};

const nextLightbox = () => {
  currentLightboxImage.value =
    (currentLightboxImage.value + 1) % allImages.value.length;
};
</script>
