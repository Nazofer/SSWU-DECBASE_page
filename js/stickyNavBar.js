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
