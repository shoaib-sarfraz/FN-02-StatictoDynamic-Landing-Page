/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables
 *
 */
const sections = document.querySelectorAll('section');
const navigation = document.getElementById('navbar__list');

/**
 * End Global Variables
 */

// Menu
const navBuilder = () => {

  let navUI = '';
  // looping over all sections
  sections.forEach(section => {

      const sectionID = section.id;
      const sectionDataNav = section.dataset.nav;

      navUI += `<li><a class="menu__link" href="#${sectionID}">${sectionDataNav}</a></li>`;

  });

  navigation.innerHTML = navUI;


};

navBuilder();


// Add class 'active' to section when near top of viewport

const offset = (section) => {
  return Math.floor(section.getBoundingClientRect().top);
};

// remove the active class
const removeActive = (section) => {
  section.classList.remove('your-active-class');
  section.style.cssText = "background-color: linear-gradient(0deg, rgba(255,255,255,.1) 0%, rgba(255,255,255,.2) 100%)";
};
// adding the active class
const addActive = (conditional, section) => {
  if(conditional){
      section.classList.add('your-active-class');
      section.style.cssText = "background-color: grey;";
  };
};

//implementating the actual function

const sectionActivation = () => {
  sections.forEach(section => {
      const elementOffset = offset(section);

      inviewport = () => elementOffset < 150 && elementOffset >= -150;

      removeActive(section);
      addActive(inviewport(),section);
  });
};

window.addEventListener('scroll' ,sectionActivation);

// Scroll to anchor ID using scrollTO event

const scrolling = () => {

  const links = document.querySelectorAll('.navbar__menu a');
  links.forEach(link => {
      link.addEventListener('click', () => {
          for(i = 0 ; i<sections ; i++){
              sections[i].addEventListener("click",sectionScroll(link));
          }
      });
  });

};

scrolling();
