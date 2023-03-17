const navLinks = document.querySelectorAll('.nav-menu__links--main a');

navLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    const top = targetSection.getBoundingClientRect().top;
    const navHeight = document
      .querySelector('.nav-wrapper')
      //.getBoundingClientRect().height;
      .offsetHeight
    const targetPosition = window.pageYOffset + top - navHeight;
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth',
    });
  });
});
