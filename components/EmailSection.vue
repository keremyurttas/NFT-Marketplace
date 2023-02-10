<template>
  <div class="my-container">
    <div
      class="lg:p-[60px] md:px-[30px] md:py-10 md:flex items-center md:bg-secondary md:rounded-base"
    >
      <img
        class="lg:mr-20 mr-8 lg:w-[425px] w-[315px] h-[255px] lg:h-[310px] md:w-[300px] md:h-[280px] mb-[30px] md:mb-0"
        src="../assets/Asthronot.svg"
        alt=""
      />
      <div class="">
        <div class="mb-10">
          <h3 class="my-header mb-2.5 max-w-[350px] capitalize leading-normal">
            Join our weekly digest
          </h3>
          <span class="lg:text-lg text-base leading-large"
            >Get exclusive promotions & updates straight to your inbox.
          </span>
        </div>
        <div class="lg:flex">
          <input
            class="lg:w-[425px] w-full py-4 px-5 placeholder:capitalize placeholder:text-base lg:h-[60px] lg:-mr-[210px] h-[46px] rounded-base mb-4 lg:mb-0"
            placeholder="Enter your email adress"
            type="text"
          />
          <button
            class="btn-purple-primary-md lg:w-max lg:h-[60px] h-[46px] w-full flex"
          >
            <img
              width="20"
              height="20"
              src="../assets/mini-icons/EnvelopeSimple.svg"
              alt=""
            />
            Subscribe
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
