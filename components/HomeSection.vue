<template>
  <div class="my-container flex justify-between">
    <div class="md:block hidden md:w-[330px] lg:w-[510px] space-y-6">
      <h1
        class="md:text-2xl lg:text-4xl lg:font-bold font-semibold capitalize leading-xsmall mb-3"
      >
        Discover digital art & Collect NFTs
      </h1>
      <span class="md:text-base lg:text-lg font-normal"
        >NFT marketplace UI created with Anima for Figma. Collect, buy and sell
        art from more than 20k NFT artists.</span
      >
      <button class="btn-purple-primary-md">
        <img src="../assets/RocketLaunchWhite.svg" alt="" />
        Get Started
      </button>
      <div class="flex justify-between">
        <div v-for="cell in counter" class="grid pr-8">
          <strong class="md:text-lg lg:text-xl font-bold font-mono"
            >{{ cell.count }}k+</strong
          >
          <span class="text-[24px] md:text-base lg:text-base">{{
            cell.text
          }}</span>
        </div>
      </div>
    </div>
    <div class="md:block hidden aspect-square md:w-[330px] lg:w-[510px]">
      <img src="../assets/HighlightedNFT.svg" alt="" />
    </div>
    <div class="space-y-9 md:hidden grid">
      <div>
        <h1 class="text-xl mb-3 font-semibold capitalize leading-normal">
          Discover digital art & Collect NFTs
        </h1>
        <span class="text-base font-normal"
          >NFT marketplace UI created with Anima for Figma. Collect, buy and
          sell art from more than 20k NFT artists.</span
        >
      </div>
      <div class="aspect-square w-[315px] justify-self-center">
        <img src="../assets/HighlightedNFT.svg" alt="" />
      </div>
      <button class="btn-purple-primary-md justify-self-center px-24">
        <img src="../assets/RocketLaunchWhite.svg" alt="" />
        Get Started
      </button>
      <div class="flex justify-between">
        <div v-for="cell in counter" class="grid">
          <strong class="text-lg font-bold font-mono"
            >{{ cell.count }}k+</strong
          >
          <span class="text-basemd:text-base lg:text-base">{{
            cell.text
          }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const counter = [
  {
    count: 240,
    text: "Total Sale",
  },
  {
    count: 100,
    text: "Auctions",
  },
  {
    count: 240,
    text: "Artists",
  },
];
</script>
