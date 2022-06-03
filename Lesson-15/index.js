let a = "1";
let b = 2;
const Tb = 1024;
const fileSize = 850;
const interestRate = 0.05;

Exercise1 = 0.1 + 0.2;
console.log(typeof +Exercise1.toFixed(1));
alert(+Exercise1.toFixed(1));

Exercise2 = Number(a) + b;
console.log(typeof Exercise2);
alert(Exercise2);

flashDrive = prompt('Enter the volume of the flash drive,Tb:');
Exercise3 = (flashDrive * Tb) / fileSize;
alert(Math.trunc(Exercise3));

sumWallet = prompt('Enter the amount of money in the wallet, ₴:');
priceChocolate = prompt('Enter the price of chocolate, ₴:');

quantityChocolate = sumWallet / priceChocolate;
purchase = sumWallet % priceChocolate;

if (priceChocolate === null || priceChocolate === '') {
  quantityChocolate = 0;
  purchase = 0;
}

Exercise4 = 'You can buy ' + Math.trunc(quantityChocolate) + ' chocolates. Your remaining purchase: ' +  purchase.toFixed(2) + ' ₴.';
alert(Exercise4);

Exercise5 = "";
initialNumber = prompt('Enter a three-digit number:');

if (Number(initialNumber.length) === 3) {

    firstNumber = initialNumber%10;

    Exercise5 = Exercise5 + firstNumber;

    tooNumber = Number(String(initialNumber[0]) + String(initialNumber[1]))%10;
  
    Exercise5 = Exercise5 + tooNumber;

    threeNumber = Number(String(initialNumber[0])) % 10; 

    Exercise5 = Exercise5 + threeNumber;

    alert(Number(Exercise5));
}
else {
alert('The number is incorrect!');
};

deposit2Months = prompt('Enter the amount of the deposit in the bank for 2 months:');
annualDeposit = deposit2Months *6;
Exercise6 = interestRate * annualDeposit;
alert(Exercise6.toFixed(2));