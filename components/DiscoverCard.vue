<template>
  <nuxt-link to="/user">
    <div class="md:w-[330px] w-[315px] rounded-base bg-secondary">
      <img :src="card.img" alt="" />
      <div class="pb-[25px] px-[30px] pt-5">
        <div>
          <h5 class="font-semibold lg:text-lg text-base mb-1">{{ card.header }}</h5>
          <div class="flex mb-6">
            <img
              width="24"
              height="24"
              class="mr-4"
              :src="card.userAvatar"
              alt=""
            />
            <span class="font-mono text-base">{{ card.userName }}</span>
          </div>
          <div>
            <div class="text-sm font-mono text-primary flex justify-between">
              <span> Price </span>
              <span>Highest Bid</span>
            </div>
            <div class="text-base font-mono flex justify-between">
              <span> {{ card.price1 }} ETH </span>
              <span>{{ card.price1 }} wETH</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nuxt-link>
</template>
<script setup>
defineProps(["card"]);
</script>
