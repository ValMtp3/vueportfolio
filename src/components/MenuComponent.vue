<script setup>
import { ref } from 'vue';

const menuItems = ref([
  { href: "#propos", text: "A propos" },
  { href: "#formation", text: "Formation" },
  { href: "#Projet", text: "Projets" },
]);
</script>

<template>
  <ul class="space-y-2">
    <li v-for="item in menuItems" :key="item.text" class="text-xl hover:text-3xl hover:font-semibold">
      <a :href="item.href" class="block py-2 sm:py-5 transition-all duration-200">— {{ item.text }}</a>
    </li>
  </ul>
</template>