const navLinks = [...document.querySelectorAll('.nav-menu__links--main a'), document.querySelector('.link--sign-up')];

navLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    const top = targetSection.getBoundingClientRect().top;
    const navHeight = document
      .querySelector('.nav-wrapper')
      .offsetHeight
    const targetPosition = window.pageYOffset + top - navHeight;
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth',
    });
  });
});
