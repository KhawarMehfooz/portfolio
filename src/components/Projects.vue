<script setup>
const projects = [
  {
    name: "Virtual Outcomes - Templates For Post Types",
    img: "/images/projects/virtual-outcomes-thumbnail.webp",
    link: "https://virtualoutcomes.co.uk/pharmacy-training/",
    refercenceLink: "https://www.fiverr.com/users/beingkhawar/portfolio/NjZiYWMwMTBlMTJjNzMwMDAxYmE2OWFl",
    referenceLogo: "/images/Fiverr-Logo.png",
    tags: [
      {
        id: "html",
        name: "html",
      },
      {
        id: "css",
        name: "css",
      },
      {
        id: "javascript",
        name: "javascript",
      },
      {
        id: "php",
        name: "php",
      },
    ],
  },
  {
    name: "VO Data - Edit or Remove Posts From Taxonomy - WordPress",
    img: "/images/projects/vo-data-preview.webp",
    link: "https://www.fiverr.com/users/beingkhawar/portfolio/NjZlYTJmNDI0M2ViYzYwMDAxYTc0ZGU0",
    refercenceLink: "https://www.fiverr.com/users/beingkhawar/portfolio/NjZlYTJmNDI0M2ViYzYwMDAxYTc0ZGU0",
    referenceLogo: "/images/Fiverr-Logo.png",
    tags: [
      {
        id: "html",
        name: "html",
      },
      {
        id: "css",
        name: "css",
      },
      {
        id: "javascript",
        name: "javascript",
      },{
        id: "php",
        name: "php",
      },
    ],
  },
  {
    name: "Justimmo API Integration into WordPress",
    img: "/images/projects/justimmo-preview.png",
    link: "https://www.fiverr.com/users/beingkhawar/portfolio/Njc0ZDFlYzJiMTU5MTQwMDAxMjI0MWZk",
    downloadLink: "https://github.com/Khawarmehfooz/expense-tracker",
    refercenceLink: "https://www.fiverr.com/users/beingkhawar/portfolio/Njc0ZDFlYzJiMTU5MTQwMDAxMjI0MWZk",
    referenceLogo: "/images/Fiverr-Logo.png",
    tags: [
    {
        id: "html",
        name: "html",
      },
      {
        id: "css",
        name: "css",
      },
      {
        id: "javascript",
        name: "javascript",
      },{
        id: "php",
        name: "php",
      },
    ],
  },
];
</script>

<template>
  <section class="pt-4 pb-8 lg:pb-16 border-y-2 border-gray-800">
    <div id="projects" class="px-4 md:px-2">
      <h2
        class="text-2xl lg:text-3xl lg:leading-relaxed font-semibold leading-snug text-gray-900"
      >
        Projects
      </h2>
      <div class="grid projects__grid mt-4">
        <article
          v-for="(project, index) in projects"
          :key="index"
          class="border rounded border-gray-800 h-fit"
        >
          <a :href="project.link">
            <div class="relative border-b border-gray-800">
              <div class="">
                <img
                  class="rounded-t w-[100%] bg-cover object-cover aspect-video"
                  :src="project.img"
                  alt=""
                  loading="lazy"
                />
              </div>
            </div>
          </a>
          <header class="px-4 py-2 border-b border-gray-800">
            <h3 class="text-xl font-medium">{{ project.name }}</h3>
          </header>
          <footer class="flex">
            <div
              class="w-[80%] flex items-center flex-wrap p-1 gap-1 md:p-2 md:gap-2 border-r border-gray-800"
            >
              <span
                v-for="tag in project.tags"
                :id="tag.id"
                class="tag tag__html uppercase font-semibold text-sm"
                >#{{ tag.name }}</span
              >
            </div>
            <div class="p-2 w-[20%]">
              <a :href="project?.refercenceLink">
                <img class="w-[70%] mx-auto" :src="project?.referenceLogo" alt="" />
              </a>
            </div>
          </footer>
        </article>
      </div>
    </div>
  </section>
</template>
<style scoped>
:root {
  --html-clr: #e65100;
  --css-clr: #0277bd;
  --js-clr: #ffd600;
  --vue-clr: #42b883;
  --php-clr: #617cbe;
  --mysql-clr: #00758f;
  --git-clr: #f4511e;
  --wp-clr: #1b769c;
}
.projects__grid {
  --min-grid-absolute-size: 16rem;
  --max-grid-relative-size: 50%;
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(
      max(
        min(var(--min-grid-absolute-size), 100%),
        var(--max-grid-relative-size) - 1rem
      ),
      1fr
    )
  );
  gap: 1rem;
}
.tag {
  font-family: inherit;
  font-size: 0.9rem;
  padding: 0.25rem 0.5rem 0.375rem;
  border-radius: 0.375rem;
  line-height: 1rem;
}
#html {
  background-color: #e65100;
  color: white;
}
#css {
  background-color: #0277bd;
  color: white;
}
#javascript {
  background-color: #ffd600;
}
#php {
  background-color: #617cbe;
  color: white;
}
#vue {
  background-color: #42b883;
}
</style>
