
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
var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/image-caracal-2.jpg') {
      myImage.setAttribute ('src','images/image-dubai.jpg');
    } else {
      myImage.setAttribute ('src','images/image-caracal-2.jpg');
    }
}
