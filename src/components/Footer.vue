<template>
  <div class="border-t-[1px] border-secondGray/50 pt-5 pb-10">
    <div
      id="footer"
      class="flex-col container mx-auto px-5 lg:px-8 md:flex-row md:flex items-center justify-between pt-5"
    >
      <h3
        class="text-base text-secondBlack font-Inter md:text-lg mb-5 md:mb-0 font-semibold"
      >
        <i class="fa-regular fa-copyright text-secondBlack text-xl"></i>
        Copyright 2023. Adoptme
      </h3>
      <h3
        class="text-base text-secondBlack font-Inter md:text-lg font-semibold"
      >
        <i
          class="fa-brands fa-whatsapp text-secondBlack font-semibold text-xl"
        ></i>
        (62)82134063564 |
        <i
          class="fa-regular fa-envelope text-xl font-semibold text-secondBlack"
        ></i>
        adoptme@gmail.com
      </h3>
    </div>
  </div>
</template>

<script setup>
import gsap from "gsap";
import { onMounted } from "vue";
onMounted(() => {
  gsap.from("#footer", {
    opacity: 0,
    x: -120,
    duration: 1,
    ease: "slow",
    scrollTrigger: {
      trigger: "#footer",
      once: true,
      scrub: 1,
      end: "+=70",
    },
  });
});
</script>
