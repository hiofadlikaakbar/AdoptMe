<template>
  <div id="pet-lists">
    <div class="container mx-auto px-5 lg:px-8 pb-10">
      <div class="mb-7" id="petlist-title">
        <h5
          class="text-lightBlue tracking-wider mb-3 md:text-base lg:text-lg font-semibold text-sm font-Sawa"
        >
          ADOPTION PET
        </h5>
        <h1
          class="text-secondBlack text-2xl font-semibold md:text-3xl leading-normal lg:leading-normal lg:max-w-md lg:text-4xl font-Inter mb-7"
        >
          Adopt the pet that has waited too long
        </h1>
        <p
          class="text-secondGray font-Sawa text-base md:max-w-lg lg:text-xl md:text-lg mb-10"
        >
          What are you waiting for lets adopt some new softly friends in
          adoptme, they are waiting for you too!
        </p>
      </div>
      <div>
        <div
          id="petlist-filter"
          class="grid grid-cols-3 items-center max-w-sm ml-auto mb-16"
        >
          <div
            v-for="(category, index) in ['CATS', 'DOGS', 'ALL']"
            :key="index"
            @click="handleCategoryClick(category)"
            :class="{
              'border-[1px] cursor-pointer border-paleBlue/75 hover:bg-paleBlue text-paleBlue duration-200 ease-in-out group py-2':
                selectedCategory !== category,
              'border-[1px] cursor-pointer bg-paleBlue text-white duration-200 ease-in-out group py-2':
                selectedCategory === category,
            }"
          >
            <p
              class="text-base font-Inter font-medium text-center group-hover:text-white duration-200 ease-in-out"
            >
              {{ category }}
            </p>
          </div>
        </div>
        <div
          v-auto-animate="{ duration: 600 }"
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 items-center"
        >
          <div v-for="(pet, index) in filteredPetImages" :key="index">
            <div class="relative group" id="petlist-img">
              <img
                :src="pet.src"
                :alt="pet.alt"
                class="mb-4 mx-auto w-full rounded-lg"
              />
              <div
                class="absolute w-full h-full bg-gradient-to-b text-center group-hover:to-white/80 from-white/0 to-black/50 top-0"
              >
                <button
                  @click="adoptPet"
                  class="px-14 text-base md:text-xl lg:text-base xl:text-xl lg:px-8 lg:mt-28 xl:mt-40 py-4 mt-44 md:mt-52 mb-20 xs:mb-28 lg:mb-12 xl:mb-24 bg-paleBlue opacity-0 group-hover:opacity-100 font-Sawa text-white rounded inline-block transition duration-300 ease-in-out hover:bg-slate-500"
                >
                  Adopt now
                </button>
                <h1
                  class="text-2xl md:text-3xl font-Sawa text-white font-medium lg:text-xl group-hover:text-secondBlack duration-300 ease-in-out text-center"
                >
                  {{ pet.waiting }}
                </h1>
              </div>
            </div>
            <div id="petlist-detail">
              <h1
                class="text-2xl md:text-3xl lg:text-2xl font-Inter mb-1 font-semibold text-center text-secondBlack"
              >
                {{ pet.name }}
              </h1>
              <p
                class="text-lg md:text-xl lg:text-lg font-Sawa font-semibold text-center"
              >
                {{ pet.old }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, computed, onMounted } from "vue";
import gsap from "gsap";
import thinking from "../assets/thinking.gif";
import good from "../assets/thumbs-up-cat.gif";
import sad from "../assets/sad cats.jpg";
const props = defineProps({
  petImages: {
    type: Array,
    required: true,
  },
});

onMounted(() => {
  gsap.from("#petlist-title", {
    opacity: 0,
    y: 120,
    ease: "slow",
    scrollTrigger: {
      trigger: "#petlist-title",
      once: true,
      start: "top 85%",
      scrub: 1,
      end: "+=180",
    },
  });
  gsap.from("#petlist-filter", {
    opacity: 0,
    x: 120,
    duration: 1,
    ease: "slow",
    scrollTrigger: {
      trigger: "#petlist-filter",
      once: true,
      start: "top 85%",
      scrub: 1,
      end: "+=180",
    },
  });
  gsap.from("#petlist-img", {
    opacity: 0,
    x: 120,
    duration: 1,
    ease: "slow",
    scrollTrigger: {
      trigger: "#petlist-img",
      once: true,
      start: "top center",
      scrub: 1,
      end: "+=200",
    },
  });
  gsap.from("#petlist-detail", {
    opacity: 0,
    x: 120,
    duration: 1,
    ease: "slow",
    scrollTrigger: {
      trigger: "#petlist-detail",
      once: true,
      start: "top 85%",
      scrub: 1,
      end: "+=150",
    },
  });
});

const adoptPet = () => {
  Swal.fire({
    title: "Are you sure?",
    text: "You are about to adopt this pet!",
    imageUrl: thinking,
    showCancelButton: true,
    confirmButtonColor: "#06b6d4",
    imageWidth: 400,
    imageHeight: 250,
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, adopt it!",
    cancelButtonText: "No, cancel!",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Success!",
        text: "You have adopted the pet",
        imageUrl: good,
        confirmButtonText: "Next",
        confirmButtonColor: "#304057",
        color: "#304057",
        imageWidth: 230,
        imageHeight: 230,
        imageAlt: "Cool Image",
      });
    } else {
      Swal.fire({
        title: "Cancelled!",
        text: "You did not adopt the pet",
        imageUrl: sad,
        confirmButtonText: "Next",
        confirmButtonColor: "#304057",
        color: "#304057",
        imageWidth: 250,
        imageHeight: 250,
        imageAlt: "Sad Image",
      });
    }
  });
};

const selectedCategory = ref("ALL");
const filteredPetImages = computed(() => {
  return props.petImages.filter((pet) => {
    if (selectedCategory.value === "ALL") {
      return true;
    } else if (selectedCategory.value === "CATS") {
      return pet.alt && pet.alt.toLowerCase().includes("cat");
    } else if (selectedCategory.value === "DOGS") {
      return pet.alt && pet.alt.toLowerCase().includes("dog");
    }
  });
});

const handleCategoryClick = (category) => {
  selectedCategory.value = category;
};
</script>
