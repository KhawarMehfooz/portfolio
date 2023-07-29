<script>
export default {
    data(){
        return{
            skills: [
                {
                    name: "html",
                    img: "/images/html.png"
                },
                {
                    name: "css",
                    img: "/images/css.png"
                },
                {
                    name: "javascript",
                    img: "/images/js.png"
                },
                {
                    name: "vue.js",
                    img: "/images/vuejs.png"
                },
                {
                    name: "php",
                    img: "/images/php.png",
                    id:"php"
                },
                {
                    name: "mysql",
                    img: "/images/mysql.png"
                }, 
                {
                    name: "git",
                    img: "/images/git.png"
                },
                {
                    name: "wordpress",
                    img: "/images/wordpress.png"
                }
            ]
        }
    }
}
</script>

<template>
    <article class="container" id="skills">
        <div class="article__heading">
            Skills
        </div>
        <div class="skills__container">
            <div class="skill__card" v-for="skill in skills">
                <img :id="skill.id" class="skill__card__img" :src="skill.img" :alt="skill.name">
            </div>
        </div>
    </article>

</template>
<style scoped>
.article__heading{
    margin-bottom: 2rem;
}
.skills__container{
    display: flex;
    flex-wrap: wrap;
}
#php{
    margin-top: 15px;
}

.skill__card{
    width: 7rem;
    height: 7rem;
    background-color: var(--dark-2);
    padding: 1.2rem;
    border-bottom: 4px solid var(--brand);
    border-radius: 8px;
    margin: 0 .5rem 1rem 0.5rem;
}
@media only screen and (max-width:600px){
    .skills__container{
        /* justify-content: center; */
        display: grid;
        grid-template-columns: repeat(3,1fr);
    }

}
</style>