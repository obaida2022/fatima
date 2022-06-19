let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let videoBtn = document.querySelectorAll('.vid-btn');


let stars = document.getElementById('stars')
let moon = document.getElementById('moon')
let mountains3 = document.getElementById('mountains3')
let mountains4 = document.getElementById('mountains4')
let river = document.getElementById('river')
let boat6 = document.getElementById('boat')
let nouvil = document.querySelector('.nouvil')


window.onscroll = () =>{
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');


    let value = scrollY;
    stars.style.left = value + 'px';
    moon.style.top = value * 3 + 'px';
    mountains3.style.top = value * 1.5 + 'px';
    mountains4.style.top = value * 1.2 + 'px';
    river.style.top = value  + 'px';
    boat6.style.top = value  + 'px';
    boat6.style.left = value * 3 + 'px';
    nouvil.style.fontSize = value + 'px';
    nouvil.style.color = 'black';
    if(scrollY >= 69){
      nouvil.style.fontSize = 69 + 'px';
      nouvil.style.position = 'fixed';
      if(scrollY >= 440) {
        nouvil.style.display = 'none';
      }
      else {
        nouvil.style.display = 'block';
      }

      if(scrollY >= 108) {
        document.querySelector('.main').style.background = 'linear-gradient(#0327ee,#9ff0ca)';
      }
      else {
        document.querySelector('.main').style.background = 'linear-gradient(#200016,#10001f)';
      }
    }
}


menu.addEventListener('click', () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');

});

searchBtn.addEventListener('click', () => {
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');

});



videoBtn.forEach(btn => {
    btn.addEventListener('click' , () => {
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.querySelector('#video-slider').src = src
        
    });
});

var arVideos = document.getElementsByTagName('video');

for (var i = arVideos.length - 1; i >= 0; i--) {
	var elmVideo = arVideos[i];
	elmVideo.autoplay = true;
}

// Swiper
var swiper = new Swiper(".trending-content", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
      delay: 2500,
      disableOnInteraction:false,
  },
  breakpoints: {
    "@0.00": {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    "@0.75": {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    "@1.00": {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    "@1.50": {
      slidesPerView: 4,
      spaceBetween: 25,
    },
  },
});
