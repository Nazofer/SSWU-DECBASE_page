const getContent = (arr) => {
  return arr.map((item) => {
    const entries = Object.entries(item).filter((item) => Boolean(item[1]));
    const str = entries.reduce((acc, [key, value]) => {
      if (typeof value === 'string') {
        if (
          value.includes('http') ||
          !isNaN(Date.parse(value)) ||
          !isNaN(+value)
        )
          return acc;
        return `${acc} ${key}: ${value}, `;
      }
      return acc;
    }, '');
    return {
      title: item.name || item.title,
      description: str,
    };
  });
};

const fetchData = async (category) => {
  const url = `https://swapi.dev/api/${category}/`;
  const response = await fetch(url);
  const data = await response.json();
  return getContent(data.results.slice(0, 6));
};

const fetchAll = async () => {
  const url = (category) => `https://swapi.dev/api/${category}/`;
  const arr = ['planets', 'people', 'starships'];
  const data = await Promise.all(
    arr.map((category) => fetch(url(category)).then((res) => res.json()))
  );
  return getContent(data.flatMap((el) => el.results.slice(0, 1)));
};

const renderCards = async (data) => {
  console.log(data);
  const cardsContainer = document.querySelector(`.service__cards`);
  cardsContainer.innerHTML = '';
  data.forEach((item) => {
    const card = `
    <div class="card">
      <div class="card__top">
        <img src="./img/star-wars-icon.svg" class="icon" />
        <h4 class="card__top-heading">${item.title}</h4>
      </div>
      <p class="card-paragraph">${item.description}</p>
    </div>
    `;
    cardsContainer.insertAdjacentHTML('beforeend', card);
  });
};

let data = {};

(async () => {
  data.all = await fetchAll();
  data.planets = await fetchData('planets');
  data.people = await fetchData('people');
  data.starships = await fetchData('starships');
  data.species = await fetchData('species');
  console.log(data);
})();

const buttons = document.querySelectorAll('.service__nav-menu button');
let activeBtn = null;

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    if (button === activeBtn) return; // Do nothing if active button is clicked again
    activeBtn?.classList.remove('active'); // Remove active class from previous active button if there was one
    activeBtn = button;
    activeBtn.classList.add('active'); // Add active class to clicked button
    const category = button.id;
    renderCards(data[category]);
  });
});
