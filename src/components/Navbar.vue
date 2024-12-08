<script setup>
const navigation = [
  {
    name: "Projects",
    link: "#projects",
    icon: "/images/code.png",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
    icon: "/images/testimonial.png",
  },
  {
    name: "Contact",
    link: "mailto:khawarmehfooz@outlook.com",
    icon: "/images/envelope.png",
    cta: true,
  },
];
const logoImageUrl = "/images/khawar-mehfooz.jpg";
</script>
<template>
  <header class="border-b-2 border-gray-800">
    <div
      class="container mx-auto px-3 md:px-0 flex flex-wrap py-4 flex-col md:flex-row items-center"
    >
      <a
        href="/"
        id="link-home"
        class="flex title-font font-semibold items-center text-gray-900 mb-4 md:mb-0 hover:opacity-75 transition-opacity duration-200"
      >
        <img
          :src="logoImageUrl"
          alt="Khawar mehfooz profile picture"
          class="w-16 h-16 rounded-full"
          loading="lazy"
        />
      </a>
      <nav
        class="w-full md:w-auto md:ml-auto flex flex-wrap items-center justify-center gap-4 md:gap-0 font-normal text-base text-gray-900 space-x-0 md:space-x-4"
      >
        <a
          v-for="(navigation, index) in navigation"
          :href="navigation.link"
          :key="index"
          :class="{ cta__button: navigation.cta }"
          class="nav__item flex items-center gap-2 py-1.5 px-3 md:px-4 rounded-sm border-2 border-gray-800 shadow-none"
        >
          <img class="w-5" :src="navigation.icon" alt="" loading="lazy" />
          {{ navigation.name }}</a
        >
      </nav>
    </div>
  </header>
</template>
<style scoped>
.nav__item {
  box-shadow: 3px 3px;
}
.nav__item:hover {
  box-shadow: 4px 4px;
  transition: 0.3s ease-in-out;
}
.cta__button {
  background-color: #fec340 !important;
}
</style>
