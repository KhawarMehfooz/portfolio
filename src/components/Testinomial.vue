<template>
    <!-- Testomonial -->
    <section class="container">
      <article id="testimonials">
        <h2 class="article__heading">Testimonials</h2>
        <div class="testimonial-grid">
          <article class="testimonial col-span-2">
            <div class="author-info">
              <div class="author-photo">
                <img
                  class="author-img"
                  src="/images/jasonnorman.webp"
                  alt="Profile Image"
                />
              </div>
              <div class="author-details">
                <p class="author-name">Jason Norman</p>
                <p class="author-status">United Kingdom</p>
              </div>
            </div>
            <div class="testimonial-content">
              <p class="testimonial-title">
                “Khawa IS one of the first people on Fiverr to provide fluid
                typography, he is really helpful, extremely efficient and knows what
                he is talking about. He went above and beyond to help me with my
                website. Professional with good communication skills I highly
                recommend Khawa! thank you !!!”
              </p>
            </div>
          </article>
          <article class="testimonial">
            <div class="author-info">
              <div class="author-photo">
                <img
                  class="author-img"
                  src="/images/j.png"
                  alt="Yohan Profile Image"
                />
              </div>
              <div class="author-details">
                <p class="author-name">Joseph</p>
                <p class="author-status">Philippines</p>
              </div>
            </div>
            <div class="testimonial-content">
              <p class="testimonial-title">
                “khawar is very much flexible and helpful. he also knows what he is doing and we look forward on having more projects with him.”
              </p>
            </div>
          </article>
          <article class="testimonial">
            <div class="author-info">
              <div class="author-photo">
                <img
                  class="author-img"
                  src="/images/S.png"
                  alt="Profile Image"
                />
              </div>
              <div class="author-details">
                <p class="author-name">Saurab</p>
                <p class="author-status">Australia</p>
              </div>
            </div>
            <div class="testimonial-content">
              <p class="testimonial-title">
                “Khawar did a great job identifying the problem I was facing. He was
                quick in his response and delivered the work before time. Highly
                recommended.”
              </p>
            </div>
          </article>
          <article class="testimonial col-span-2">
            <div class="author-info">
              <div class="author-photo">
                <img
                  class="author-img"
                  src="/images/a.png"
                  alt="Profile Image"
                />
              </div>
              <div class="author-details">
                <p class="author-name">Anders Sundström</p>
                <p class="author-status">Swedan</p>
              </div>
            </div>
            <div class="testimonial-content">
              <p class="testimonial-title">
                "Highly recommended to boost function, design elements and widgets, anything out of the ordinary. Customization and modification to really create unique features. Easy to work with, respectable and proactive"
              </p>
            </div>
          </article>
          <article class="testimonial">
            <div class="author-info">
              <div class="author-photo">
                <img
                  class="author-img"
                  src="/images/M.png"
                  alt="Jason's Profile Image"
                />
              </div>
              <div class="author-details">
                <p class="author-name">Mark Bedella</p>
                <p class="author-status">United States</p>
              </div>
            </div>
            <div class="testimonial-content">
              <p class="testimonial-title">
                “Blown away by his original designs. I communicated expectations and
                Khawar put his creativity to work. He provided several drafts and
                asked me to choose. Khawar is a professional and designed according
                to his imagination and my expectations. I appreciate that. I had
                zero problems with communication and overall I am extremely pleased
                and highly recommend.”
              </p>
            </div>
          </article>
        </div>
        <div class="fiverr__btn">
          <a
            role="button"
            aria-label="View Moew on Fiverr"
            href="https://www.fiverr.com/beingkhawar">View More on Fiverr</a
          >
        </div>
      </article>
    </section>
</template>
<style scoped>
.testimonial-grid {
    padding-block: 32px;
    display: grid;
    gap: 24px;
}

.testimonial {
    border-radius: 5px;
    padding: 32px;
    color: white;
    border-top: 4px solid var(--brand);
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

/* Author Info */
.author-info {
    display: flex;
    align-items: center;
    gap: 15px;
}

.author-img {
    border-radius: 50%;
    width: 30px;
}

.author-name {
    font-size: 1rem;
    color:var(--light-dark);
}

.author-status {
    font-size: 1rem;
    color:var(--light-dark);

}

.testimonial-title {
    font-size: 1.2rem;
    margin: 10px 0;
    color: var(--light);
}

/* Fiverr Btn */
.fiverr__btn {
    width: fit-content;
    margin-inline: auto;
    background-color: var(--brand);
    /* background: linear-gradient(to top, var(--brand),#eab308); */
    border: 2px solid transparent;
    border-radius: 0.2rem;
}

.fiverr__btn:hover {
    border-color: var(--brand);
    background-color: transparent;
}


.fiverr__btn a {
    display: block;
    padding: .7rem;
    color: var(--dark-2);
    font-size: 1.2rem;
}
.fiverr__btn:hover a{
  color: var(--brand);
}

@media (min-width: 50em) {
    .testimonial-grid {
        grid-template-columns: repeat(4, 1fr);
    }

    .col-span-2 {
        grid-column: span 2;
    }

    .testimonial:last-child {
        grid-column-start: 4;
        grid-row-start: 1;
        grid-row-end: span 2;
    }
}

@media screen and (max-width: 800px) {
    #testimonials {
        margin-bottom: 5rem;
        padding: 3rem 0;
    }
}

@media screen and (max-width: 600px) {
    #testimonials {
        margin-bottom: 2rem;
        padding: 1rem 0;
    }
}
</style>