<template>
  <footer class="bg-secondary">
    <div class="my-container py-10 text-footer">
      <div
        class="lg:flex justify-between lg:gap-y-0 space-y-8 lg:space-y-0 mb-8 md:mb-12 lg:mb-8"
      >
        <div class="">
          <img
            class="lg:mb-[30px] md:mb-6 mb-5"
            src="../assets/nav/logo.svg"
            alt=""
          />
          <p class="mb-5 lg:w-64">
            NFT marketplace UI created with Anima for Figma.
          </p>
          <div class="space-y-4">
            <span class="">Join our community</span>
            <div class="flex gap-x-2.5">
              <a href="discord.gg">
                <img src="../assets/mini-icons/DiscordLogo.svg" alt="" />
              </a>
              <a href="youtube.com">
                <img src="../assets/mini-icons/YoutubeLogo.svg" alt="" />
              </a>
              <a href="twitter.com">
                <img src="../assets/mini-icons/TwitterLogo.svg" alt="" />
              </a>
              <a href="www.instagram.com">
                <img src="../assets/mini-icons/InstagramLogo.svg" alt="" />
              </a>
            </div>
          </div>
        </div>
        <div class="lg:space-y-6 space-y-5">
          <h5 class="text-lg text-white font-bold font-mono leading-large">
            Explore
          </h5>
          <div class="flex flex-col gap-y-5">
            <nuxt-link to="/marketplace">Marketplace</nuxt-link>
            <nuxt-link to="/rankings">Rankings</nuxt-link>
            <nuxt-link to="/wallet">Connect a wallet</nuxt-link>
          </div>
        </div>
        <div>
          <h5
            class="text-lg text-white font-bold font-mono leading-large mb-5 lg:mb-6"
          >
            Join our weekly digest
          </h5>
          <p class="lg:w-72 mb-5">
            Get exclusive promotions & updates straight to your inbox.
          </p>
          <div class="md:flex">
            <input
              class="md:w-[425px] w-full py-4 px-5 placeholder:capitalize placeholder:text-base md:h-[60px] md:-mr-[178px] h-[46px] rounded-base mb-4 md:mb-0"
              placeholder="Enter your email adress"
              type="text"
            />
            <button
              class="btn-purple-primary-md md:w-max md:h-[60px] h-[46px] w-full flex"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <hr class="text-footer mb-5" />
      <span class="text-sm">Ⓒ NFT Market. Use this template freely. </span>
    </div>
  </footer>
</template>
