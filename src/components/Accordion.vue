<template>
  <div class="container mx-auto px-5 lg:px-8 pt-16 pb-24">
    <div class="text-center" id="accordion-title">
      <h5
        class="text-lightBlue tracking-wider mb-3 md:text-base lg:text-lg font-semibold text-sm font-Sawa"
      >
        FORUM ANSWER AND QUESTION
      </h5>
      <h1
        class="text-secondBlack text-2xl font-semibold md:text-3xl xl:max-w-md mx-auto xl:leading-relaxed lg:text-4xl font-Inter mb-5"
      >
        Adopt the pet that has waited too long
      </h1>
      <p
        class="text-secondGray font-Sawa text-base md:max-w-md mx-auto lg:text-xl md:text-lg mb-8"
      >
        What are you waiting for? they need your help for their better lives!
      </p>
    </div>
    <div
      class="grid grid-cols-1 max-w-4xl cursor-pointer mx-auto"
      id="accordions"
    >
      <div v-for="(item, index) in accordionItems" :key="index">
        <div
          class="p-5 border-[1px]"
          :class="{
            'border-paleBlue': item.show,
            'border-secondGray/40': !item.show,
          }"
          v-auto-animate
          @click="toggleAccordion(index)"
        >
          <div
            class="flex items-center justify-between"
            :class="{ 'mb-5': item.show, 'mb-0': !item.show }"
          >
            <div class="flex items-center gap-3">
              <span class="text-base md:text-lg text-paleBlue">&bull;</span>
              <p
                class="text-paleBlue md:text-lg text-base font-semibold font-Inter"
              >
                {{ item.title }}
              </p>
            </div>
            <i
              class="fa-solid"
              :class="{
                'fa-chevron-down text-paleBlue': !item.show,
                'fa-chevron-up text-secondGray/75': item.show,
              }"
            ></i>
          </div>
          <p
            class="text-base md:text-lg text-paleBlue font-Sawa"
            v-if="item.show"
          >
            {{ item.content }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import gsap from "gsap";
const accordionItems = ref([
  {
    title: "How to adopt a pet?",
    content:
      "Create a user account in AdoptMe. Once finished, you can choose which animal you want to adopt in the adopt list.",
    show: false,
  },
  {
    title: "How to adopt a cats?",
    content:
      "You just have to choose the cat you like and want to adopt from the pet list.",
    show: false,
  },
  {
    title: "How to adopt a dogs?",
    content:
      "You just have to choose the dog you like and want to adopt from the pet list.",
    show: false,
  },
  {
    title: "How much does it cost to adopt an animal?",
    content: "It depends on the type and age of the animal.",
    show: false,
  },
  {
    title: "Does AdoptMe sell animals other than cats and dogs?",
    content: "No, AdoptMe does not sell animals other than cats and dogs.",
    show: false,
  },
  {
    title: "Is there a special animal clinic at Adopt Me?",
    content:
      "Yes, there is a special clinic to handle the care of cats and dogs at AdoptMe.",
    show: false,
  },
]);
const toggleAccordion = (index) => {
  accordionItems.value.forEach((item, i) => {
    item.show = i === index ? !item.show : false;
  });
};
onMounted(() => {
  gsap.from("#accordion-title", {
    opacity: 0,
    y: 120,
    duration: 1,
    ease: "slow",
    scrollTrigger: {
      trigger: "#accordion-title",
      once: true,
      start: "top center",
      scrub: 1,
      end: "+=100",
    },
  });
  gsap.from("#accordions", {
    opacity: 0,
    y: 120,
    duration: 1,
    ease: "slow",
    scrollTrigger: {
      trigger: "#accordions",
      once: true,
      start: "top center",
      scrub: 1,
      end: "+=160",
    },
  });
});
</script>
