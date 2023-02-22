<template>
  <div class="">
    <img
      class="w-full lg:h-[560px] md:h-[420px] h-[320px]"
      style=""
      src="../assets/image-placeholder-7@1x.png"
      alt=""
    />
    <div class="my-container py-10 flex md:gap-x-[30px]">
      <div class="md:space-y-8 space-y-5">
        <div class="">
          <h2>The Orbitians</h2>
          <p class="text-primary">Minted on Sep 30, 2022</p>
        </div>
        <count-down class="md:hidden block" :has-button="true"> </count-down>
        <div class="space-y-2.5">
          <h5 class="font-mono text-primary">Created By</h5>
          <nuxt-link class="flex gap-x-3" to="/user">
            <img
              width="24"
              height="24"
              src="../assets/avatar-icons/avatar1.svg"
              alt=""
            />
            <h5>Orbitian</h5>
          </nuxt-link>
        </div>
        <div>
          <h5 class="font-mono text-primary">Description</h5>
          <p class="font-sans lg:max-w-[80%]">
            The Orbitians
            <br />

            is a collection of 10,000 unique NFTs on the Ethereum blockchain,
            <br /><br />
            There are all sorts of beings in the NFT Universe. The most advanced
            and friendly of the bunch are Orbitians. <br /><br />
            They live in a metal space machines, high up in the sky and only
            have one foot on Earth. <br />
            These Orbitians are a peaceful race, but they have been at war with
            a group of invaders for many generations. The invaders are called
            Upside-Downs, because of their inverted bodies that live on the
            ground, yet do not know any other way to be. Upside-Downs believe
            that they will be able to win this war if they could only get an eye
            into Orbitian territory, so they've taken to make human beings their
            target.
          </p>
        </div>
        <div class="flex flex-col gap-y-2.5">
          <h5 class="font-mono text-primary">Details</h5>
          <nuxt-link to="">
            <div class="flex gap-x-4">
              <img
                class="aspect-square lg:w-[26px] w-5"
                src="../assets/mini-icons/GlobeGray.svg"
                alt=""
              />
              <p>View on Etherscan</p>
            </div>
          </nuxt-link>
          <nuxt-link to="">
            <div class="flex gap-x-4">
              <img
                class="aspect-square lg:w-[26px] w-5"
                src="../assets/mini-icons/GlobeGray.svg"
                alt=""
              />
              <p>View Original</p>
            </div>
          </nuxt-link>
        </div>
        <div class="space-y-5">
          <h5 class="font-mono text-primary">Tags</h5>
          <div class="lg:flex lg:gap-x-5 lg:space-y-0 space-y-5">
            <div
              v-for="tag in tags"
              class="bg-secondary rounded-base px-7 py-3 w-max"
            >
              <span class="font-semibold uppercase">{{ tag }}</span>
            </div>
          </div>
        </div>
      </div>
      <count-down class="md:block hidden" :has-button="true"> </count-down>
    </div>
    <div class="my-container md:space-y-[60px] space-y-[30px]">
      <div class="md:flex block justify-between">
        <custom-header-and-text>
          <template #header> More from this Artist </template>
        </custom-header-and-text>
        <nuxt-link to="user">
          <button class="btn-black-primary-md hidden md:flex">
            <img
              width="20"
              height="20"
              src="../assets/mini-icons/ArrowRight.svg"
              alt=""
            />
            <span>Go To Artist Page</span>
          </button>
        </nuxt-link>
      </div>
      <div
        class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-y-[60px] gap-x-[30px] gap-y-[30px]"
      >
        <discover-card
          v-for="(card, i) in discoverCards"
          :card="card"
          :class="
            handleResponsivity(
              {
                sm: 2,
                md: 6,
                lg: -1,
              },
              'block',
              discoverCards.length,
              i
            )
          "
        >
          ></discover-card
        >
        <button class="btn-black-primary-md flex md:hidden w-full">
          <img
            width="20"
            height="20"
            src="../assets/mini-icons/ArrowRight.svg"
            alt=""
          />
          <span>Go To Artist Page</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import img1 from "../assets/discover-images/Image Placeholder.svg";
import img2 from "../assets/discover-images/Image Placeholder-1.svg";
import img3 from "../assets/discover-images/Image Placeholder-2.svg";
import avatar1 from "../assets/avatar-icons/avatar1.svg";
import handleResponsivity from "../utils/responsive";

const tags = ["animation", "illustration", "moon", "moon"];
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
    userAvatar: avatar1,
    userName: "MoonDancer",
    price1: 1.63,
    price2: 0.33,
  },
  {
    img: img3,
    header: "Distant Galaxy",
    userAvatar: avatar1,
    userName: "MoonDancer",
    price1: 1.63,
    price2: 0.33,
  },
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
    userAvatar: avatar1,
    userName: "MoonDancer",
    price1: 1.63,
    price2: 0.33,
  },
  {
    img: img3,
    header: "Distant Galaxy",
    userAvatar: avatar1,
    userName: "MoonDancer",
    price1: 1.63,
    price2: 0.33,
  },
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
    userAvatar: avatar1,
    userName: "MoonDancer",
    price1: 1.63,
    price2: 0.33,
  },
  {
    img: img3,
    header: "Distant Galaxy",
    userAvatar: avatar1,
    userName: "MoonDancer",
    price1: 1.63,
    price2: 0.33,
  },
];
</script>
