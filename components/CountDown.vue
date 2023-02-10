<template>
  <div
    class="p-[30px] bg-secondary rounded opacity-90 w-[315px] lg:w-min rounded-base h-min"
  >
    <div class="font-mono text-sm">Auction ends in:</div>
    <div class="text-2xl font-mono font-bold flex items-center">
      {{ hours }} <span class="text-xl mx-3.5">:</span>{{ minutes }}
      <span class="text-xl mx-3.5">:</span>{{ seconds }}
    </div>
    <div class="flex justify-between text-sm">
      <span>Hours</span><span>Minutes</span><span>Second</span>
    </div>
  </div>
</template>
<script setup>
const hours = ref(59);
const seconds = ref(59);

const minutes = ref(59);

const countDownTime = new Date("Jul 25, 2024 16:37:30").getTime();
let now = new Date().getTime();
const countDownTimer = function () {
  if (countDownTime - now > 0)
    setInterval(() => {
      now = new Date().getTime();
      var timeleft = countDownTime - now;

      hours.value = Math.floor(
        (timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      minutes.value = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
      seconds.value = Math.floor((timeleft % (1000 * 60)) / 1000);
      filter(hours);
      filter(minutes);
      filter(seconds);
    }, 1000);
};
const filter = function (par) {
  par.value < 10 ? (par.value = "0" + par.value) : par;
};

onMounted(() => {
  countDownTimer();
});
</script>
