<template>
  <div class="my-container">
    <custom-header-and-text>
      <template #header> Trending Collection </template>
      <template #text>
        Checkout our weekly updated trending collection.
      </template>
    </custom-header-and-text>
    <div class="hidden lg:flex justify-between">
      <trending-cards :card="card" v-for="card in trendings"></trending-cards>
    </div>
    <div class="hidden md:flex lg:hidden justify-between">
      <trending-cards
        :card="card"
        v-for="card in trendings.splice(0, 2)"
      ></trending-cards>
    </div>
    <div class="flex md:hidden justify-center">
      <trending-cards
        :card="card"
        v-for="card in trendings.splice(0, 1)"
      ></trending-cards>
    </div>
  </div>
</template>
<script setup>
import primary from "../assets/trending-images/Primary Photo Placeholder.svg";
import secondary from "../assets/trending-images/Secondary Photo Placeholder.svg";
import tertiary from "../assets/trending-images/Secondary Photo Placeholder-1.svg";
import avatar from "../assets/avatar-icons/avatar13.svg";
import primary1 from "../assets/trending-images/Primary Photo Placeholder-1.svg";
import secondary1 from "../assets/trending-images/Secondary Photo Placeholder-2.svg";
import tertiary1 from "../assets/trending-images/Secondary Photo Placeholder-3.svg";
import avatar1 from "../assets/avatar-icons/avatar7.svg";
import primary2 from "../assets/trending-images/Primary Photo Placeholder-2.svg";
import secondary2 from "../assets/trending-images/Secondary Photo Placeholder-4.svg";
import tertiary2 from "../assets/trending-images/Secondary Photo Placeholder-5.svg";
import avatar2 from "../assets/avatar-icons/avatar9.svg";
const trendings = [
  {
    primary: primary,
    secondary: secondary,
    tertiary: tertiary,
    count: 1025,
    header: "DSGN Animals",
    avatar: avatar,
    username: "MrFox",
  },
  {
    primary: primary1,
    secondary: secondary1,
    tertiary: tertiary1,
    count: 352,
    header: "Magic Mushrooms",
    avatar: avatar1,
    username: "Shroomie",
  },
  {
    primary: primary2,
    secondary: secondary2,
    tertiary: tertiary2,
    count: 2500,
    header: "Disco Machines",
    avatar: avatar2,
    username: "BeKind2Robots",
  },
];
</script>
