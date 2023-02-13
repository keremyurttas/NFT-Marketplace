<template>
  <div class="w-full mushroom ">
    <div
      class="bg-gradient_mushroom  md:pt-[360px] relative flex items-end pt-32 pb-10 md:pb-[60px]"
    >
      <div
        class="flex flex-col md:flex-row justify-between pb-0 md:items-end w-full my-container space-y-6"
      >
        <div class="space-y-6">
          <nuxt-link to="/user">
            <div class="px-5 py-2.5 rounded-base flex bg-secondary w-max">
              <img
                width="24"
                height="24"
                class="mr-3"
                src="../assets/avatar-icons/avatar10.svg"
                alt=""
              />
              <span>Shroomie</span>
            </div>
          </nuxt-link>
          <h3
            class="text-2xl lg:text-3xl font-semibold md:w-max leading-xsmall"
          >
            Magic Mashrooms
          </h3>

          <button
            class="bg-[#ffff] hidden hover text-black font-semibold md:flex gap-x-3 items-center justify-between px-12 py-5 rounded-base"
          >
            <img src="../assets/mini-icons/EyePurple.svg" alt="" />
            See NFT
          </button>
        </div>
        <countDown></countDown>
        <button
          class="bg-[#ffff] md:hidden text-black font-semibold flex gap-x-3 items-center justify-center px-12 py-5 rounded-base"
        >
          <img src="../assets/mini-icons/EyePurple.svg" alt="" />
          See NFT
        </button>
      </div>
    </div>
  </div>
</template>
