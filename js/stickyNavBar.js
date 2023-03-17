//window.onload = () => {
  // Get the navigation menu element
  const navMenu = document.querySelector('.nav-wrapper');

  // Get the hero section element
  const heroSection = document.querySelector('#header');

  // Listen for scroll events on the window
  window.addEventListener('scroll', () => {
    // Get the height of the hero section
    const heroSectionHeight = heroSection.offsetHeight;
   // console.log('height', heroSectionHeight);

    // Get the current scroll position
    const scrollPosition = window.scrollY;

    // Check if the user has scrolled past the hero section
    if (scrollPosition > heroSectionHeight) {
      // If they have, add the "nav-menu--sticky" class to the navigation menu
      navMenu.classList.add('nav-wrapper--sticky');
     // console.log('scroll', scrollPosition);
      //console.log('height', heroSectionHeight);
      // navMenu.classList.add('nav-menu--sticky');
      // document.querySelector('.wrapper').classList.add('container')
    } else {
      // If they haven't, remove the "nav-menu--sticky" class from the navigation menu
      navMenu.classList.remove('nav-wrapper--sticky');
      // navMenu.classList.remove('container');
    }
  });
//};