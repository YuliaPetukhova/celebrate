
// Personalized welcome message code

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Введите ваше имя');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'С Днём рождения, ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'С Днём рождения, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}

/* let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('srcset');
    if(mySrc === 'images/image-caracal-2.jpg') {
      myImage.setAttribute ('srcset','images/image-dubai.jpg');
    } else {
      myImage.setAttribute ('srcset','images/image-caracal-2.jpg');
    }
}
*/

function initparticles() {
  confetti();
}

function confetti() {
  $.each($(".particletext.confetti"), function(){
     let confetticount = ($(this).width()/50)*10;
     for(let i = 0; i <= confetticount; i++) {
        $(this).append('<span class="particle c' + $.rnd(1,2) + '" style="top:' + $.rnd(10,50) + '%; left:' + $.rnd(0,100) + '%;width:' + $.rnd(6,8) + 'px; height:' + $.rnd(3,4) + 'px;animation-delay: ' + ($.rnd(0,30)/10) + 's;"></span>');
     }
  });
}

jQuery.rnd = function(m,n) {
     m = parseInt(m);
     n = parseInt(n);
     return Math.floor( Math.random() * (n - m + 1) ) + m;
}

initparticles();

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}



