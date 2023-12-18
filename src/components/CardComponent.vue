<script setup >

</script >

<template >
  <div class="flex flex-col sm:flex-row justify-around items-center mt-10 " >
    <div class="flex flex-col items-center justify-center mb-6 sm:mb-0" >
      <div class="group h-60 sm:h-96 w-60 sm:w-96 [perspective:1000px]" >
        <div
            class="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d]
          group-hover:[transform:rotateY(180deg)]" >
          <div class="absolute inset-0" >
            <img
                alt="photo Valentin Fiess"
                class="rounded-xl object-cover shadow-xl shadow-black/40"
                src="/public/assets/assets_index/Profile.webp" />
            <span
                class="fa-solid fa-arrow-pointer fa-beat-fade inline-flex w-3 h-3 absolute right-0 bottom-0 text-2xl text-neutral-950" >
            </span >
          </div >
          <div
              class="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-8 sm:px-12 text-center text-neutral-200
            [transform:rotateY(180deg)]
            [backface-visibility:hidden]" >
            <div class="flex min-h-full flex-col items-center justify-center space-y-4 sm:space-y-6 " >
              <h2 class="text-xl sm:text-3xl font-regular" >Valentin Fiess</h2 >
              <h2 class="font-light text-base sm:text-lg underline" >Développeur Web</h2 >
              <p class="font-light text-sm sm:text-base" >J'ai 21 ans et je suis un développeur débutant sur
                                                          Montpellier,
                                                          je m'intéresse aux nouvelles
                                                          technologies notamment celle du web.</p >
            </div >
          </div >
        </div >
      </div >
    </div >
  </div >
</template >