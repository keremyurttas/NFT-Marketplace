<template>
  <div class="my-container md:gap-x-8 flex">
    <div class="block md:w-1/2 space-y-6">
      <component :is="`h${title}`"></component>
      <h1 class="mb-3">Discover digital art & Collect NFTs</h1>
      <span class="md:text-base lg:text-lg font-normal"
        >NFT marketplace UI created with Anima for Figma. Collect, buy and sell
        art from more than 20k NFT artists.</span
      >
      <div class="aspect-square md:hidden">
        <img src="../assets/HighlightedNFT.svg" alt="" />
      </div>
      <button class="btn-purple-primary-md w-full md:w-auto">
        <img src="../assets/RocketLaunchWhite.svg" alt="" />
        Get Started
      </button>
      <my-counter :data="counter"> </my-counter>
    </div>
    <div class="md:block w-1/2 hidden aspect-square">
      <img src="../assets/HighlightedNFT.svg" alt="" />
    </div>
  </div>
</template>
<script setup>
const counter = [
  {
    count: "240k",
    text: "Total Sale",
  },
  {
    count: "100k",
    text: "Auctions",
  },
  {
    count: "240k",
    text: "Artists",
  },
];
</script>
