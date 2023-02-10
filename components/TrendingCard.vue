<template>
  <div class="space-y-4 md:max-w-none max-w-[315px]">
    <nuxt-link to="/NftPage"
      ><img class="hover" :src="card.primary" alt=""
    /></nuxt-link>
    <div class="flex md:max-w-none max-w-[315px] justify-between">
      <nuxt-link to="/NftPage">
        <img
          class="hover w-[95px] aspect-square md:w-[100px]"
          :src="card.secondary"
          alt=""
      /></nuxt-link>
      <nuxt-link to="/NftPage">
        <img
          class="hover w-[95px] aspect-square md:w-[100px]"
          :src="card.tertiary"
          alt=""
        />
      </nuxt-link>
      <nuxt-link to="/NftPage"
        ><div
          class="w-[95px] h-[95px] md:w-[100px] md:h-[100px] hover bg-purple flex items-center justify-center font-bold text-lg py-8 px-4 rounded-base font-mono"
        >
          {{ card.count }}+
        </div></nuxt-link
      >
    </div>
    <h5 class="text-lg font-semibold w-max">{{ card.header }}</h5>
    <nuxt-link to="/user"
      ><div class="flex gap-x-4 w-max">
        <img class="w-6 aspect-square" :src="card.avatar" alt="" />
        <span>{{ card.username }}</span>
      </div></nuxt-link
    >
  </div>
</template>
<script setup>
defineProps(["card"]);
</script>
