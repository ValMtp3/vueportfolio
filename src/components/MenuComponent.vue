<script setup>
import { ref } from 'vue';

const menuItems = ref([
  { href: "#propos", text: "A propos" },
  { href: "#formation", text: "Formation" },
  { href: "#Projet", text: "Projets" },
  { href: "#EpreuveE5", text: "Epreuve E5" },
  { href: "#EpreuveE4", text: "Epreuve E4" },
  { href: "#VeilleTechno", text: "Veille Technologique" },
]);
</script>

<template>
  <ul class="space-y-2">
    <li v-for="item in menuItems" :key="item.text" class="text-xl transition-all duration-100 hover:text-3xl hover:font-semibold">
      <a :href="item.href" class="block py-2 sm:py-5">— {{ item.text }}</a>
    </li>
  </ul>
</template>