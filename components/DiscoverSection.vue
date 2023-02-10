<template>
  <div class="my-container">
    <div class="flex justify-between items-end mb-[60px]">
      <custom-header-and-text class="mb-0 md:max-w-[50%] lg:max-w-full">
        <template #header>Discover More NFTs</template>
        <template #text>Explore new trending NFTs</template>
      </custom-header-and-text>
      <div class="btn-black-primary-md hidden md:flex w-48">
        <img src="../assets/mini-icons/EyePurple.svg" alt="" />
        See All
      </div>
    </div>
    <div
      class="lg:flex justify-between flex md:hidden flex-col lg:flex-row mb-5 lg:mb-0"
    >
      <discover-card
        class="mb-5"
        :card="card"
        v-for="card in discover"
      ></discover-card>
    </div>
    <div class="md:flex lg:hidden hidden justify-between">
      <discover-card
        class="mb-5"
        :card="card"
        v-for="card in discover.splice(0, 2)"
      ></discover-card>
    </div>
    <div class="btn-black-primary-md w-full flex md:hidden">
      <img src="../assets/mini-icons/EyePurple.svg" alt="" />
      See All
    </div>
  </div>
</template>
<script setup>
import img1 from "../assets/discover-images/Image Placeholder.svg";
import img2 from "../assets/discover-images/Image Placeholder-1.svg";
import img3 from "../assets/discover-images/Image Placeholder-2.svg";
import avatar1 from "../assets/avatar-icons/avatar1.svg";
import avatar2 from "../assets/avatar-icons/avatar2.svg";
import avatar3 from "../assets/avatar-icons/avatar3.svg";
const discover = [
  {
    img: img1,
    header: "Distant Galaxy",
    userAvatar: avatar1,
    userName: "MoonDancer",
    price1: 1.63,
    price2: 0.33,
  },
  {
    img: img2,
    header: "Distant Galaxy",
    userAvatar: avatar2,
    userName: "MoonDancer",
    price1: 1.63,
    price2: 0.33,
  },
  {
    img: img3,
    header: "Distant Galaxy",
    userAvatar: avatar3,
    userName: "MoonDancer",
    price1: 1.63,
    price2: 0.33,
  },
];
</script>
