<script setup >
import {RouterView} from 'vue-router'
import Navbar from './components/include/Navbar.vue'
import Footer from './components/include/Footer.vue'
</script >

<template >
  <div class="bg-[#FBFDFF]" >
    <Navbar />
    <router-view />
    <Footer />
  </div >
</template >