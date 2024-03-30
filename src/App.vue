<script setup>
import Navbar from "./components/Navbar.vue";
import Hero from "./components/Hero.vue";
import About from "./components/About.vue";
import Skills from "./components/Skills.vue";
import Projects from "./components/Projects.vue";
import Testinomial from "./components/Testinomial.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <div class="max-w-4xl mx-auto pb-6 md:pb-12">
    <Navbar />
    <Hero />
    <About />
    <Skills />
    <Projects />
    <Testinomial />
    <Footer />
  </div>
</template>

<style scoped></style>
