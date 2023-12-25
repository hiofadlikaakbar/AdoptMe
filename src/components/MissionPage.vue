<template>
  <div class="container mx-auto px-5 lg:px-8 pt-16 pb-24">
    <div
      class="flex-col lg:flex lg:flex-row gap-12 justify-between items-center mb-14 lg:mb-28"
    >
      <div class="mb-5 lg:mb-0 lg:w-1/2" id="mission-title">
        <h5
          class="text-lightBlue tracking-wider mb-3 md:text-base lg:text-lg font-semibold text-sm font-Sawa"
        >
          {{ aboutImage[0].titleHeader }}
        </h5>
        <h1
          class="text-secondBlack text-2xl font-semibold md:text-3xl lg:text-4xl font-Inter"
        >
          {{ aboutImage[0].title }}
        </h1>
      </div>
      <div class="lg:w-1/2" id="mission-paragraph">
        <p
          class="text-secondGray font-Sawa text-base md:max-w-lg md:text-lg lg:text-xl"
        >
          {{ aboutImage[0].desc }}
        </p>
      </div>
    </div>
    <div
      class="flex-col lg:flex lg:flex-row gap-12 justify-between items-center"
    >
      <div class="mb-8 lg:mb-0 lg:w-1/2" id="mission-img">
        <img
          class="mx-auto"
          :src="aboutImage[0].src"
          :alt="aboutImage[0].alt"
        />
      </div>
      <div class="lg:w-1/2" id="mission-community">
        <div>
          <h5
            class="text-lightBlue tracking-wider mb-3 md:text-base lg:text-lg font-semibold text-sm font-Sawa"
          >
            {{ aboutImage[0].communityHeader }}
          </h5>
          <h1
            class="text-secondBlack text-2xl font-semibold md:text-3xl lg:text-4xl font-Inter mb-5"
          >
            {{ aboutImage[0].communityTitle }}
          </h1>
          <p
            class="text-secondGray font-Sawa text-base md:max-w-lg lg:text-xl md:text-lg mb-8"
          >
            {{ aboutImage[0].communityDesc }}
          </p>
        </div>
        <div
          class="grid grid-cols-1 items-center md:grid-cols-3 md:max-w-sm font-Sawa gap-10"
          id="stats"
        >
          <div class="lg:text-center">
            <h3
              id="count"
              class="text-paleBlue text-2xl lg:text-3xl mb-3 font-bold"
            >
              {{ aboutImage[0].countOne }}
            </h3>
            <p class="text-secondGray text-base lg:text-lg">
              {{ aboutImage[0].countOneDetail }}
            </p>
          </div>
          <div class="lg:text-center">
            <h3
              id="count2"
              class="text-paleBlue text-2xl lg:text-3xl mb-3 font-bold"
            >
              {{ aboutImage[0].countTwo }}
            </h3>
            <p class="text-secondGray text-base lg:text-lg whitespace-nowrap">
              {{ aboutImage[0].countTwoDetail }}
            </p>
          </div>
          <div class="lg:text-center">
            <h3
              id="count3"
              class="text-paleBlue text-2xl mb-3 lg:text-3xl font-bold"
            >
              {{ aboutImage[0].countThree }}
            </h3>
            <p class="text-secondGray text-base lg:text-lg whitespace-nowrap">
              {{ aboutImage[0].countThreeDetail }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
defineProps({
  aboutImage: {
    type: Array,
    required: true,
  },
});
onMounted(() => {
  gsap.from("#mission-title", {
    opacity: 0,
    x: -120,
    ease: "slow",
    duration: 1,
    scrollTrigger: {
      trigger: "#mission-title",
      once: true,
      scrub: 1,
      start: "top center",
      end: "+=100",
    },
  });
  gsap.from("#mission-paragraph", {
    opacity: 0,
    x: 120,
    ease: "slow",
    duration: 1,
    scrollTrigger: {
      trigger: "#mission-paragraph",
      once: true,
      scrub: 1,
      start: "top center",
      end: "+=100",
    },
  });
  gsap.from("#mission-img", {
    opacity: 0,
    y: 120,
    ease: "slow",
    duration: 1,
    scrollTrigger: {
      trigger: "#mission-img",
      once: true,
      start: "top center",
      end: "+=100",
      scrub: 1,
    },
  });
  gsap.from("#mission-community", {
    opacity: 0,
    x: -120,
    ease: "slow",

    duration: 1,
    scrollTrigger: {
      trigger: "#mission-img",
      once: true,

      start: "top center",
      end: "+=100",
      scrub: 1,
    },
  });
  gsap.from("#stats", {
    opacity: 0,
    x: -120,
    ease: "slow",

    duration: 1,
    scrollTrigger: {
      trigger: "#mission-img",
      once: true,
      start: "top center",
      end: "+=100",

      scrub: 1,
    },
  });
  const createCountAnimation = (id) => {
    gsap.from(id, {
      innerText: 0,
      duration: 7,
      snap: {
        innerText: 1,
      },
      scrollTrigger: {
        trigger: "#stats",
        once: true,
        end: "+=100",
      },
    });
  };
  createCountAnimation("#count");
  createCountAnimation("#count2");
  createCountAnimation("#count3");
});
</script>
