<template>
  <div class="my-container">
    <custom-header-and-text class="lg:mb-12 mb-10 lg:max-w-full">
      <template #header>How it works</template>
      <template #text>Find out how to get started</template>
    </custom-header-and-text>
    <div class="md:flex md:gap-x-[30px] space-y-5 md:space-y-0">
      <div
        v-for="card in instructions"
        class="lg:pb-[30px] w-full lg:px-[30px] md:px-5 md:pb-[30px] md:pt-[20px] p-5 flex md:flex-col items-center leading-normal rounded-base bg-secondary"
      >
        <img
          class="lg:mb-5 md:mr-0 md:mb-8 md:w-[160px] w-24 lg:w-[250px] aspect-square mr-5"
          :src="card.img"
          alt=""
        />
        <div class="md:text-center">
          <h5 class="mb-2.5 lg:text-lg text-base font-semibold">
            {{ card.header }}
          </h5>
          <p class="text-sm lg:text-base">
            {{ card.text }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import img1 from "../assets/info-cards/Create Collection Icon.svg";
import img2 from "../assets/info-cards/Setup Wallet Icon.svg";
import img3 from "../assets/info-cards/Start Earning Icon.svg";
const instructions = [
  {
    header: "Setup Your wallet",
    text: "Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner.",
    img: img1,
  },
  {
    header: "Create Collection",
    text: "Upload your work and setup your collection. Add a description, social links and floor price.",
    img: img2,
  },
  {
    header: "Start Earning",
    text: "Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others.",
    img: img3,
  },
];
</script>
