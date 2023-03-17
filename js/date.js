'use strict';

const getDate = () => {
  const date = new Date();
  const year = date.getFullYear();
  // console.log(typeof year);
  const dateElement = document.querySelector('.footer-copyright-date');
  dateElement.innerHTML = year;
};

getDate();
