const images = [];
const fig1 = document.querySelector('.img');
const leftBtn = document.querySelector('.btn-left');
const rightBtn = document.querySelector('.btn-right');
let index = 0;

var fetchData = () => {
  fetch('https://picsum.photos/200').then((res) => {
    images.push(res.url);
    fig1.src = images[0];
  });
};

var loadImage = () => {
  for (var i = 1; i < 10; i++) {
    fetchData();
  }
};

loadImage();

rightBtn.addEventListener('click', function () {
  if (index < images.length - 1) {
    fig1.src = images[++index];
  }
});

leftBtn.addEventListener('click', function () {
  if (index > 0) {
    fig1.src = images[--index];
  }
});
