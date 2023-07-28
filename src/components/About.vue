<script>
export default{
    data(){
        return{
            subheading: "Who am I?",
            heading: "I develop <span class='highlight__text article__heading'>quality, accessible</span> websites.",
            description: "Hi, my name is Khawar Mehfooz and I am a web developer with over 2 years of experience in the field. I specialize in front-end development and have a strong background in HTML, CSS, JavaScript, PHP, and WordPress. I am always looking to learn and grow as a developer, and I am excited to work on new and challenging projects."
        }
    }
}

</script>
<template>
    <article id="about">
        <div class="about__left">
            <h4 class="article__subheading">{{ subheading }}</h4>
            <h2 class="article__heading" v-html="heading"></h2>
        </div>
        <div class="about__right">
            <p class="about__description">{{ description }} </p>
        </div>
    </article>

</template>
<style>
#about{
    display: flex;
    padding: 3rem 0;
}
.about__left{
    width: 50%;
}
.about__right{
    width: 50%;
}
.about__description{
    color: var(--lightest);
    line-height: 1.5;
}
@media only screen and (max-width:850px){
    #about{
        flex-direction: column;
        padding: 0;
    }
    .about__left,
    .about__right{
        width: 100%;
    }
    .about__left{
        margin-bottom: 1rem;
    }
    .about__right{
        margin-bottom: 4rem;
    }   
}
</style>