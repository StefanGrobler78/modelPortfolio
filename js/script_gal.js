let menuBox = document.querySelector('.sfgMp__primary-navigation_list')
let menuIcon = document.querySelector('.menuIcon')

menuIcon.addEventListener('click', () => {
    menuBox.classList.toggle('open-menu')

    if(menuBox.classList.contains('open-menu')){
        menuIcon.src = "../media/icon-close.svg"
    }else {
        menuIcon.src = "../media/icon-hamburger.svg"
    }
    
})




// Slider

const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");
slides.forEach(function (slide, index) {
  slide.style.left = `${index * 100}%`;
});
let counter = 0;
nextBtn.addEventListener("click", function () {
  counter++;
  carousel();
});

prevBtn.addEventListener("click", function () {
  counter--;
  carousel();
});

function carousel() {
  if (counter === slides.length) {
    counter = 0;
  }
  if (counter < 0) {
    counter = slides.length - 1;
  }
  
  slides.forEach(function (slide) {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
}

