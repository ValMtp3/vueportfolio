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
  date: {
    type: String,
    required: true
  },
  team: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  src: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  }
})
</script >

<template >
  <div class="mx-auto max-w-md overflow-hidden rounded-xl bg-transparent shadow-lg my-20 p-10" >
    <img
        :alt=alt class="ext-center mx-auto mb-10 rounded-xl w-60 h-60"
        :src=image >
    <div class="p-4 text-center" >
      <p class="text-primary-500 mb-1 text-sm font-light" >{{ team }} •
        <time >{{ date }}</time >
      </p >
      <p class="mt-1 text-xl text-neutral-900" >{{ description}}</p >
      <a :href=src target="_blank" >
        <button
            class="ml-auto transform hover:scale-110 motion-reduce:transform-none
            font-light rounded-xl
            border-2 p-2 transition duration-300 hover:bg-neutral-200 border-neutral-950 m-5 " >{{ name }}
        </button >
      </a >
    </div >
  </div >
</template >