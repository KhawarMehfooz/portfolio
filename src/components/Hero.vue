<template>
    <main class="hero">
        <div class="hero__left">
            <h3 class="hero__left--subheading">Web Developer</h3>
            <h1 class="hero__left--heading">Hi!👋I'm Khawar Mehfooz</h1>
            <p class="hero__left--description">I'm a Web developer based in Azad Kashmir, Pakistan.</p>
            <div class="hero__left--buttons">
                <a class="work__btn" role="button" href="#">See my work</a>
                <a class="cta__btn" role="button" href="mailto:khawarmehfooz@oulook.com">Get in touch</a>
            </div>
        </div>
        <div class="hero__right">
            <img src="/public/images/khawar-mehfooz.webp" alt="">
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
    margin-bottom: 2rem;
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
}
.work__btn:hover{
    background-color:var(--lightest);
    color: var(--darkest);
}
.cta__btn{
    background-color: var(--brand);
    border:1px solid transparent;;
}
.cta__btn:hover{
    color: var(--brand);
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
        font-size: 1rem;
    }
    .hero__left--buttons{
        justify-content: center;
    }
    .hero__left--buttons a{
        font-size: 18px;
    }
}

</style>