<template>
  <nuxt-link to="nftPage">
    <div v-bind="$attrs" class="md:w-[330px] w-[315px] rounded-base bg-secondary hover">
      <img class="" :src="card.img" alt="" />
      <div :class="card.class" class="pb-[25px] px-5 pt-5 rounded-b-base">
        <div>
          <h5 class="font-semibold text-lg mb-1">
            {{ card.header }}
          </h5>
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
            <div class="text-sm lg:text-base font-mono flex justify-between">
              <span> {{ card.price1 }} ETH </span>
              <span>{{ card.price2 }} wETH</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nuxt-link>
</template>
<script setup>
let params = defineProps(["card", "index"]);
// let width = window.innerWidth;

// onMounted(() => {
//   window.addEventListener("resize", () => {
//     width = window.innerWidth;
//   });
// });

// onBeforeUnmount(() => {
//   window.removeEventListener("resize", () => {
//     width = window.innerWidth;
//   });
// });

// const handleResponsivity = computed(() => {
//   if (width > 1280) return "block";
//   else if (width < 830) {
//     if (params.index >= 5) return "hidden";
//   } else if (830 < width < 1280) {
//     if (params.index >= 8) return "hidden";
//   }
// });
</script>
