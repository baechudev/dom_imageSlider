const images = [];
const fig1 = document.querySelector('.img');
const leftBtn = document.querySelector('.btn-left');
const rightBtn = document.querySelector('.btn-right');
let index = 0;

for (var i = 0; i < 10; i++) {
  fetch('https://picsum.photos/200')
    .then((res) => {
      images.push(res.url);
      fig1.src = res.url;
    })
    .then((data) => {
      //fig1.src = data.url;
    });
}

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
