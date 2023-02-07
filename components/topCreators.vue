<template>
  <div class="my-container">
    <div class="flex justify-between items-end mb-16">
      <custom-header-and-text class="mb-0 md:max-w-[50%] lg:max-w-full">
        <template #header>Top Creators</template>
        <template #text
          >Checkout Top Rated Creators on the NFT Marketplace</template
        >
      </custom-header-and-text>
      <div class="btn-black-primary-md hidden md:flex">
        <img src="../assets/RocketLaunchWhite.svg" alt="" />
        View Rankings
      </div>
    </div>
    <div class="lg:grid grid-cols-4 gap-y-8 hidden place-items-center">
      <creator-card
        :card="card"
        :index="i"
        v-for="(card, i) in creators"
      ></creator-card>
    </div>
    <div class="grid lg:hidden sm:grid-cols-2 gap-y-8 justify-center place-items-center">
      <creator-card
        :card="card"
        :index="i"
        v-for="(card, i) in creators.splice(0, 6)"
        class="content-center"
      ></creator-card>
    </div>
  </div>
</template>
<script setup>
import avatar1 from "../assets/avatar-icons/avatar1.svg";
import avatar2 from "../assets/avatar-icons/avatar2.svg";
import avatar3 from "../assets/avatar-icons/avatar3.svg";
import avatar4 from "../assets/avatar-icons/avatar4.svg";
import avatar5 from "../assets/avatar-icons/avatar5.svg";
import avatar6 from "../assets/avatar-icons/avatar6.svg";
import avatar7 from "../assets/avatar-icons/avatar7.svg";
import avatar8 from "../assets/avatar-icons/avatar8.svg";
import avatar9 from "../assets/avatar-icons/avatar9.svg";
import avatar10 from "../assets/avatar-icons/avatar10.svg";
import avatar11 from "../assets/avatar-icons/avatar11.svg";
import avatar12 from "../assets/avatar-icons/avatar12.svg";

const creators = [
  {
    avatar: avatar1,
    username: "Keepitreal",
    totalSales: 34.53,
  },
  {
    avatar: avatar2,
    username: "Digilab",
    totalSales: 34.53,
  },
  {
    avatar: avatar3,
    username: "GravityOne",
    totalSales: 34.53,
  },
  {
    avatar: avatar4,
    username: "Juanie",
    totalSales: 34.53,
  },
  {
    avatar: avatar5,
    username: "Bluewhale",
    totalSales: 34.53,
  },
  {
    avatar: avatar6,
    username: "Mr Fox",
    totalSales: 34.53,
  },
  {
    avatar: avatar7,
    username: "Sroomie",
    totalSales: 34.53,
  },
  {
    avatar: avatar8,
    username: "Robotica",
    totalSales: 34.53,
  },
  {
    avatar: avatar9,
    username: "RustyRobot",
    totalSales: 34.53,
  },
  {
    avatar: avatar10,
    username: "AnimaKid",
    totalSales: 34.53,
  },
  {
    avatar: avatar11,
    username: "Dotku",
    totalSales: 34.53,
  },
  {
    avatar: avatar12,
    username: "Ghiblier",
    totalSales: 34.53,
  },
];
</script>
