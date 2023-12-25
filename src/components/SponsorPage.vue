<template>
  <div class="container mx-auto px-5 lg:px-8 pt-16 pb-24">
    <div
      class="flex-col lg:flex lg:flex-row items-center justify-between gap-12"
    >
      <div class="mb-8 lg:w-1/2 md:mb-0" id="sponsor-img">
        <img :src="sponsorDetails[0].src" :alt="sponsorDetails[0].alt" />
      </div>
      <div class="lg:w-1/2" id="sponsor-detail">
        <h5
          class="text-lightBlue tracking-wider mb-3 md:text-base lg:text-lg font-semibold text-sm font-Sawa"
        >
          {{ sponsorDetails[0].titleHead }}
        </h5>
        <h1
          class="text-secondBlack text-2xl font-semibold md:text-3xl xl:max-w-md xl:leading-relaxed lg:text-4xl font-Inter mb-5"
        >
          {{ sponsorDetails[0].title }}
        </h1>
        <p
          class="text-secondGray font-Sawa text-base md:max-w-lg lg:text-xl md:text-lg mb-8"
        >
          {{ sponsorDetails[0].desc }}
        </p>
        <a
          href="#"
          class="px-8 py-4 bg-paleBlue font-Sawa inline-block text-white rounded transition duration-300 ease-in-out hover:bg-slate-500"
          >{{ sponsorDetails[0].button }}</a
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import gsap from "gsap";
defineProps({
  sponsorDetails: {
    type: Array,
    required: true,
  },
});
onMounted(() => {
  gsap.from("#sponsor-img", {
    opacity: 0,
    x: -120,
    ease: "slow",
    duration: 1,
    scrollTrigger: {
      trigger: "#sponsor-img",
      once: true,
      start: "top center ",
      scrub: 1,
      end: "+=100",
    },
  });
  gsap.from("#sponsor-detail", {
    opacity: 0,
    x: 120,
    ease: "slow",
    duration: 1,
    scrollTrigger: {
      trigger: "#sponsor-detail",
      once: true,
      start: "top center ",
      scrub: 1,
      end: "+=100",
    },
  });
});
</script>
