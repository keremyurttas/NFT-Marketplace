<template>
  <nav
    class="md:px-12 lg:py-8 md:py-4 py-4 px-8 flex justify-between items-center bg-primary"
  >
    <nuxt-link class="w-44 lg:w-60" to="/index.vue">
      <img src="../assets/nav/nav/logo.svg" alt="" />
    </nuxt-link>
    <div
      class="hidden lg:flex justify-between items-center gap-x-12 font-semibold"
    >
      <nuxt-link to="/marketplace.vue"> Marketplace </nuxt-link>
      <nuxt-link to="/rankings.vue"> Rankings </nuxt-link>
      <nuxt-link to="/connectWallet.vue"> Connect a wallet </nuxt-link>
      <nuxt-link to="/signUp.vue">
        <!--  before:content-[url(./assets/mini-icons/User.svg)] -->
        <div class="btn-purple-primary-md px-7">
          <img class="w-5 h-5" src="../assets/mini-icons/User.svg" alt="" />
          Sign Up
        </div>
      </nuxt-link>
    </div>
    <div
      v-if="isHeaderActive"
      class="lg:hidden h-[70vh] grid grid-cols-1 absolute right-5 md:w-96 w-64 text-base top-5 px-8 py-12 grid-rows-3 bg-primary rounded-lg"
    >
      <button @click="isHeaderActive = false" class="absolute right-3 top-3">
        <img
          class="fill-[#ffff]"
          src="../assets/mini-icons/CloseWhite.svg"
          alt=""
        />
      </button>
      <nuxt-link to="/marketplace.vue"> Marketplace </nuxt-link>
      <nuxt-link to="/rankings.vue"> Rankings </nuxt-link>
      <nuxt-link to="/connectWallet.vue"> Connect a wallet </nuxt-link>

      <nuxt-link to="/signUp.vue">
        <div class="btn-purple-primary-sm px-10">
          <img class="w-5 h-5" src="../assets/mini-icons/User.svg" alt="" />
          Sign Up
        </div>
      </nuxt-link>
    </div>
    <button @click="isHeaderActive = true" class="lg:hidden">
      <img src="../assets/mini-icons/List.svg" alt="" />
    </button>
  </nav>
</template>
<script setup>
const isHeaderActive = ref(false);
</script>
