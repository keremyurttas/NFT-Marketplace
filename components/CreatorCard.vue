<template>
  <div
    class="lg:p-5 rounded-[20px] bg-secondary w-max flex lg:flex-col items-center justify-center p-5 relative gap-x-5"
  >
    <div
      class="font-mono absolute left-3 top-3 w-[30px] h-[30px] lg:left-5 lg:top-5 flex items-center justify-center text-primary bg-primary rounded-full"
    >
      {{ index + 1 }}
    </div>
    <img class="lg:mb-2 aspect-square lg:w-[120px] w-[56px] md:w-[60px]" :src="card.avatar" alt="" />

    <div class="flex flex-col lg:items-center pb-0.5 px-2">
      <h5 class="font-semibold text-lg">{{ card.username }}</h5>
      <span class="text-base text-primary"
        >Total Sales:
        <strong class="font-mono text-white font-normal"
          >   {{ card.totalSales }} ETH</strong
        ></span
      >
    </div>
  </div>
</template>
<script setup>
defineProps(["card", "index"]);
</script>
