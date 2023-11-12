<script>
export default{
    data(){
        return{
            projects: [
                {
                    name: "Tip Calculator App",
                    description: "A tip calculator app challenge by front-end mentor.",
                    img: "/images/tip-calculator-app.png",
                    liveLink: "https://tip-calculator-app-by-khawar.vercel.app/",
                    githubLink: "https://github.com/Khawarmehfooz/Front-End-Mentor-Challenges/tree/main/tip-calculator-app",
                    tags: [
                        {
                            id: 'html',
                            name: 'html'
                        },
                        {
                            id: 'css',
                            name: 'css'
                        }, {
                            id: 'javascript',
                            name: "javascript"
                        }
                    ]
                }, {
                    name: "Advice Generator App",
                    description: "A advice generator app challenge by front-end mentor.",
                    img: "/images/advice-generator-app.png",
                    liveLink: "https://advice-generator-app-by-khawar.vercel.app/",
                    githubLink: "https://github.com/Khawarmehfooz/advice-generator-app",
                    tags: [
                        {
                            id: 'html',
                            name: 'html'
                        },
                        {
                            id: 'css',
                            name: 'css'
                        }, {
                            id: 'javascript',
                            name: "javascript"
                        }
                    ]
                }, {
                    name: "Age Calculator App",
                    description: "An age calculator app challenge by front-end mentor.",
                    img: "/images/age-calculator-app.png",
                    liveLink: "https://age-calculator-app-by-khawar.vercel.app/",
                    githubLink: "https://github.com/Khawarmehfooz/Front-End-Mentor-Challenges/tree/main/age-calculator-app",
                    tags: [
                        {
                            id: 'html',
                            name:'html'
                        },
                        {
                            id: 'css',
                            name: 'css'
                        },{
                            id: 'javascript',
                            name: "javascript"
                        }
                    ]
                }
                , {
                    name: "Blogging Web Application",
                    description: "A Simple blogging Web application built using PHP.",
                    img: "/images/blog.png",
                    liveLink: "https://github.com/Khawarmehfooz/blog",
                    githubLink: "https://github.com/Khawarmehfooz/blog",
                    tags: [
                        {
                            id: 'html',
                            name: 'html'
                        },
                        {
                            id: 'css',
                            name: 'css'
                        }, {
                            id: 'javascript',
                            name: "javascript"
                        }, {
                            id: 'php',
                            name: "php"
                        }
                    ]
                },{
                    name: "Expense Tracker",
                    description: "An expense tracker web application using vue.js.",
                    img: "/images/expense-tracker.png",
                    liveLink: "https://expense-tracker-vue.vercel.app/",
                    tags: [
                        {
                            id: 'html',
                            name: 'html'
                        },{
                            id: 'css',
                            name: 'css'
                        },{
                            id: 'vue',
                            name: 'vue.js'
                        }
                    ]
                }
            ]
        }
    }
}
</script>
<template>
    <section class="container" id="projects">
        <h2 class="article__heading">Projects</h2>
        <ul class="projects__list">
            <li v-for="project in projects">
                <article class="project__card" >
                    <a :href="project.liveLink">
                        <img class="project__img" :src="project.img" alt="">
                        <section class="project__details">
                            <h5 class="project__name">{{ project.name }}</h5>
                            <p class="project__description">{{ project.description }}</p>
                            <div class="skills__tag"  >
                                <span v-for="tag in project.tags" :id="tag.id" class="tag tag__html">#{{ tag.name }}</span>
                            </div>
                        </section>
                    </a>

                </article>
            </li>
        </ul>
    </section>
</template>
<style scoped>
.projects__list{
    margin-top: 1rem;
    display: grid;
    grid-template-columns: repeat(4,1fr);
    gap: 2rem 1rem;
}

.project__card{
    width: 19.5rem;
    background-color: var(--darkest);
    border-radius: .5rem;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
.project__img{
    border-top-left-radius: .5rem;
    border-top-right-radius: .5rem;
    opacity: 0.8;
    width: 100%;
    aspect-ratio: 16/9;
}
.project__details{
    padding: 1.25rem;
}
.project__description{
    font-size: 1rem;
    color: var(--light-dark);
    min-height: 100px;
    margin: .75em 0;
}
.skills__tag{
    display: flex;
    gap: .5rem;
}
.tag{
    font-family: 'sofia_promedium';
    font-size: .9rem;
    padding: .25rem .5rem .375rem;
    border-radius: .375rem;
    line-height: 1rem;
}
#html{
    background-color: var(--html-clr);
}
#css{
    background-color: var(--css-clr);
}
#javascript{
    background-color: var(--js-clr);
    color: var(--darkest);
}
#php{
    background-color: var(--php-clr);
}
#vue{
    background-color: var(--vue-clr);
}
@media only screen and (max-width:1024px){
    .projects__list{
        grid-template-columns: repeat(2,1fr);
        gap: 2rem;

    }
}
@media  only screen and (max-width:768px) {
    .projects__list{
        grid-template-columns: repeat(1,1fr);
        place-items: center;
    }
    
}
@media only screen and (max-width:600px){
    .projects__list{
        justify-content: center;
    }
}

</style>