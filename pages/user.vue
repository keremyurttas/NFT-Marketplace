<template>
  <div>
    <div class="">
      <img
        class="w-full lg:h-[320px] md:h-[280px] h-[250px]"
        style=""
        src="../assets/image-placeholder-4@1x.png"
        alt=""
      />

      <div class="my-container lg:w-auto py-0 pb-10">
        <div
          style="margin-top: -70px"
          class="md:w-max flex justify-center mb-8"
        >
          <img
            width="120"
            height="120"
            src="../assets/avatar-icons/Avatar Placeholder.svg"
            alt=""
            class="border rounded-base border-tertiary"
          />
        </div>
        <div class="lg:flex justify-between">
          <div class="space-y-8">
            <h2 class="lg:text-3xl md:text-2xl text-xl font-semibold">
              Animakid
            </h2>
            <div class="lg:hidden md:flex gap-x-5 space-y-4 md:space-y-0">
              <button class="btn-purple-primary-md px-5 md:w-max w-full">
                <img
                  width="20"
                  height="20"
                  src="../assets/mini-icons/Copy.svg"
                  alt=""
                />
                0xc0E3...B79C
              </button>
              <button class="btn-black-primary-md px-7 md:w-max w-full">
                <img
                  width="20"
                  height="20"
                  src="../assets/mini-icons/PlusPurple.svg"
                  alt=""
                />
                Follow
              </button>
            </div>
            <my-counter class="md:max-w-[65%] lg:max-w-none" :data="counter">
            </my-counter>
            <!-- <div class="flex justify-between lg:w-auto w-[315px] md:w-[510px]">
              <div v-for="cell in counter" class="grid pr-6 md:pr-24">
                <strong class="text-lg lg:text-xl font-bold font-mono"
                  >{{ cell.count }}+</strong
                >
                <span class="text-base lg:text-lg">{{ cell.text }}</span>
              </div>
            </div> -->
            <div class="text-primary lg:text-lg text-base">
              <h5 class="font-mono font-semibold">Bio</h5>
              <p class="text-white capitalize">
                The internet's friendliest designer kid.
              </p>
            </div>
            <div>
              <p class="font-mono font-semibold text-primary mb-2.5">Links</p>
              <div class="flex gap-x-2.5">
                <a href="discord.gg">
                  <img src="../assets/mini-icons/GlobeGray.svg" alt="" />
                </a>
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
          <div class="lg:flex hidden gap-x-5">
            <button class="btn-purple-primary-md px-5">
              <img
                width="20"
                height="20"
                src="../assets/mini-icons/Copy.svg"
                alt=""
              />
              0xc0E3...B79C
            </button>
            <button class="btn-black-primary-md px-7">
              <img
                width="20"
                height="20"
                src="../assets/mini-icons/PlusPurple.svg"
                alt=""
              />
              Follow
            </button>
          </div>
        </div>
      </div>
      <hr class="text-divider h-0.5" />
    </div>
    <div class="my-container py-0 pt-6">
      <div>
        <div class="flex w-full justify-evenly mb-1">
          <div class="w-1/2 flex justify-center">
            <div class="flex items-center gap-x-4 mb-4">
              <h5>Created</h5>
              <div
                class="hidden md:flex px-2.5 py-1 rounded-base bg-[#858584] font-mono items-center text-base"
              >
                302
              </div>
            </div>
          </div>

          <div
            class="text-primary items-center gap-x-4 w-1/2 flex justify-center mb-4"
          >
            <h5>Owned</h5>
            <div
              class="hidden md:flex p-2 rounded-base bg-secondary text-white font-mono items-center text-base"
            >
              302
            </div>
          </div>
          <div
            class="text-primary items-center gap-x-4 w-1/2 flex justify-center mb-4"
          >
            <h5>Collection</h5>
            <div
              class="hidden md:flex p-2 rounded-base bg-secondary text-white font-mono items-center text-base"
            >
              302
            </div>
          </div>
        </div>
        <hr class="w-1/3 text-primary h-0.5" />
      </div>
    </div>
    <div class="bg-secondary">
      <div class="my-container py-[60px]">
        <div
          class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-y-[30px]"
        >
          <DiscoverCard
            :index="i"
            :card="card"
            v-for="(card, i) in handleResponsivity"
          >
          </DiscoverCard>
        </div>
      </div>
      <hr class="text-secondary border-[1px]" />
    </div>
  </div>
</template>
<script setup>
import img1 from "../assets/discover-images/Image Placeholder.svg";
import img2 from "../assets/discover-images/Image Placeholder-1.svg";
import img3 from "../assets/discover-images/Image Placeholder-2.svg";
import avatar1 from "../assets/avatar-icons/avatar1.svg";
import avatar2 from "../assets/avatar-icons/avatar2.svg";
import avatar3 from "../assets/avatar-icons/avatar3.svg";

const counter = [
  {
    count: "250k",
    text: "Volume",
  },
  {
    count: 50,
    text: "Nfts Sold",
  },
  {
    count: 3000,
    text: "Followers",
  },
];
const discoverCards = [
  {
    img: img1,
    header: "Distant Galaxy",
    userAvatar: avatar1,
    userName: "MoonDancer",
    price1: 1.63,
    price2: 0.33,
    class: "bg-primary",
  },
  {
    img: img2,
    header: "Distant Galaxy",
    userAvatar: avatar2,
    userName: "MoonDancer",
    price1: 1.63,
    price2: 0.33,
    class: "bg-primary",
  },
  {
    img: img3,
    header: "Distant Galaxy",
    userAvatar: avatar3,
    userName: "MoonDancer",
    price1: 1.63,
    price2: 0.33,
    class: "bg-primary",
  },
  {
    img: img1,
    header: "Distant Galaxy",
    userAvatar: avatar1,
    userName: "MoonDancer",
    price1: 1.63,
    price2: 0.33,
    class: "bg-primary",
  },
  {
    img: img2,
    header: "Distant Galaxy",
    userAvatar: avatar2,
    userName: "MoonDancer",
    price1: 1.63,
    price2: 0.33,
    class: "bg-primary",
  },
  {
    img: img3,
    header: "Distant Galaxy",
    userAvatar: avatar3,
    userName: "MoonDancer",
    price1: 1.63,
    price2: 0.33,
    class: "bg-primary",
  },
  {
    img: img1,
    header: "Distant Galaxy",
    userAvatar: avatar1,
    userName: "MoonDancer",
    price1: 1.63,
    price2: 0.33,
    class: "bg-primary",
  },
  {
    img: img2,
    header: "Distant Galaxy",
    userAvatar: avatar2,
    userName: "MoonDancer",
    price1: 1.63,
    price2: 0.33,
    class: "bg-primary",
  },
  {
    img: img3,
    header: "Distant Galaxy",
    userAvatar: avatar3,
    userName: "MoonDancer",
    price1: 1.63,
    price2: 0.33,
    class: "bg-primary",
  },
  {
    img: img1,
    header: "Distant Galaxy",
    userAvatar: avatar1,
    userName: "MoonDancer",
    price1: 1.63,
    price2: 0.33,
    class: "bg-primary",
  },
  {
    img: img2,
    header: "Distant Galaxy",
    userAvatar: avatar2,
    userName: "MoonDancer",
    price1: 1.63,
    price2: 0.33,
    class: "bg-primary",
  },
  {
    img: img3,
    header: "Distant Galaxy",
    userAvatar: avatar3,
    userName: "MoonDancer",
    price1: 1.63,
    price2: 0.33,
    class: "bg-primary",
  },
];
let width;

onMounted(() => {
  window.addEventListener("resize", () => {
    width.value = document.documentElement.clientWidth;
  });
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", () => {
    width.value = document.documentElement.clientWidth;
  });
});
const handleResponsivity = computed(() => {
  // Computed logic here
  if (process.client) {
    width = ref(document.documentElement.clientWidth);
    if (width.value > 1280) return discoverCards;
    if (830 < width.value && width.value < 1280) {
      return discoverCards.slice(0, 6);
    } else if (width.value < 830) {
      return discoverCards.slice(0, 3);
    }
  } else {
    return 0; // Return a default value if running on the server-side
  }
});
</script>
