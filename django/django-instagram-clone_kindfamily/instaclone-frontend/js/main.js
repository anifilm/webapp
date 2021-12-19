//const heart = document.querySelector('.heart_btn');
const header = document.querySelector('#header');
const sidebox = document.querySelector('.side_box');
const variableWidth = document.querySelector('.contents_box .contents');
const deligation = document.querySelector('.contents_box');

//heart.addEventListener('click', function () {
//  console.log('hit');
//  heart.classList.toggle('on');
//});

function deligationFunc(e) {
  let elem = e.target;
  //console.log(e.target);
  //console.log(elem);

  while (!elem.getAttribute('data-name')) {
    elem = elem.parentNode;
    if (elem.nodeName === 'BODY') {
      elem = null;
      return;
    }
  }

  if (elem.matches('[data-name="heartbeat"]')) {
    console.log('하트');
  }
  else if (elem.matches('[data-name="bookmark"]')) {
    console.log('북마크');
  }
  else if (elem.matches('[data-name="share"]')) {
    console.log('공유');
  }
  else if (elem.matches('[data-name="more"]')) {
    console.log('더보기');
  }

  elem.classList.toggle('on');
}

function resizeFunc() {
  if (pageYOffset >= 10) {
    let calcWidth = (window.innerWidth * 0.5) + 167;
    sidebox.style.left = calcWidth + 'px';
  }

  if (matchMedia('screen and (max-width: 800px)').matches) {
    for (let i = 0; i < variableWidth.clientHeight; i++) {
      variableWidth[i].style.width = window.innerWidth - 20 + 'px';
    }
  } else {
    for (let i = 0; i < variableWidth.length; i++) {
      if (window.innerWidth > 600) {
        variableWidth[i].removeAttribute('style');
      }
    }
  }
}

function scrollFunc() {
  //console.log(pageYOffset);
  if (pageYOffset >= 10) {
    header.classList.add('on');
    if (sidebox) {
      sidebox.classList.add('on');
    }
    resizeFunc();
  } else {
    header.classList.remove('on');
    if (sidebox) {
      sidebox.classList.remove('on');
      sidebox.removeAttribute('style');
    }
  }
}

setTimeout(function () {
  // 새로고침시 화면 가장 위로 가도록 한다.
  scrollTo(0, 0);
}, 100);

if (deligation) {
  deligation.addEventListener('click', deligationFunc);
}

window.addEventListener('resize', resizeFunc);
window.addEventListener('scroll', scrollFunc);
