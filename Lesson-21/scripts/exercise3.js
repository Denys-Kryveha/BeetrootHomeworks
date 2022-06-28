const buttonSwitch = document.getElementById('switch');
let redLight = document.getElementById('red_light');
let yellowLight = document.getElementById('yellow_light');
let greenLight = document.getElementById('green_light');

let counter = 0;
let reset = false;

buttonSwitch.addEventListener('click', () => {
  counter = counter + 1;

  if (counter === 1) {
    redLight.style.background = 'red';
    yellowLight.style.background = 'azure';
    greenLight.style.background = 'azure';
  }
  if (counter === 2) {
    redLight.style.background = 'azure';
    yellowLight.style.background = 'yellow';
    greenLight.style.background = 'azure';

    if (reset === true) {
      counter = 0;
      reset = false;
    }
  }
  if (counter === 3) {
    redLight.style.background = 'azure';
    yellowLight.style.background = 'azure';
    greenLight.style.background = 'green';
    counter = 1;
    reset = true;
  }
});
