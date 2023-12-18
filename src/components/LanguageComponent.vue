<script setup >
defineProps({
  image: {
    type: String,
    required: true
  },
  alt: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  }
})
</script >

<template >
    <div class="rounded-xl shadow-lg m-10 px-5 transition duration-300 hover:bg-gray-50 " >
      <img
          :alt="alt" :src="image"
          class="w-52 h-52 mx-auto mt-10 rounded-xl"
          :title="title" >
      <div class="p-4 text-center" >
        <p class="mt-1 text-xl text-neutral-900 flex justify-center text-start" >{{ title }}</p >
      </div >
    </div >
</template >