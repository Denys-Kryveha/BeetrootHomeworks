let exercise1 = prompt('Вкажіть свій вік:');

if (exercise1 === null || exercise1 === '') {
  alert('Невірно введені дані!!!');
} else if (Number(exercise1) <= 11) {
  alert('Ви є дитина');
} else if (Number(exercise1) >= 12 && Number(exercise1) <= 17) {
  alert('Ви є підліток');
} else if (Number(exercise1) >= 18 && Number(exercise1) <= 59) {
  alert('Ви є дорослим');
} else if (Number(exercise1) >= 60) {
  alert('Ви є песіонером');
} else {
  alert('Невірно введені дані!!!');
};

let exercise2 = prompt('Вкажіть ціле число від 0 до 9:');

if (
  exercise2 === null ||
  exercise2 === '' ||
  !Number.isInteger(Number(exercise2)) ||
  Number(exercise2) >= 10
) {
  alert('Невірно введені дані!!!');
} else if (Number(exercise2) === 0) {
  alert(')');
} else if (Number(exercise2) === 1) {
  alert('!');
} else if (Number(exercise2) === 2) {
  alert('@');
} else if (Number(exercise2) === 3) {
  alert('#');
} else if (Number(exercise2) === 4) {
  alert('$');
} else if (Number(exercise2) === 5) {
  alert('%');
} else if (Number(exercise2) === 6) {
  alert('^');
} else if (Number(exercise2) === 7) {
  alert('&');
} else if (Number(exercise2) === 8) {
  alert('*');
} else if (Number(exercise2) === 9) {
  alert('(');
};

minNumeric = +prompt('Вкажіть число нижньої межі діапазону:');
maxNumeric = +prompt('Вкажіть число верхню межу діапазону:');

let exercise3 = 0;

let i = minNumeric;
while (i <= maxNumeric) {
  exercise3 = exercise3 + i;
  i++;
};

alert('Сума всіх чисел заданих в діапазоні рівна: ' + exercise3);

let x = +prompt('Вкажіть перше ціле число:');
let y = +prompt('Вкажіть друге ціле число:');

function exercise4(x, y) {
  if (y > x) return exercise4(y, x);
  if (!y) return x;
  return exercise4(y, x % y);
}

if (Number.isInteger(x) && Number.isInteger(y)) {
  alert('Найбільший спільний дільник: ' + exercise4(x, y));
} else {
  alert('Невірно введені дані!!!');
};

let exercise5 = +prompt('Вкажіть ціле число: ');

stringNumeric = '';

for (let k=1; k<=exercise5; k++) {
  if (exercise5%k===0){
    if (stringNumeric === ''){
      stringNumeric = stringNumeric + k;
    }
    else {
      stringNumeric = stringNumeric + ', ' + k;
    }
  }
};

alert('Дільниками числа ' + exercise5 + ' є числа : ' + stringNumeric);

let exercise6 = prompt('Введіть п’ятирозрядне число:');

if (exercise6 === '' || exercise6 == null ){
  alert('Невірно введені дані!!!');
} else if (exercise6.length != 5){
  alert('Невірно введені дані!!!');
}
else {

  stringPalindrom = '';
  let j = 5;
  while (j){
j--;
stringPalindrom = stringPalindrom + exercise6[j];
  };

if (stringPalindrom === exercise6) {
  massage = 'Дане слово є палідромом.'
}
else {
  massage = 'Це слово нажаль не палідромом :('
};

alert(massage);
};

let exercise7 = +prompt('Введіть суму покупки, ₴:');

if (exercise7 < 200) {
  sale = 0;
}
else if (exercise7 >= 200 && exercise7 <= 300) {
  sale = exercise7*0.03;
}
else if (exercise7 >= 300 && exercise7 <= 500){
  sale = exercise7*0.05;
}
else if (exercise7 >= 500){
  sale =  exercise7*0.07;
};

alert(exercise7-sale);

let exercise8;
positive = 0;
negative = 0;
zeros = 0;
guys = 0;
odd = 0;

 for (let t=1; t<=10; t++) {
 exercise8 = prompt('Введіть ' + t + '-е число:');

  if (exercise8 === '' || exercise8 == null ){
      alert('Невірно введені дані!!!');
      break;
    }

  if (Number(exercise8) === 0){
    zeros = zeros + 1;
  }

  if (exercise8 > 0){
    positive = positive + 1;
  }

  if (exercise8 < 0){
    negative = negative + 1;
  }

 if (exercise8 %2 === 0){
    guys = guys + 1;
 }

if (exercise8 %2 != 0){
    odd = odd + 1;
 }
};

 alert('Введено: '+ positive + ' додатніх чисел, '+ negative +  ' від’ємних чисел, ' + zeros + ' нулів, ' + guys + ' парних чисел, '+ odd + ' не парних чисел.');

let exercise9;

 for (let day=1; day<=7; day++) {

  if (day=1) {
    exercise9 = prompt('Понеділок');
    if (exercise9===null) break;
  }
  if (day=2) {
    exercise9 = prompt('Вівторок');
    if (exercise9===null) break;
  }
  if (day=3) {
    exercise9 = prompt('Середа');
    if (exercise9===null) break;
  }
  if (d=4) {
    exercise9 = prompt('Четвер');
    if (exercise9===null) break;
  }
  if (day=5) {
    exercise9 = prompt('П’ятниця');
    if (exercise9===null) break;
  }
  if (day=6) {
    exercise9 = prompt('Субота');
    if (exercise9===null) break;
  }
  if (day=7) {
    exercise9 = prompt('Неділя');
    day = 1;
    if (exercise9===null) break;
  }
 };


let a = 0;
let b = 100;
let N;
  
let exercise10 = prompt('Введіть від 0 до 100:');

if (exercise10 === '' || exercise10 == null || !(Number.isInteger(Number(exercise10)))){
  alert('Невірно введені дані!!!');
}

else{

  while (a<=b) {
  N = Math.floor((b-a)/2 + a);
 
    massage = prompt('Ваше число ' + N + '? Якщо так натисніть ОК, якщо ні - Відміна.');
 
    if (massage != null) {
       break;
    };
 
     massage1 = prompt('Ваше число більше ' + N + '? Якщо так натисніть ОК, якщо ні - Відміна.');
 
     if (massage1 != null) {
        a = N+1;     
     } else {
      b = N-1;
    }
 };
};


let exercise11;

for (let a=2; a<=9; a++) {

  for (let b=1; b<=10; b++) {
    exercise11 = a * b;
    console.log(a + ' x ' + b + ' = ' + exercise11);
  }

}

const monthWith31Days = 31; 
const monthWith30Days = 30; 
let monthWith28Days = 28; 
let nextDay = 1;
let nextDate = '';


year = +prompt('Вкажіть числом рік:');
month = +prompt('Вкажіть числом місяць:');
day = +prompt('Вкажіть числом день:');


if (Number.isInteger(year) && Number.isInteger(month) && Number.isInteger(day) && month <= 12 &&  day <= 31
&& (month != 0 && day!=0 && year !=0)){

if ((0 === year % 4) && (0 != year % 100) || (0 == year % 400)) {
  dayYears = 366;
} else {
  dayYears = 365;
}

tempDay = day + 1;

if (month === 2 && dayYears === 366) {
  monthWith28Days = 29; 
};


if (month < 12) {


 if (month === 2 && tempDay <= monthWith28Days){ 
nextDay = tempDay;
}
 
  else if ((month === 4 || month === 6 || month === 9 || month === 11) && tempDay<=monthWith30Days){
    nextDay = tempDay;
   }
  else if  ((month != 2 && month != 4 && month != 6 && month != 9 && month != 11) && tempDay<=monthWith31Days) {
   nextDay = tempDay;
   }
 
  
   numberDay =  nextDay < 10 ?('0'+ String(nextDay)) :  String(nextDay);
  
  if (nextDay != 1) {
    numbermonth = month < 10 ?('0'+ month):  month;
    nextDate = numberDay + '.' + numbermonth + '.' + year;
  }
  else{
    nextMonth = month +1;
    numbermonth = nextMonth < 10 ?('0'+ nextMonth):  nextMonth ;
    nextDate = numberDay + '.' + String(numbermonth) + '.' + year; 
  }

}
  else{
    if  (tempDay <=31) {
      numberDay =  nextDay < 10 ?('0'+ String(nextDay)) :  String(nextDay);
      numbermonth = month < 10 ?('0'+ month):  month;
      nextDate = numberDay + '.' + numbermonth + '.' + year;
    }
    else{
    nextYear = year +1;
    nextDate = '01.01.' + nextYear;
    }
  };
alert(nextDate);

}
else {
  alert('Невірно введені дані!!!');
};