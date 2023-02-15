<template>
  <div
    class="flex my-container md:flex-row flex-col max-w-none md:mx-0 p-0 md:gap-x-10 lg:gap-x-[60px] relative"
  >
    <img
      class="md:mb-0 h-[232px] lg:min-w-[610px] md:min-w-[397px] min-w-full md:h-[615px] lg:h-[691px] w-[47%] object-cover"
      src="../assets/Image Placeholder.svg"
      alt=""
    />
    <div
      class="flex flex-col pt-[30px] pb-10 md:py-[100px] lg:items-start items-center"
    >
      <div class="lg:w-[460px] md:w-[325px] mb-10 space-y-3 w-[331px]">
        <h2 class="lg:text-3xl text-2xl font-semibold">Create Account</h2>
        <p class="">
          Welcome! enter your details and start creating, collecting and selling
          NFTs.
        </p>
      </div>
      <div class="w-max">
        <div class="space-y-4 mb-7 ">
          <div
            v-for="item in inputs"
            class="flex gap-x-3 items-center bg-white rounded-base px-5 py-4 h-[46px] lg:max-w-none max-w-[315px] "
          >
            <img class="w-5 max-h-5" :src="item.logo" alt="" />
            <input
              class="placeholder:text-base placeholder:leading-xsmall placeholder:text-primary "
              :placeholder="item.text"
              type="text"
            />
          </div>
        </div>
        <button class="btn-purple-primary-sm w-full lg:px-[105px] px-0 lg:max-w-none max-w-[315px]">
          Create account
        </button>
      </div>
    </div>
  </div>
</template>
<script setup>
import userLogo from "../assets/mini-icons/UserGray.svg";
import mailLogo from "../assets/mini-icons/EnvelopeSimpleGray.svg";
import lockLogo from "../assets/mini-icons/LockKeyGray.svg";
const inputs = [
  {
    text: "Username",
    logo: userLogo,
  },
  {
    text: "Email Adress",
    logo: mailLogo,
  },
  {
    text: "Password",
    logo: lockLogo,
  },
  {
    text: "Confirm Password",
    logo: lockLogo,
  },
];
</script>
