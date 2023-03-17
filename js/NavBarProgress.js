const getProgress = () => {
  const documentHeight = document.documentElement.scrollHeight;
  const windowHeight = window.innerHeight;
  //console.log('docHeight', documentHeight,'windowHeight', windowHeight);
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const progress = (scrollTop / (documentHeight - windowHeight)) * 100;
  return Math.round(progress);
};

const updateProgressBar = () => {
  const progress = getProgress();
  const progressBar = document.querySelector('.nav-progress');
  progressBar.style.width = `${progress}%`;
};

window.addEventListener('scroll', updateProgressBar);
