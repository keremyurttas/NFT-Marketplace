<template>
  <div>
    <div class="my-container">
      <custom-header-and-text-lg class="lg:mb-8">
        <template #header>Top Creators </template>
        <template #text>
          Check out top ranking NFT artists on the NFT Marketplace.
        </template>
      </custom-header-and-text-lg>
    </div>
    <div class="my-container py-0 md:block hidden">
      <div
        class="flex w-full justify-evenly mb-4 lg:text-lg text-primary font-semibold"
      >
        <div class="lg:text-lg font-semibold w-1/2 flex justify-center">
          <div class="flex items-center gap-x-4 text-white">Today</div>
        </div>

        <div class="items-center gap-x-4 w-1/2 flex justify-center">
          This Week
        </div>
        <div class="items-center gap-x-4 w-1/2 flex justify-center">
          This Month
        </div>
        <div class="items-center gap-x-4 w-1/2 flex justify-center">
          All Time
        </div>
      </div>
      <div class="w-1/4 bg-inactive h-0.5"></div>
    </div>
    <div class="my-container md:hidden py-0">
      <div
        class="flex w-full justify-evenly mb-4 lg:text-lg text-primary font-semibold"
      >
        <div class="lg:text-lg font-semibold w-1/2 flex justify-center">
          <div class="flex items-center gap-x-4 text-white">1d</div>
        </div>

        <div class="items-center gap-x-4 w-1/2 flex justify-center">7d</div>
        <div class="items-center gap-x-4 w-1/2 flex justify-center">30d</div>
        <div class="items-center gap-x-4 w-1/2 flex justify-center">
          All Time
        </div>
      </div>
      <div class="w-1/4 bg-inactive h-0.5"></div>
    </div>

    <div class="my-container py-10 space-y-5">
      <div
        class="border-secondary border rounded-base py-3 md:px-5 px-2.5 flex justify-between"
      >
        <div class="flex w-[215px] md:W-[430px] gap-x-2.5 md:gap-x-5">
          <div class="text-sm lg:text-base w-6 lg:w-[30px] flex justify-center">
            #
          </div>
          <span class="text-sm md:text-base">Artist</span>
        </div>
        <div class="text-sm flex gap-x-5 md:text-base">
          <span class="md:w-[100px] lg:w-40 lg:block hidden">Change</span>
          <span class="md:w-[100px] lg:w-40 md:block hidden">NFTs Sold</span>
          <span class="w-20 md:w-[100px] lg:w-40 text-sm md:text-base"
            >Volume</span
          >
        </div>
      </div>

      <div v-for="(user, index) in users">
        <nuxt-link to="user">
          <div
            class="bg-secondary rounded-base py-3 px-2.5 md:px-5 flex justify-between"
          >
            <div class="flex gap-x-2.5 items-center md:gap-x-5">
              <div
                class="lg:w-[30px] text-sm md:text-base aspect-square w-6 bg-transparent rounded-base lg:bg-primary flex items-center justify-center font-mono text-primary"
              >
                {{ index + 1 }}
              </div>
              <div class="flex items-center gap-x-3 md:gap-x-5 hover">
                <img
                  class="lg:w-[60px] w-6 aspect-square"
                  :src="user.img"
                  alt=""
                />
                <h5 class="md:font-semibold md:text-lg">{{ user.name }}</h5>
              </div>
            </div>
            <div class="flex gap-x-5 items-center font-mono justify-end w-fit">
              <span class="text-[#00AC4F] w-[100px] lg:w-40 md:block hidden">{{
                user.change
              }}</span>
              <span class="lg:w-40 lg:block hidden">{{ user.sold }}</span>
              <span class="md:w-[100px] w-20 lg:w-40 md:text-base text-sm">{{
                user.volume
              }}</span>
            </div>
          </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>
<script setup>
import img from "../assets/avatar-icons/avatar11.svg";
import img2 from "../assets/avatar-icons/avatar15.svg";
import img3 from "../assets/avatar-icons/avatar1.svg";
import img4 from "../assets/avatar-icons/avatar14.svg";
const users = [
  { img: img, name: "Ruben Carder", change: "+1.41", sold: 602, volume: 12.4 },
  { img: img2, name: "Davis Franci", change: "+1.41", sold: 602, volume: 12.4 },
  { img: img3, name: "Livia Rosser", change: "+1.41", sold: 602, volume: 12.4 },
  { img: img4, name: "Kianna Donin", change: "+1.41", sold: 602, volume: 12.4 },
  { img: img, name: "Ruben Carder", change: "+1.41", sold: 602, volume: 12.4 },
  { img: img2, name: "Davis Franci", change: "+1.41", sold: 602, volume: 12.4 },
  { img: img3, name: "Livia Rosser", change: "+1.41", sold: 602, volume: 12.4 },
  { img: img4, name: "Kianna Donin", change: "+1.41", sold: 602, volume: 12.4 },
  { img: img, name: "Ruben Carder", change: "+1.41", sold: 602, volume: 12.4 },
  { img: img2, name: "Davis Franci", change: "+1.41", sold: 602, volume: 12.4 },
  { img: img3, name: "Livia Rosser", change: "+1.41", sold: 602, volume: 12.4 },
  { img: img4, name: "Kianna Donin", change: "+1.41", sold: 602, volume: 12.4 },
  { img: img, name: "Ruben Carder", change: "+1.41", sold: 602, volume: 12.4 },
  { img: img2, name: "Davis Franci", change: "+1.41", sold: 602, volume: 12.4 },
  { img: img3, name: "Livia Rosser", change: "+1.41", sold: 602, volume: 12.4 },
  { img: img4, name: "Kianna Donin", change: "+1.41", sold: 602, volume: 12.4 },
  { img: img, name: "Ruben Carder", change: "+1.41", sold: 602, volume: 12.4 },
  { img: img2, name: "Davis Franci", change: "+1.41", sold: 602, volume: 12.4 },
  { img: img3, name: "Livia Rosser", change: "+1.41", sold: 602, volume: 12.4 },
  { img: img4, name: "Kianna Donin", change: "+1.41", sold: 602, volume: 12.4 },
];
</script>
