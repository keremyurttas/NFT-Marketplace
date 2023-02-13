<template>
  <div>
    <nav
      :class="{ 'overflow-hidden': isHeaderActive }"
      class="py-4 px-8 md:px-12 lg:py-8 flex justify-between items-center bg-primary"
    >
      <nuxt-link class="w-44 lg:w-auto" to="/">
        <img src="../assets/nav/logo.svg" alt="" />
      </nuxt-link>
      <div
        class="hidden lg:flex justify-between items-center gap-x-12 font-semibold"
      >
        <nuxt-link to="/marketPlace"> Marketplace </nuxt-link>
        <nuxt-link to="/rankings"> Rankings </nuxt-link>
        <nuxt-link to="/connectWallet"> Connect a wallet </nuxt-link>
        <nuxt-link to="/signUp">
          <div class="btn-purple-primary-md px-7">
            <img class="w-5 h-5" src="../assets/mini-icons/User.svg" alt="" />
            Sign Up
          </div>
        </nuxt-link>
      </div>
      <!-- body blur item when header is displaying -->
      <div
        v-if="isHeaderActive"
        class="w-screen h-screen backdrop-blur-sm absolute top-16"
      ></div>
      <div
        v-if="isHeaderActive"
        class="lg:hidden w-[80%] h-[80%] border-purple border-2 rounded-base grid grid-cols-1 absolute right-5 text-base top-5 px-8 py-12 grid-rows-3 bg-primary"
      >
        <button @click="handleHeader()" class="absolute right-3 top-3">
          <img
            class="fill-[#ffff]"
            src="../assets/mini-icons/CloseWhite.svg"
            alt=""
          />
        </button>
        <nuxt-link to="/marketplace"> Marketplace </nuxt-link>
        <nuxt-link to="/rankings"> Rankings </nuxt-link>
        <nuxt-link to="/connectWallet"> Connect a wallet </nuxt-link>
        <nuxt-link to="/signUp">
          <div class="btn-purple-primary-sm px-10">
            <img class="w-5 h-5" src="../assets/mini-icons/User.svg" alt="" />
            Sign Up
          </div>
        </nuxt-link>
      </div>
      <button @click="handleHeader()" class="lg:hidden">
        <img src="../assets/mini-icons/List.svg" alt="" />
      </button>
    </nav>
  </div>
</template>
<script setup>
const isHeaderActive = ref(false);
const handleHeader = function () {
  if (isHeaderActive.value == false) {
    isHeaderActive.value = true;
    document.body.style.overflow = "hidden";
  } else {
    isHeaderActive.value = false;
    document.body.style.overflow = "auto";
  }
};
// watch(isHeaderActive, () => {
//   isHeaderActive.value
//     ? (document.body.style.overflow = "hidden")
//     : (document.body.style.overflow = "auto");
// });
</script>
