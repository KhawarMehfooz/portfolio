<script>
export default{
    data(){
        return{
            projects: [
                {
                    name: "Tip Calculator App",
                    description: "lorem inpusm jel jelo jel jesah hes",
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
                    description: "lorem inpusm jel jelo jel jesah hes",
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
                    description: "lorem inpusm jel jelo jel jesah hes",
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
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
}

.project__card{
    width: 19.5rem;
    border-radius: .5rem;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
.project__img{
    border-top-left-radius: .5rem;
    border-top-right-radius: .5rem;
    width: 100%;
    aspect-ratio: 16/9;
}
.project__details{
    padding: 1.25rem;
}
.project__name{

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
    font-size: .8rem;
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

</style>