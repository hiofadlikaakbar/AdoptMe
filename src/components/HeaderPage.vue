<template>
  <header class="pb-36">
    <nav
      :class="{
        'bg-linearBlue/75 ': isScrolled,
        'bg-transparent': !isScrolled,
      }"
      class="p-5 xl:px-7 w-full fixed z-50"
      id="navbar"
      style="transition: background-color 0.3s ease-in-out"
    >
      <div class="flex container justify-between mx-auto items-center">
        <div class="flex items-center gap-20 lg:gap-10 xl:gap-20">
          <div class="flex gap-2 items-center">
            <h1 class="font-Sawa font-medium text-xl text-paleBlue">AdoptMe</h1>
            <img :src="logo" alt="paw" />
          </div>
          <ul class="hidden lg:flex gap-10 xl:gap-12 lg:mt-[2px]">
            <li @click.prevent>
              <a
                href="#"
                class="text-secondGray font-medium font-Sawa duration-300 ease-in-out hover:text-paleBlue"
                >Home</a
              >
            </li>

            <li
              @click.prevent
              class="relative cursor-pointer"
              @click="toggleDropdown"
            >
              <span class="flex gap-4 items-center group">
                <a
                  href="#"
                  class="text-secondGray font-medium group-hover:text-paleBlue font-Sawa duration-300 ease-in-out"
                >
                  Adoption
                </a>
                <span>
                  <i
                    :class="{
                      'fa-chevron-up': showDropdown,
                      'fa-chevron-down': !showDropdown,
                    }"
                    class="fa-solid group-hover:text-paleBlue duration-300 ease-in-out text-secondGray"
                  ></i>
                </span>
              </span>
              <div id="dropdown" ref="dropdownRef">
                <div v-if="showDropdown" class="absolute right-0 top-5">
                  <div class="px-5 py-4 rounded-sm bg-white shadow-lg">
                    <span class="flex gap-3 group items-center mb-2">
                      <i
                        class="fa-solid fa-cat group-hover:text-slate-500 duration-200 ease-in-out text-lg text-paleBlue"
                      ></i>
                      <p
                        @click="scrollToAbout"
                        class="text-lg text-paleBlue group-hover:text-slate-500 duration-200 ease-in-out font-Sawa"
                      >
                        Cats
                      </p>
                    </span>
                    <span class="flex gap-3 group items-center">
                      <i
                        class="fa-solid fa-dog group-hover:text-slate-500 duration-200 ease-in-out text-lg text-paleBlue"
                      ></i>
                      <p
                        @click="scrollToAbout"
                        class="text-lg text-paleBlue group-hover:text-slate-500 duration-200 ease-in-out font-Sawa"
                      >
                        Dogs
                      </p>
                    </span>
                  </div>
                </div>
              </div>
            </li>

            <li @click.prevent>
              <a
                href="#"
                class="text-secondGray font-medium font-Sawa duration-300 ease-in-out hover:text-paleBlue"
                >Community</a
              >
            </li>
            <li @click.prevent>
              <a
                href="#"
                class="text-secondGray font-medium font-Sawa duration-300 ease-in-out hover:text-paleBlue"
                >Stories with pet</a
              >
            </li>
            <li @click.prevent>
              <a
                href="#"
                class="text-secondGray font-medium font-Sawa duration-300 ease-in-out hover:text-paleBlue"
                >FAQ</a
              >
            </li>
          </ul>
        </div>
        <div class="relative z-50">
          <ul class="lg:flex hidden mt-[2px] items-center gap-7 xl:gap-9">
            <div
              class="cursor-pointer active:scale-[.90] transition duration-300 ease-in-out"
            >
              <img :src="searchGlass" alt="search glass" />
            </div>
            <li
              @click.prevent
              class="active:scale-[.90] transition duration-300 ease-in-out"
            >
              <a
                href="#"
                class="font-medium block font-Sawa text-center text-paleBlue"
                >Sign in</a
              >
            </li>
            <button
              type="button"
              class="px-7 py-2 rounded-sm font-medium text-white bg-paleBlue active:scale-[.90] transition duration-300 ease-in-out hover:bg-slate-500"
            >
              Sign up
            </button>
          </ul>
          <button @click="toggleNav" class="block lg:hidden focus:outline-none">
            <img :src="burgerMenu" alt="burger" ref="burger" />
          </button>
        </div>

        <!-- mobile nav -->
        <ul
          :class="showMenu ? 'right-0 grid' : 'right-[-100%] grid opacity-0'"
          class="h-screen w-[60%] md:w-1/2 fixed duration-500 lg:hidden ease-in-out content-center space-y-8 md:space-y-12 top-0 right-0 pl-[1.19rem] xs:pl-6 bg-gradient-to-b from-linearBlue to-white md:pl-12 shadow-xl"
        >
          <li v-for="(link, index) in links" :key="index">
            <a :href="link.href" class="text-colorNav font-medium md:text-lg">{{
              link.label
            }}</a>
          </li>
          <li>
            <a
              href="#"
              class="font-medium block font-Sawa text-center text-paleBlue"
              >Sign in</a
            >
          </li>
          <li class="text-center">
            <a
              href="#"
              class="text-white bg-paleBlue rounded-sm font-Sawa md:py-3 px-7 md:px-20 xs:px-12 py-2 font-medium"
              >Sign up</a
            >
          </li>
        </ul>
        <div
          :class="showMenu ? 'left-0 opacity-100' : 'left-[-100%] opacity-0'"
          class="bg-black/60 lg:hidden md:w-1/2 left-0 z-50 duration-500 ease-in-out fixed top-0 w-[40%] h-screen"
        ></div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import burgerMenu from "../assets/burger.svg";
import closeMenu from "../assets/close.svg";
import searchGlass from "../assets/search.svg";
import { gsap } from "gsap";
import logo from "../assets/paw.svg";
import { ref, onMounted, onUnmounted } from "vue";
const burger = ref(null);
const showMenu = ref(false);
const toggleNav = () => {
  showMenu.value = !showMenu.value;
  burger.value.src = showMenu.value ? closeMenu : burgerMenu;
};

const isScrolled = ref(false);
const handleScroll = () => {
  isScrolled.value = window.scrollY > 45;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

const links = [
  { label: "Home", href: "#" },
  { label: "Community", href: "#" },
  { label: "Stories with pet", href: "#" },
  { label: "FAQ", href: "#" },
];

// animasi dropdown
const showDropdown = ref(false);
let tl;
onMounted(() => {
  // dropdown
  tl = gsap.timeline({ reversed: true });
  tl.from("#dropdown", {
    duration: 0.3,
    opacity: 0,
    y: -20,
    ease: "power3",
  });
  gsap.from("#navbar", {
    ease: "back",
    duration: 1.5,
    y: "-130",
    opacity: 0,
  });
});

const toggleDropdown = () => {
  if (tl.reversed()) {
    tl.play();
    showDropdown.value = true;
  } else {
    tl.reverse().then(() => {
      showDropdown.value = false;
    });
  }
};
const scrollToAbout = () => {
  const aboutElement = document.getElementById("pet-lists");

  if (aboutElement) {
    aboutElement.scrollIntoView({ behavior: "smooth" });
  }
};
</script>
