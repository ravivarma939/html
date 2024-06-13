const anime = [
  {
      title: "onepiece",
      hero: "luffy",
  },
  {
      title: "solo leveling",
      hero: "sung jun woo",
  },
  {
      title: "naruto",
      hero: "naruto",
  }
];

const maindiv = document.getElementById('main');

function displaydata() {
  anime.forEach(function (val) {
      const mydiv = document.createElement('div');
      mydiv.classList.add('anime'); // corrected 'classlist' to 'classList'
      const title = document.createElement('h2');
      title.textContent = val.title;
      const hero = document.createElement('h2');
      hero.textContent = val.hero;
      mydiv.append(title, hero);
      maindiv.appendChild(mydiv); // corrected appending 'maindiv' to 'mydiv'
  });
}

displaydata();
