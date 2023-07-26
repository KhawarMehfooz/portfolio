<script>
export default {
    data() {
        return {
            navigations: {
                "About": "#",
                "Skills": "#",
                "Projects": "#",
                "Testimonials": "#",
            },
            isActive: false,
            isHidden: false
        }
    },
    methods: {
        // Toggle Navigation Menu on Mobile
        toggleActive() {
            this.isActive = !this.isActive
            this.isHidden = !this.isHidden
        }
    }
}
</script>
<template>
    <nav role="navigation">
        <div class="brand">
            <h1>Khawar Mehfooz</h1>
        </div>
        <ul class="nav__items" :class="{ active: isActive }">
            <li v-for="(link, navigation, index) in navigations" class="nav__item"><a :href="link" class="nav__link">{{
                navigation }}</a></li>
        </ul>
        <div class="cta">
            <a href="mailto:khawarmehfooz@outlook.com">Hire Me</a>
        </div>
        <div class="nav__toggle">
            <button @click="toggleActive" class="toggle__buttons" :class="{ hide: isHidden }" aria-label="open navigation"
                id="open__nav">
                <i class="fas fa-bars fa-xl"></i>
            </button>
            <button @click="toggleActive" class="toggle__buttons" :class="{ hide: !isHidden }" aria-label="open navigation"
                id="close__nav">
                <i class="fas fa-x fa-xl"></i>
            </button>
        </div>

    </nav>
</template>

<style scoped>
body {
    position: relative;
}
.brand h1{
    color: var(--brand);
    font-size: 2.2rem;
}

nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 2rem 0;
    position: relative;
}

.nav__items {
    display: flex;
    align-items: center;
    gap: 4rem;
}

li {
    list-style-type: none;
}

a {
    color: var(--lightest);
    font-weight: 600;
    text-decoration: none;
}
.cta a{
    background-color: var(--brand);
    padding: 8px 20px;
    border-radius: 6px;
}

a:hover {
    text-decoration: underline;
}

.toggle__buttons {
    background-color: transparent;
    outline: none;
    border: none;
    cursor: pointer;
    display: none;
}

.nav__toggle {
    display: none;
}

@media only screen and (max-width:800px) {

    .nav__items {
        gap: 2rem;
    }

}

@media only screen and (max-width:1024px) {
    .hide {
        display: none !important;
    }
    .cta{
        display: none;
    }
    .nav__items {
        position: absolute;
        flex-direction: column;
        gap: 1rem;
        top: -500px;
        width: 100%;
        background-color: var(--darkest);
        padding-bottom: 6rem;
    }
    .active {
        top: 50px;
    }

    .nav__toggle {
        display: block;
    }

    #open__nav {
        display: block;
        margin-left: 1rem;
    }

    #close__nav {
        display: block;
    }
}
@media only screen and (max-width:600px){
    .brand h1{
        font-size: 1.5rem;
    }
}
</style>