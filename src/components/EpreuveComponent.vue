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
  <div class="mx-auto max-w-md overflow-hidden rounded-xl bg-transparent shadow-lg my-20 p-8" >
    <img
        :alt=alt :src=image
        class="ext-center mx-auto mb-10 rounded-xl w-52 h-52" >
    <div class="p-4 text-center" >
      <p class="mt-1 text-xl text-neutral-900" >{{ description }}</p >
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