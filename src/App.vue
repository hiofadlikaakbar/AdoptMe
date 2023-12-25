<template>
  <section
    class="bg-gradient-to-b from-linearBlue/40 via-white pb-10 to-linearBlue/40"
  >
    <Header></Header>
    <Hero :hero-images="heroImages"></Hero>
  </section>
  <section>
    <Mission :about-image="aboutImage"></Mission>

    <PetList :pet-images="petImages"></PetList>

    <Sponsors :sponsor-details="sponsorDetails"></Sponsors>
  </section>
  <section
    class="bg-gradient-to-b from-linearBlue/40 via-white to-linearBlue/40"
  >
    <Accordion></Accordion>
    <Footer></Footer>
  </section>
</template>

<script setup>
import Header from "./components/HeaderPage.vue";
import Hero from "./components/HeroPage.vue";
import Mission from "./components/MissionPage.vue";
import PetList from "./components/PetList.vue";
import dogscats from "./assets/three pets.png";
import Footer from "./components/Footer.vue";
import Accordion from "./components/Accordion.vue";
import Sponsors from "./components/SponsorPage.vue";
import sponsorImg from "./assets/image 15.jpg";
import heroImage from "./assets/adopt hero.png";
import logo1 from "./assets/logo1.svg";
import logo2 from "./assets/logo2.svg";
import logo3 from "./assets/logo3.svg";
import logo4 from "./assets/logo4.svg";
import cat1 from "./assets/cat1.jpg";
import cat2 from "./assets/cat2.jpg";
import cat3 from "./assets/cat3.jpg";
import cat4 from "./assets/cat4.jpg";
import dog1 from "./assets/dog1.jpg";
import dog2 from "./assets/dog2.jpg";
import dog3 from "./assets/dog4.jpg";
import dog4 from "./assets/dog5.jpg";
const heroImages = [
  {
    src: heroImage,
    alt: "hero image",
  },
  {
    src: logo1,
    alt: "logo 1",
  },
  {
    src: logo2,
    alt: "logo 2",
  },
  {
    src: logo3,
    alt: "logo 3",
  },
  {
    src: logo4,
    alt: "logo 4",
  },
];
const aboutImage = [
  {
    src: dogscats,
    alt: "dogscats image",
    titleHeader: "OUR MISSION FOR PET",
    title: " Let's Choose and Adopt your New Lovely Pet",
    desc: "You need to see some pets in Adoptme. We have the friend that's you need to have. We also have the equipment you need to take care of it.",
    communityHeader: "ADOPTME COMMUNITY",
    communityTitle: "Connect with adoptme across the country",
    communityDesc:
      "AdoptMe Community Uniting hearts, fostering bonds. Pet adoption advocates, diverse family, shared joy. Rescuing lives, creating smiles, caring network. Join us, embrace the joy of adoption!",
    countOne: 500,
    countOneDetail: "Volunteers",
    countTwo: 2500,
    countTwoDetail: "Dogs Rescues",
    countThree: 3000,
    countThreeDetail: "Cats Rescues",
  },
];
const petImages = [
  {
    src: cat1,
    alt: "cat",
    name: "Sumbul",
    old: "1 Years old",
    waiting: "21 Days Waiting",
  },
  {
    src: cat2,
    alt: "cat",
    name: "Ed Sheeran Jr",
    old: "2 Months old",
    waiting: "15 Days Waiting",
  },
  {
    src: dog4,
    alt: "dog",
    name: "Rusdi",
    old: "3 Years old",
    waiting: "10 Days Waiting",
  },
  {
    src: dog1,
    alt: "dog",
    name: "Faiz",
    old: "1.5 Years old",
    waiting: "7 Days Waiting",
  },
  {
    src: cat3,
    alt: "cat",
    name: "Dimas",
    old: "1 Months old",
    waiting: "5 Days Waiting",
  },
  {
    src: cat4,
    alt: "cat",
    name: "Farel",
    old: "6 Months old",
    waiting: "3 Days Waiting",
  },

  {
    src: dog2,
    alt: "dog",
    name: "Rehan",
    old: "3 Years old",
    waiting: "30 Days Waiting",
  },
  {
    src: dog3,
    alt: "dog",
    name: "Shelby",
    old: "2 Years old",
    waiting: "24 Days Waiting",
  },
];
const sponsorDetails = [
  {
    src: sponsorImg,
    alt: "sponsor img",
    titleHead: "STORIES WITH PET",
    title: "Sponsoring your pet before adopt",
    desc: "Your contributions mean a lot to the pets at Adopt Me. Your support creates hope and well-being for them all",
    button: "Sponsor now",
  },
];
</script>
