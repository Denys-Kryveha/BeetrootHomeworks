let firstname;
let lastname;
const thisYear = 2022;
const exchangeEUR = 0.94;

/*
Невірні назви змінних та констант:
let Прізвище;
let 1name;
const this Year;
const exchange-EUR 
let %EUR;
*/

firstname = prompt('Enter your firstname...');
if (firstname === null  || firstname === ''){firstname = 'Guest' };
massage = 'Hello ' + firstname;
alert(massage);

if (firstname != 'Guest'){
massage = firstname + '! Enter your lastname...';
lastname = prompt(massage);
massage = 'Nice to meet you ' + firstname + ' ' + lastname;
alert(massage);
}

//snake_case

year_of_birth = prompt('What year were you born?');
age_user = thisYear - year_of_birth;
if (year_of_birth === null || year_of_birth === ''){age_user = 0};
massage = 'Your age is '+ age_user +' years';
alert(massage);

side_of_quadrat =  prompt('Enter the length of the side of the square...');
perimeter = 4*Number(side_of_quadrat);
massage = 'The perimeter of the square: '+ perimeter;
alert(massage);

//snake_case

radius =  prompt('Specify the radius of the circle...');
// camelCase
circleArea = Math.PI * Math.pow(Number(radius), 2);
// camelCase
massage = 'The area of the circle: '+ circleArea;
alert(massage);


s = prompt('Enter the distance between cities, km:');
t = prompt('Enter travel time, h:');
if (t === null || t==='') {t = 1};
v = Number(s)/t;

massage = 'Speed: '+ v + ' km/h';
alert(massage);

// camelCase
numberOfUSD = Number(prompt('USD:'));
numberOfEUR = Number(numberOfUSD) * exchangeEUR;
// camelCase

massage = numberOfUSD + ' USD = ' + numberOfEUR + ' EUR';
alert(massage);