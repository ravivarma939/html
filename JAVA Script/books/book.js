const button=document.getElementById('button');
const posterInput =document.getElementById('poster');
const titleInput = document.getElementById('title');
const maindiv = document.getElementById('output');
const realinput = document.getElementById('real');
const marvel = [
  {
    poster:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEeu-ZO5tLEVLtdY-Xy-ZD7H3zHNnnKCSS4w&s',
    title :'IRON MAN',
    real:'Robert Downey Jr.'
  },
  {
    poster:'https://e0.pxfuel.com/wallpapers/56/823/desktop-wallpaper-spiderman-marvel-thumbnail.jpg',
    title:'SPIDER MAN',
    real:'Tom Holland'
  },
  {
   poster:'https://i.pinimg.com/236x/e0/bb/93/e0bb9357113d8fdd65f29ef55f344220.jpg',
   title: 'BLACK PANTER',
   real:'Chadwick Aaron Boseman'
  },
  {
    poster:'https://e0.pxfuel.com/wallpapers/24/351/desktop-wallpaper-moon-knight-moonknight-marvel-thumbnail.jpg',
    title:'moon kinght',
    real:'Oscar Isaac'
  }
];
function createCard(poster, title,real) {
  const mydiv = document.createElement('div');
  const anime = document.createElement('div');
  anime.classList.add('anime');
  mydiv.classList.add('mydiv');
  const image = document.createElement('img');
  image.classList.add('img');
  image.src = poster;
  image.alt = title;
  const titleElement = document.createElement('h2');
  titleElement.classList.add('txt');
  titleElement.textContent = title;
  const realElement =document.createElement('h2');
  realElement.classList.add('name');
  realElement.textContent=real;
  anime.append(image, titleElement,realElement);
  mydiv.appendChild(anime);
  maindiv.appendChild(mydiv);
}
marvel.forEach(data => createCard(data.poster, data.title,data.real));

button.addEventListener('click', () => {
  const posterValue = posterInput.value;
  const titleValue = titleInput.value;
  const realValue = realinput.value;
  if (posterValue && titleValue&& realValue) {
      createCard(posterValue, titleValue, realValue);
      posterInput.value = "";
      titleInput.value = "";
      realinput.value = "";
  } else {
      alert('ENTER URL,ENTER CHARCTER NAME,ENTER HERO REAL NAME');
  }
});
