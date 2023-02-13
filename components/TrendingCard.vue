<template>
  <div :class="card.class" class="space-y-4">
    <nuxt-link to="/NftPage"
      ><img class="hover" :src="card.primary" alt=""
    /></nuxt-link>
    <div class="flex gap-x-[15px]">
      <nuxt-link to="/NftPage">
        <img class="hover aspect-square" :src="card.secondary" alt=""
      /></nuxt-link>
      <nuxt-link to="/NftPage">
        <img class="hover aspect-square" :src="card.tertiary" alt="" />
      </nuxt-link>
      <nuxt-link class="" to="/NftPage"
        ><div
          class="bg-purple md:w-[100px] w-[95px] aspect-square flex items-center justify-center font-bold text-lg rounded-base font-mono"
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
