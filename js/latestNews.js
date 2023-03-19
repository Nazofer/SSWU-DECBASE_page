const newsSection = document.querySelector('.news');
const newsCards = document.querySelectorAll('.news__main-card');

const options = {
  rootMargin: '0px',
  threshold: 0.5
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // The #news section is in view, add active class to cards
      //console.log('intersecting');
      newsCards.forEach(card => card.classList.add('news__main-card--active'));
    } else {
      // The #news section is out of view, remove active class from cards
      //console.log('not-intersecting');
      newsCards.forEach(card => card.classList.remove('news__main-card--active'));
    }
  });
}, options);

observer.observe(newsSection);


