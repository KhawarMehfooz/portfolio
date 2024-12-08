<script setup>
const description =
  "Hey everyone, Khawar here! I'm web developer passionate about Laravel, Vue.js, and WordPress. I specialize in creating dynamic websites and web applications using PHP and WordPress. Explore my projects below!";
const socialLinks = {
  github: "https://github.com/Khawarmehfooz",
  fiverr: "https://fiverr.com/beingkhawar"
};
</script>
<template>
  <section class="flex mt-0 pb-4 lg:my-8 px-4 md:px-2">
    <div class="relative z-10 w-full md:w-2/3 mt-4 lg:mt-16">
      <h1
        class="text-3xl lg:text-4xl lg:leading-relaxed font-semibold leading-snug text-gray-900"
      >
        Web developer with a love for
        <span class="highlight laravel">Laravel</span>,
        <span class="highlight vue">Vue</span>, and
        <span class="highlight wordpress">WordPress</span>
      </h1>
      <p class="text-base mt-4 text-slate-700 leading-relaxed">
        {{ description }}
      </p>
      <div class="flex items-center justify-start mt-8">
        <a
          v-for="(url, name, index) in socialLinks"
          :key="index"
          class="block mr-8 md:mr-6 fill-current text-gray-900 hover:text-slate-500 transform hover:-translate-y-1 transition-all duration-200"
          :href="url"
          target="_blank"
          rel="noreferrer"
        >
          <img
            class="w-10 h-10 object-cover"
            :src="'/images/icons/' + name + '.svg'"
            :alt="name"
            loading="lazy"
          />
        </a>
      </div>
    </div>
    <div class="hidden md:block relative ml-8 w-1/3">
      <div>
        <div class="absolute left-0 top-8">
          <img
            class="relative z-10 w-24 h-24 animate-soft alt-1"
            src="/images/icons/laravel.svg"
            alt=""
            loading="lazy"
          />
          <div
            class="absolute -z-10 left-2 -bottom-12 w-16 h-16 rounded-full bg-slate-900 opacity-10 animate-soft-shadow"
          ></div>
        </div>
      </div>
      <div>
        <div class="absolute right-0 top-1/4">
          <img
            class="relative z-10 w-24 h-24 animate-soft alt-1"
            src="/images/icons/vuejs.png"
            alt=""
            loading="lazy"
          />
          <div
            class="absolute -z-10 left-4 -bottom-10 w-16 h-16 rounded-full bg-slate-900 opacity-10 animate-soft-shadow alt-1"
          ></div>
        </div>
      </div>
      <div>
        <div class="absolute left-12 bottom-16">
          <img
            class="relative z-10 w-24 h-24 animate-soft alt-1"
            src="/images/icons/wordpress.png"
            alt=""
            loading="lazy"
          />
          <div
            class="absolute -z-10 left-4 -bottom-8 w-16 h-16 rounded-full bg-slate-900 opacity-10 animate-soft-shadow alt-2"
          ></div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.animate-soft {
  animation-name: soft;
  animation-duration: 5s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
}
.animate-soft-shadow {
  animation-name: soft-shadow;
  animation-duration: 5s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
}
.animate-soft.alt-1 {
  animation-duration: 4s;
}
.animate-soft.alt-2 {
  animation-duration: 6s;
}
.animate-soft-shadow.alt-1 {
  animation-duration: 4s;
}
.animate-soft-shadow.alt-2 {
  animation-duration: 6s;
}
@keyframes soft {
  0% {
    transform: translateY(0.5rem) scale(0.95);
  }
  50% {
    transform: translateY(0);
  }
  to {
    transform: translateY(0.5rem) scale(0.95);
  }
}
@keyframes soft-shadow {
  0% {
    transform: scaleY(0.5) scaleX(1);
  }
  50% {
    transform: scaleY(0.35) scaleX(0.75);
  }
  to {
    transform: scaleY(0.5) scaleX(1);
  }
}
.highlight {
  position: relative;
  display: inline-block;
}
.highlight:after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0.375rem;
  z-index: -10;
  display: block;
  height: 0.5rem;
  width: 100%;
}
@media (min-width: 768px) {
  .highlight:after {
    bottom: 0.75rem;
  }
}
.highlight.laravel:after {
  background: #ff3226;
}
.highlight.vue:after {
  background: #81c784;
}
.highlight.wordpress:after {
  background: #1b769c;
}
</style>
