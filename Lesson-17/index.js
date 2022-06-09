//!exercise2
function exercise2() {
  let exercise2 = 0;
  for (let i = 0; i < arguments.length; i++) {
    exercise2 = exercise2 + 1;
  }
  return exercise2;
}

//!exercise3
function exercise3(a, b) {
  let rezultat;

  if (a < b) {
    rezultat = -1;
  } else if (a > b) {
    rezultat = 1;
  } else if (a === b) {
    rezultat = 0;
  }

  return rezultat;
}

//!exercise4
function exercise4(n) {
  let rezultat;

  if (n === 0) {
    rezultat = 1;
  } else {
    rezultat = 1;
    let i = 1;
    while (i <= n) {
      rezultat = rezultat * i;
      i++;
    }
  }

  return rezultat;
}

//!exercise5
let exercise5 = (a, b, c) => String(a) + String(b) + String(c);

//!exercise6
function exercise6(a, b) {
  if (a === 0 && b != 0) {
    S = b * b;
  } else if (a != 0 && b === 0) {
    S = a * a;
  } else {
    S = a * b;
  }
  return S;
}

//!exercise7
function exercise7(number) {
  let temp = 0;
  let perfectNumber;

  for (let i = 1; i <= number / 2; i++) {
    if (number % i === 0) {
      temp += i;
    }
  }

  if (temp === number && temp != 0) {
    perfectNumber = Boolean(true);
  } else {
    perfectNumber = Boolean(false);
  }

  return perfectNumber;
}

//!exercise8
function exercise8(minNumber, maxNumber) {
  let perfectString = '';

  for (let i = minNumber; i <= maxNumber; i++) {
    if (exercise7(i) === true) {
      if (perfectString === '') {
        perfectString = perfectString + i;
      } else {
        perfectString = perfectString + ', ' + i;
      }
    }
  }
  return perfectString;
}

//!exercise2
console.log(exercise2(2, 8, 9));

//!exercise3
ex3Num1 = prompt('Вкажіть перше число:');
ex3Num2 = prompt('Вкажіть друге число:');

if (ex3Num1 === null || ex3Num1 === '' || ex3Num2 === null || ex3Num2 === '') {
  alert('Невірно введені дані!!!');
} else {
  alert(exercise3(ex3Num1, ex3Num2));
}

//!exercise4
ex4 = prompt('Вкажіть число для обчислення факторіала:');
if (ex4 === null || ex4 === '') {
  alert('Невірно введені дані!!!');
} else {
  alert(exercise4(+ex4));
}

//!exercise5
ex5Num1 = prompt('Вкажіть перше число:');
ex5Num2 = prompt('Вкажіть друге число:');
ex5Num3 = prompt('Вкажіть третє число:');
if (ex5Num1 === null || ex5Num1 === '' || ex5Num2 === null || ex5Num2 === '' || ex5Num3 === null || ex5Num3 === '') {
  alert('Невірно введені дані!!!');
} else {
alert(exercise5(ex5Num1, ex5Num2, ex5Num3));
};

//!exercise6
l = +prompt('Вкажіть довжину прямокутника:');
h = +prompt('Вкажіть ширину прямокутника:');

alert(exercise6(l, h));

!exercise7

x = +prompt('Введіть довільне число:');

let perfectNumber = exercise7(x);

if (perfectNumber === true) {
  alert('Це число є досконалим');
} else {
  alert('Нажаль це число не є досконалим :(');
}

//!exercise8
minNumeric = +prompt('Вкажіть число нижньої межі діапазону:');
maxNumeric = +prompt('Вкажіть число верхню межу діапазону:');

let massage = exercise8(minNumeric, maxNumeric);

if (massage === '') {
  alert('Досконалих  чисел в заданому діапазооні немає :(');
} else {
  alert('Досконалі числа заданого діапазону: ' + massage);
}
