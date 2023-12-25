<template>
  <div class="container mx-auto px-5 lg:px-8">
    <div class="flex-col lg:flex lg:flex-row justify-between items-center">
      <div class="lg:w-[65%] lg:order-2" id="img-hero">
        <img
          :src="heroImages[0].src"
          :alt="heroImages[0].alt"
          class="mx-auto mb-10 md:scale-95"
        />
      </div>
      <div class="lg:w-1/2 xl:w-[46%] lg:order-1" id="img-text">
        <h1
          id="hero-title"
          class="font-Inter text-2xl tracking-wide md:max-w-[40rem] xl:max-w-2xl xl:leading-snug xl:text-5xl lg:max-w-sm lg:leading-normal leading-relaxed md:text-4xl text-paleBlue font-semibold mb-4"
        >
          Let's Choose and
          <i
            class="fa-solid fa-paw text-4xl xl:text-5xl rotate-45 text-paleBlue ml-1"
          ></i>
          Adopt your new Pet
        </h1>
        <p
          id="hero-desc"
          class="font-sawa text-secondGray text-base max-w-lg lg:max-w-[22rem] xl:text-xl xl:max-w-sm xl:leading-relaxed leading-loose md:leading-relaxed md:text-lg mb-6"
        ></p>
        <div class="flex gap-4 mb-7" id="button">
          <a
            href="#"
            class="px-4 xs:px-6 md:px-8 py-3 bg-paleBlue font-Sawa block text-white rounded transition duration-300 ease-in-out hover:bg-slate-500"
            >Adopt now</a
          >
          <a
            href="#"
            class="px-4 xs:px-6 md:px-8 py-3 text-paleBlue font-Sawa block"
            >Donate for food</a
          >
        </div>
        <div>
          <p
            class="uppercase font-Sawa font-semibold text-paleBlue text-sm md:text-base mb-3"
            id="paragraph-hero"
          >
            supported by:
          </p>
          <div class="grid grid-cols-4 max-w-sm" id="hero-logo">
            <img
              v-for="(image, index) in heroImages.slice(1)"
              :key="index"
              :src="image.src"
              :alt="image.alt"
              class="scale-75 md:scale-90"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import gsap from "gsap";
import TextPlugin from "gsap/TextPlugin";
gsap.registerPlugin(TextPlugin);
import { onMounted } from "vue";
defineProps({
  heroImages: {
    type: Array,
    required: true,
  },
});

onMounted(() => {
  gsap.from("#img-hero", {
    duration: 2,
    delay: 1.5,
    opacity: 0,
    x: 100,
    ease: "back.out(3)",
  });

  gsap.from("#hero-title", {
    duration: 2,
    delay: 2,
    opacity: 0,
    y: -160,
    ease: "slow",
  });

  gsap.to("#hero-desc", {
    duration: 3.5,
    ease: "power1.in",
    delay: 2.5,
    text: "Adopt a pet, give them the best treatment, and you will feel really happy of friendship with your pet.",
  });

  gsap.from("#button", {
    delay: 3,
    duration: 2,
    ease: "power3",
    opacity: 0,
    x: -120,
  });

  gsap.from("#paragraph-hero", {
    duration: 2,
    ease: "power2",
    delay: 3.5,
    opacity: 0,
    x: -120,
  });

  gsap.from("#hero-logo", {
    duration: 2,
    ease: "power2",
    delay: 4,
    opacity: 0,
    x: -120,
  });
});
</script>
