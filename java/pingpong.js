// modal window//
//A constant is a data structure that contains information that will never change. In this case the constants are the image element(open), the div(modal container)
//and the button(close) in the html
const open = document.getElementById('open');
const modal_container = document.getElementById('modal_container');
const close = document.getElementById('close');

// An event is when something hapens. In this case, using "show" statement (stylized in the css) with "add" and "remove", we are telling that when someone makes "click" the modal container must be open,
// and closed if they click again.//
open.addEventListener('click', () => {
  modal_container.classList.add('show');
});

close.addEventListener('click', () => {
  modal_container.classList.remove('show');
});


const open2 = document.getElementById('open2');
const modal_container2 = document.getElementById('modal_container2');
const close2 = document.getElementById('close2');


open2.addEventListener('click', () => {
  modal_container2.classList.add('show');
});

close2.addEventListener('click', () => {
  modal_container2.classList.remove('show');
});


const open3 = document.getElementById('open3');
const modal_container3 = document.getElementById('modal_container3');
const close3 = document.getElementById('close3');


open3.addEventListener('click', () => {
  modal_container3.classList.add('show');
});

close3.addEventListener('click', () => {
  modal_container3.classList.remove('show');
});

// modal window end //
