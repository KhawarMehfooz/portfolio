<script>
export default{
    data(){
        return{
            subheading: "Web Developer",
            heading: "Hi!👋I'm <span class='gradient__text'> Khawar Mehfooz</span>",
            description: "I'm a Web developer based in  <span class='highlight__text'>Azad Kashmir, Pakistan.</span>",
            img: "/images/khawar-mehfooz.webp"
        }
    }
}
</script>
<template>
    <main class="hero">
        <div class="hero__left">
            <h3 class="hero__left--subheading">{{ subheading }}</h3>
            <h1 class="hero__left--heading" v-html="heading"></h1>
            <p class="hero__left--description" v-html="description"></p>
            <div class="hero__left--buttons">
                <a class="work__btn" role="button" href="#">See my work</a>
                <a class="cta__btn" role="button" href="mailto:khawarmehfooz@oulook.com">Get in touch</a>
            </div>
        </div>
        <div class="hero__right">
            <img :src="img" alt="">
        </div>

    </main>
</template>
<style scoped>
.hero{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 6rem 4rem;
    gap: 1rem;
}
.hero__left--subheading{
    color: var(--light-dark);
    text-transform: uppercase;
    margin-bottom: .5rem;
}
.hero__left--heading{
    font-size: 3rem;
    color: var(--lightest);
    line-height: 1.3;
}

.hero__left--description{
    color: var(--mid);
    font-size: 1.8rem;
    margin-bottom: 2rem;
    text-wrap:balance;
}
.hero__left--buttons{
    display: flex;
    align-items: center;
    gap: 2rem;
}
.hero__left--buttons a{
    padding: .5rem 1rem;
    border-radius: 6px;
    font-weight: 600;
    font-size: 22px;
}
.work__btn{
    border: 1px solid var(--lightest);
    font-family: 'sofia_promedium' !important;

}
.work__btn:hover{
    background-color:var(--lightest);
    color: var(--darkest);
}
.cta__btn{
    background: linear-gradient(to top, var(--brand),#eab308);
    border:1px solid transparent;
  font-family: 'sofia_promedium' !important;

}
.cta__btn:hover{
    background-color: transparent;
    border: 1px solid var(--brand);
}

.hero__right img{
    width: 400px;
    border-radius: 6px;
}
@media only screen and (max-width:975px){
    .hero{
        padding: 6rem 0rem;
    }

}
@media only screen and (max-width:850px){
    .hero__right{
        display: none;
    }
    
}
@media only screen and (max-width:766px){
    .hero{
        padding:2rem 0;
        justify-content: center;
        flex-direction: column;
    }
    .hero__left{
        text-align: center;
    }
    .hero__right{
        display: block;
    }
    .hero__right img{
        width: 100%;
    }
    .hero__left--heading{
        text-align: center;
        font-size: 2.5rem;
        
    }
    .hero__left--description{
        font-size: 1.3rem !important;

    }
    .hero__left--buttons{
        justify-content: center;
    }
    .hero__left--buttons a{
        font-size: 18px;
    }
}
</style>