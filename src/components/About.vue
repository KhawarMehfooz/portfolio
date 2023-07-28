<script>
export default{
    data(){
        return{
            subheading: "Who am I?",
            heading: "I develop <span class='gradient__text article__heading'>quality, accessible</span> websites.",
            description: "Hello, I'm Khawar Mehfooz from Kotli, Azad Kashmir, Pakistan. Currently, I am a third-year student of <span class='highlight__text'>BS Software Engineering </span> at the <span class='highlight__text'>University of Kotli Azad Jammu and Kashmir.</span>",
            moreDescription: "I am passionate about Web Development, and <span class='highlight__text'>since 2021</span>, I have been working as a <span class='highlight__text'>Freelance WordPress Developer</span> on <span class='highlight__text'>Fiverr</span>. On the platform, I help clients with Website Development, Bug fixing, and Website Customization using page builders and custom scripting with HTML, CSS, JavaScript, and PHP.<br><br>My <span class='highlight__text'>main expertise</span> lies in <span class='highlight__text'>Front-end development</span>, and I have a good knowledge of <span class='highlight__text'>HTML, CSS, and JavaScript</span>. Additionally, I am actively learning Back-end web development with PHP. Although I'm relatively new to PHP, I have the knowledge to develop fully functional database-driven CRUD web applications.<br><br>As a web developer, I am always eager to learn and grow. I am excited to work on new and challenging projects, and I'm open to collaborating with like-minded individuals in the industry."
        }
    }
}

</script>
<template>
        <article class="container">
            <div id="about" class="">
                <div class="about__left">
                    <h4 class="article__subheading">{{ subheading }}</h4>
                    <h2 class="article__heading" v-html="heading"></h2>
                </div>
                <div class="about__right">
                    <p class="about__description" v-html="description"> </p>
                </div>
            </div>
            <p class="about__description" v-html="moreDescription"></p>
        </article>
</template>
<style scoped>

#about{
    display: flex;
    margin-bottom: 1.5rem;
}
.about__left{
    width: 50%;
}
.about__right{
    width: 50%;
}
.about__description{
    color: var(--light-dark);
    line-height: 1.5;
    font-size: 1.5rem;
    text-align: justify;
}
@media only screen and (max-width:850px){
    .container{
        padding: 3rem 1rem;
    }
    #about{
        flex-direction: column;
        padding:1rem 0;
    }
    .about__left,
    .about__right{
        width: 100%;
    }
    .about__left{
        margin-bottom: 1rem;
    }  
}
@media only screen and (max-width:600px){
    .about__description{
        text-align: left;
        font-size: 1.3rem;
    }
}
</style>