//window.onload = () => {
  // Get the navigation menu element
  const navMenu = document.querySelector('.nav-wrapper');
  // Get the hero section element
  const heroSection = document.querySelector('#header');
  // Listen for scroll events on the window
  window.addEventListener('scroll', () => {
    // Get the height of the hero section
    const heroSectionHeight = heroSection.offsetHeight;
    // Get the current scroll position
    const scrollPosition = window.scrollY;
    // Check if the user has scrolled past the hero section
    if (scrollPosition > heroSectionHeight) {
      navMenu.classList.add('nav-wrapper--sticky');
    } else {
      navMenu.classList.remove('nav-wrapper--sticky');
    }
  });
//};