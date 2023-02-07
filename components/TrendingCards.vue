<template>
  <div class="space-y-4">
    <nuxt-link to="/NftPage"
      ><img class="hover" :src="card.primary" alt=""
    /></nuxt-link>
    <div class="flex w-[330px] justify-between">
      <nuxt-link to="/NftPage">
        <img class="hover" :src="card.secondary" alt=""
      /></nuxt-link>
      <nuxt-link to="/NftPage">
        <img class="hover" :src="card.tertiary" alt="" />
      </nuxt-link>
      <nuxt-link to="/NftPage"
        ><div
          class="w-[100px] h-[100px] hover bg-purple flex items-center justify-center font-bold text-lg py-8 px-4 rounded-2xl font-mono"
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
