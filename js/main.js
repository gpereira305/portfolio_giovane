const homeScroll = document.querySelector('.field')


function showMousewheel() {   
  setTimeout(() => {
    homeScroll.style.display = 'flex' 
  }, 3000)
}
window.onload = showMousewheel;



/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.querySelector('#nav-menu'),
      navToggle = document.querySelector('#nav-toggle'),
      navClose = document.querySelector('#nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
  navToggle.addEventListener('click', ()=> {
    navMenu.classList.add('show-menu')
  })
}  


/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
 if (navClose){
  navClose.addEventListener('click', ()=> {
    navMenu.classList.remove('show-menu')
  })
}


/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link') 
const linkAction = () => { 
  navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName('skills__content'),
      skillsHeader =  document.querySelectorAll('.skills__header')

function toggleSkills(){
  let itemClass = this.parentNode.className;

  for(let i = 0; i < skillsContent.length; i++){
    skillsContent[i].className = 'skills__content skills__close'
  }

  if(itemClass === 'skills__content skills__close'){
    this.parentNode.className = 'skills__content skills__open'
  }
}     

skillsHeader.forEach(el =>  el.addEventListener('click', toggleSkills))

/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]');
 
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.target);

    tabContents.forEach(tabContent =>  tabContent.classList.remove('qualification__active'))  
    target.classList.add('qualification__active'); 
    tabs.forEach(t => t.classList.remove('qualification__active'));
    tab.classList.add('qualification__active') 
  })
})    

    
 
/*==================== FOOTER DATE ====================*/
const footerDate = document.querySelector('.footer__date')
const getActualDate = new Date().getFullYear();
footerDate.innerText = getActualDate 


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]');

function scrollActive(){
  const scrollY = window.pageYOffset;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 70;
    const sectionId = current.getAttribute('id');

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');

    } else {
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link');
    }
  })
}

window.addEventListener('scroll', scrollActive);



/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
  const nav = document.querySelector('#header');

   this.scrollY >= 80 ?
   nav.classList.add('scroll-header') : 
   nav.classList.remove('scroll-header')

  }
  
  window.addEventListener('scroll', scrollHeader);



/*==================== SHOW SCROLL UP ====================*/ 
function scrollUp(){
  const scrollTop = document.querySelector('#scroll-up');

  this.scrollY >= 560 ?
  scrollTop.classList.add('show-scroll') :
  scrollTop.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollUp);



/*==================== DARK LIGHT THEME ====================*/ 
const themeButton = document.querySelector('#theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'uil-sun';

const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => document.body.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun';

if(selectedTheme){
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

function themeSwitcher(){
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);

  localStorage.setItem('selected-theme', getCurrentTheme());
  localStorage.setItem('selected-icon', getCurrentIcon());
}

themeButton.addEventListener('click', themeSwitcher)