const images = [];
const fig1 = document.querySelector('.img');
const leftBtn = document.querySelector('.btn-left');
const rightBtn = document.querySelector('.btn-right');
let index = 0;

// fetchData(): to fetch an image from API, save in the images array, and apply the first image to img tag.
const fetchData = () => {
  return new Promise((r1, r2) => {
    fetch('https://picsum.photos/200').then((res) => {
      images.push(res.url);
      if (images.length === 1) {
        fig1.src = images[0];
        console.log('done once');
      }
    });
  });
};

// loadImage(): to execute fetchData function 10 times.
const loadImage = () => {
  for (var i = 0; i < 10; i++) {
    fetchData();
  }
};

// button to slide to the next image, and once the very last image, it works nothing
rightBtn.addEventListener('click', function () {
  if (index < images.length - 1) {
    fig1.src = images[++index];
  }
});

// button to slide to the previous image, and once the very first image, it works nothing
leftBtn.addEventListener('click', function () {
  if (index > 0) {
    fig1.src = images[--index];
  }
});

loadImage();
