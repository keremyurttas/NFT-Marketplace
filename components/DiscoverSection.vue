<template>
  <div class="my-container">
    <div class="flex justify-between items-end mb-[60px]">
      <div class="mb-0 md:max-w-[50%] lg:max-w-full space-y-2.5">
        <h3>Discover More NFTs</h3>
        <p>Explore new trending NFTs</p>
      </div>
      <nuxt-link to="marketPlace">
        <button class="btn-black-primary-md hidden md:flex w-48">
          <img src="../assets/mini-icons/EyePurple.svg" alt="" />
          See All
        </button>
      </nuxt-link>
    </div>
    <div class="justify-between flex flex-col md:flex-row mb-5 lg:mb-0">
      <discover-card
        class="mb-5"
        v-for="(card, i) in discoverCards"
        :card="card"
        :class="
          handleResponsivity(
            {
              sm: 2,
              md: 2,
              lg: -1,
            },
            'block',
            discoverCards.length,
            i
          )
        "
      ></discover-card>
    </div>
    <div class="btn-black-primary-md w-full flex md:hidden">
      <img src="../assets/mini-icons/EyePurple.svg" alt="" />
      See All
    </div>
  </div>
</template>
<script setup>
import handleResponsivity from "~~/utils/responsive";
import img1 from "../assets/discover-images/Image Placeholder.svg";
import img2 from "../assets/discover-images/Image Placeholder-1.svg";
import img3 from "../assets/discover-images/Image Placeholder-2.svg";
import avatar1 from "../assets/avatar-icons/avatar1.svg";
import avatar2 from "../assets/avatar-icons/avatar2.svg";
import avatar3 from "../assets/avatar-icons/avatar3.svg";

const discoverCards = [
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
