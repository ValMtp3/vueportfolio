<script setup>
import { RouterView } from 'vue-router'
import Navbar from './components/include/Navbar.vue'
import Footer from './components/include/Footer.vue'
</script>

<template>
    <Navbar />
    <router-view />
    <Footer />
</template>