const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function () {
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});




function alertopen(alertnum) {
  document.getElementById('alerttext').innerHTML = alertnum;
  document.getElementById('alert').style.display = 'block';
}

document.getElementById('alert3').addEventListener('click', function(){
  alertopen('짱여니 영구 탈모')})

// function alertopen2() {
//   document.getElementById('alerttext').innerHTML = '짱여니대머리 알람2';
//   document.getElementById('alert').style.display = 'block';
// }

function alertclose() {
  document.getElementById('alert').style.display = 'none';
}

// function alertbutton(구멍) {
// document.getElementById('alert').style.display = '구멍';}
// 구멍에 none 이나 block을 이용해 함수 하나로 위 2개 기능을 구현

const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll', _.throttle(function () {
  // console.log(window.scrollY);
  if (window.scrollY > 500) {
    gsap.to(toTopEl, .2, {
      x:0
    });
    
  } else {
    gsap.to(toTopEl, .2, {
      x: 100
    });
  }
}, 300));

toTopEl.addEventListener('click', function () {
  gsap.to(window, .5,{
    scrollTo: 0
  });
});
