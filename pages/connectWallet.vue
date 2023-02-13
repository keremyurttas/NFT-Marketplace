<template>
  <div
    class="flex my-container md:flex-row flex-col max-w-none md:mx-0 p-0 md:gap-x-10 lg:gap-x-[60px] relative"
  >
    <img
      class="md:mb-0 h-[232px] lg:min-w-[610px] md:min-w-[397px] min-w-full md:h-[615px] lg:h-[691px] w-[47%] object-cover"
      src="../assets/WalletPageImg.svg"
      alt=""
    />
    <div
      class="flex flex-col pt-[30px] pb-10 md:py-[100px] lg:items-start items-center"
    >
      <div class="lg:w-[460px] md:w-[325px] mb-10 space-y-3 w-[331px]">
        <h2 class="lg:text-3xl text-2xl font-semibold capitalize">Connect wallet</h2>
        <p class="text-base lg:text-lg">
          Choose a wallet you want to connect. There are several wallet
          providers.
        </p>
      </div>
      <div class="space-y-5">
        <button v-for="wallet in wallets" class="btn-black-primary-lg  lg:h-[72px] h-[60px] gap-x-5 w-full border-[1px] bg-secondary justify-start">
          <img :src="wallet.img" alt="" />
          {{ wallet.name }}
        </button>
      </div>
    </div>
  </div>
</template>
<script setup>
import img1 from "../assets/wallet-images/Metamask.svg";
import img2 from "../assets/wallet-images/WalletConnect.svg";
import img3 from "../assets/wallet-images/Coinbase.svg";

const wallets = [
  {
    name: "Metamask",
    img: img1,
  },
  {
    name: "Wallet Connect",
    img: img2,
  },
  {
    name: "Coinbase",
    img: img3,
  },
];
</script>
