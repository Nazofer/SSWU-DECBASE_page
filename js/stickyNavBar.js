// //window.onload = () => {
//   // Get the navigation menu element
//   const navMenu = document.querySelector('.nav-wrapper');
//   // Get the hero section element
//   const heroSection = document.querySelector('#header');
//   // Listen for scroll events on the window
//   window.addEventListener('scroll', () => {
//     // Get the height of the hero section
//     const heroSectionHeight = heroSection.offsetHeight;
//     // Get the current scroll position
//     const scrollPosition = window.scrollY;
//     // Check if the user has scrolled past the hero section
//     if (scrollPosition > heroSectionHeight) {
//       navMenu.classList.add('nav-wrapper--sticky');
//       console.log('spawn');
//     } else {
//       navMenu.classList.remove('nav-wrapper--sticky');
//     }
//   });
// //};
const navMenu = document.querySelector('.nav-wrapper');
const heroSection = document.querySelector('#header');

const navObserverOptions = {
  root: null,
  threshold: 0,
  rootMargin: '-100px',
};

const stickyNavHandler = (entries) => {
  const [entry] = entries;
  if (!entry.isIntersecting) {
    navMenu.classList.add('nav-wrapper--sticky');
  } else {
    navMenu.classList.remove('nav-wrapper--sticky');
  }
};

const navigationObserver = new IntersectionObserver(
  stickyNavHandler,
  navObserverOptions
);

navigationObserver.observe(heroSection);
