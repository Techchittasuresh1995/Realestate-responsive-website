/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header = document.getElementById('header')
    // when the scroll is greater than 50 viewport height, add the
    if(this.scrollY >= 50) header.classList.add('scroll-header');
}
window.addEventListener('scroll', scrollHeader)
/*=============== SWIPER POPULAR ===============*/
var swiperPopular = new Swiper(".popular__container",{
    spaceBetween: 32,
    grabCursor:true,
    centeredSlides:true,
    slidesPerView:'auto',
    loop:true,
    navigation:{
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev",
    },
});
/*=============== VALUE ACCORDION ===============*/
const accordionItems = document.querySelectorAll('.value__accordion-item')
accordionItems.forEach((chitta)=>{
    const accordionHeader = chitta.querySelector('.value__accordion-header')
    accordionHeader.addEventListener('click',() =>{
        hardItem(chitta)
    })
})

const hardItem = (a) => {
    const accordionContent = a.querySelector('.value__accordion-content')
        if(a.classList.contains('open')){
            accordionContent.removeAttribute('style')
            a.classList.remove('open')
        }else{
            a.classList.add('open')
            accordionContent.style.height = accordionContent.scrollHeight + 'px'
        }
}

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.oofsetHeight,
        sectionTop = current.offsetTop - 58,
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)
/*=============== SHOW SCROLL UP ===============*/ 

function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // when the scroll is higher than 350 viewport height,add the show-scroll class to the a tag with the scroll-
    if(this.scrollY >= 350) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)
/*=============== DARK LIGHT THEME ===============*/ 

const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'

// previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')

const selectedIcon = localStorage.getItem('selected-icon')

// we obtain the current theme the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun' 

// we validate if the user previously chose a topic
if(selectedTheme){
    // if the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate/deactivate the theme manually with the button
themeButton.addEventListener('click', ()=>{
    // add or remove the dark / icon Theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme',getCurrentTheme())
    localStorage.setItem('selected-icon',getCurrentIcon())
})
/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin:'top',
    distance:'60px',
    duration:2500,
    delay:400,
    reset:true
})

sr.reveal(`.home__title, .popular__container,.subscribe__container,.footer__container`)
sr.reveal(`.home__description,.footer__info`, {delay:500})
sr.reveal(`.home__search`,{delay:600})
sr.reveal(`.home__value`,{delay:700})
sr.reveal(`.home__value,.home__images`,{delay:800,origin:'bottom'})
sr.reveal(`.logos__img`,{interval:100})
sr.reveal(`.value__images,.contact__content`, {origin:'left'})
sr.reveal(`.value__content,.contact__images`, {origin:'right'})

