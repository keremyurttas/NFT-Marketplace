<template>
  <div class="flex justify-between ">
    <div v-for="cell in data" class="grid md:pr-8 ">
      <h5 class="font-mono">{{ cell.count }}+</h5>
      <span class="md:text-base lg:text-base">{{ cell.text }}</span>
    </div>
  </div>
</template>
<script setup>
defineProps(["data"]);
</script>
