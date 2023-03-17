const loadingPage = document.querySelector('.loading-animation');
const bodyPage = document.querySelector('.body');


  setTimeout(() => {
    loadingPage.classList.add('hidden');
    bodyPage.classList.remove('hidden');
  }, 5000);


