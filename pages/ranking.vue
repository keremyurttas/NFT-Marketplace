<template>
  <div>
    <div class="my-container">
      <custom-header-and-text-lg class="mb-8">
        <template #header>Top Creators </template>
        <template #text>
          Check out top ranking NFT artists on the NFT Marketplace.
        </template>
      </custom-header-and-text-lg>
    </div>
    <div class="my-container py-0 pt-6">
      <div
        class="flex w-full justify-evenly mb-4 lg:text-lg text-primary font-semibold"
      >
        <div class="lg:text-lg font-semibold w-1/2 flex justify-center">
          <div class="flex items-center gap-x-4 text-white">Today</div>
        </div>

        <div class="items-center gap-x-4 w-1/2 flex justify-center">
          This Week
        </div>
        <div class="items-center gap-x-4 w-1/2 flex justify-center">
          This Month
        </div>
        <div class="items-center gap-x-4 w-1/2 flex justify-center">
          All Time
        </div>
      </div>
      <div class="w-1/4 bg-inactive h-0.5"></div>
    </div>

    <div class="my-container py-[60px]">
      <div class="grid grid-cols-8 grid-">
        <span class="grid1">#</span>
        <span class="grid2">#</span>
        <span class="grid3">#</span>
        <span class="grid4">#</span>
      </div>
      <!-- <div
        class="flex justify-between lg:text-base text-sm text-primary font-mono border py-3 px-5 rounded-base border-secondary mb-5"
      >
        <div class="flex gap-x-2.5 md:gap-x-5 w-[430px]">
          <span class="md:w-[30px] w-6 text-base">#</span>
          <span>Artist</span>
        </div>
        <div class="flex gap-x-5 lg:gap-x-2.5">
          <span class="md:block hidden lg:w-40 w-[100px]">Change</span>
          <span class="lg:block hidden lg:w-40 w-[100px]">NFTs Sold</span>
          <span class=" lg:w-40 w-[100px]">Volume</span>
        </div>
      </div>
      <div>
        <div class="flex bg-secondary py-3 justify-between  px-5 rounded-base w-full">
          <div class="flex md:gap-x-5 gap-x-2.5 lg:w-[430px] md:w-[410px] items-center w-[200px]">
            <div
              class="md:w-[30px] md:h-[30px] w-6 h-6 rounded-base flex items-center justify-center font-mono text-sm md:text-base lg:bg-primary text-primary"
            >
              1
            </div>
            <img
              class="lg:w-[60px] lg:h-[60px] w-6 h-6"
              src="../assets/avatar-icons/avatar1.svg"
              alt=""
            />
            <h5 class="md:text-lg w-[300px] text-white md:font-bold text-base">
              Jaydon Ekstro
            </h5>
          </div>
          <div class="flex items-center gap-x-5 lg:gap-x-2.5">
            <span class="md:block hidden text-[#00AC4F] lg:w-[160px] w-[100px]"> +1.41% </span>
            <span class="lg:block hidden lg:w-[160px] w-[100px]">602</span>
            <span class="lg:w-[160px] w-[100px]">12.4 ETH</span>
          </div>
        </div>
      </div> -->
    </div>
  </div>
</template>
