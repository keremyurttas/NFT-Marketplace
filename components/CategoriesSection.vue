<template>
  <div class="my-container">
    <h3 class="mb-16">Browse Categories</h3>
    <div
      class="grid grid-cols-2 md:grid-cols-4 place-items-center gap-4 md:gap-8"
    >
      <div v-for="card in categories" class="bg-secondary rounded-base hover">
        <nuxt-link to="/marketPlace">
          <div class="relative">
            <img class="" :src="card.img" alt="" />
            <div
              class="backdrop-blur-lg rounded-t-base center w-full h-full absolute flex justify-center items-center"
            >
              <img class="" :src="card.icon" alt="" />
            </div>
          </div>
          <div
            class="lg:px-[30px] lg:pb-[25px] pt-5 px-5 pb-6 font-semibold lg:text-lg text-base"
          >
            <h5 class="lg:text-lg text-base">{{ card.name }}</h5>
          </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import ctgryIcn1 from "../assets/category-icons/Basketball.svg";
import ctgryIcn2 from "../assets/category-icons/Camera.svg";
import ctgryIcn3 from "../assets/category-icons/MagicWand.svg";
import ctgryIcn4 from "../assets/category-icons/Planet.svg";
import ctgryIcn5 from "../assets/category-icons/Swatches.svg";
import ctgryIcn6 from "../assets/category-icons/MusicNotes.svg";
import ctgryIcn7 from "../assets/category-icons/VideoCamera.svg";
import ctgryIcn8 from "../assets/category-icons/PaintBrush.svg";

import ctgryImg1 from "../assets/category-images/Image Placeholder-1.svg";
import ctgryImg2 from "../assets/category-images/Image Placeholder-2.svg";
import ctgryImg3 from "../assets/category-images/Image Placeholder-3.svg";
import ctgryImg4 from "../assets/category-images/Image Placeholder-4.svg";
import ctgryImg5 from "../assets/category-images/Image Placeholder-5.svg";
import ctgryImg6 from "../assets/category-images/Image Placeholder-6.svg";
import ctgryImg7 from "../assets/category-images/Image Placeholder-7.svg";
import ctgryImg8 from "../assets/category-images/Image Placeholder.svg";

const categories = [
  {
    name: "Art",
    img: ctgryImg1,
    icon: ctgryIcn1,
  },
  {
    name: "Collectibles",
    img: ctgryImg2,
    icon: ctgryIcn2,
  },
  {
    name: "Music",
    img: ctgryImg3,
    icon: ctgryIcn3,
  },
  {
    name: "Photography",
    img: ctgryImg4,
    icon: ctgryIcn4,
  },
  {
    name: "Video",
    img: ctgryImg5,
    icon: ctgryIcn5,
  },
  {
    name: "Utility",
    img: ctgryImg6,
    icon: ctgryIcn6,
  },
  {
    name: "Sport",
    img: ctgryImg7,
    icon: ctgryIcn7,
  },
  {
    name: "Virtual Words",
    img: ctgryImg8,
    icon: ctgryIcn8,
  },
];
</script>
