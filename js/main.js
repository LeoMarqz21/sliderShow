const sliderShow = document.getElementById('sliderShow');
const elementSliderShow = document.querySelectorAll('#sliderShow slider');
const img = document.createElement('img');
const btnLeft = document.getElementById('left');
const btnRight = document.getElementById('right');

const images = {
  "img-1": "./images/img-1.jpg",
  "img-2": "./images/img-2.jpg",
  "img-3": "./images/img-3.jpg",
  "img-4": "./images/img-4.jpg",
  "img-5": "./images/img-5.jpg",
  "img-6": "./images/img-6.jpg",
  "img-7": "./images/img-7.jpg",
  "img-8": "./images/img-8.jpg",
  "img-9": "./images/img-9.jpg",
  "img-10":"./images/img-10.jpg",
  "img-11":"./images/img-11.jpg",
  "img-12":"./images/img-12.jpg",
}

img.setAttribute('src', './images/ifel.jpg');
img.classList.add('slider');
sliderShow.appendChild(img);

var x = 1;

btnLeft.addEventListener('click', () => {
  if(x < 1){
    x--;
    x = 10;
    img.setAttribute('src', images[`img-${x}`]);
    sliderShow.appendChild(img);
    console.log(x)
  }else{
    x--;
    img.setAttribute('src', images[`img-${x}`]);
    sliderShow.appendChild(img);
    console.log(x)
  }
});


btnRight.addEventListener('click', () => {
  if(x > 10){
    x++;
    x = 1;
    img.setAttribute('src', images[`img-${x}`]);
    sliderShow.appendChild(img);
    console.log(x)
  }else{
    x++;
    img.setAttribute('src', images[`img-${x}`]);
    sliderShow.appendChild(img);
    console.log(x)
  }
});


// x--;










