'use strict';
let cars = ['ford','audi','bmw','jaguar'];
console.log(cars.length);
let moreCars = ['toyota','nissan','hyundai','honda'];
let totalCars = cars.concat(moreCars);
console.log(totalCars);
console.log(totalCars.indexOf('honda'));
console.log(totalCars.lastIndexOf('ford'));
let stringOfCars = totalCars.join(' ');
console.log(stringOfCars);
totalCars = stringOfCars.split(' ');
console.log(totalCars);
let carsInReverse = totalCars.reverse();
console.log(carsInReverse);
carsInReverse.sort();
console.log(carsInReverse);
console.log(carsInReverse.indexOf('audi'));
let removedCars = carsInReverse.slice(2,4);
console.log(removedCars);
console.log(carsInReverse);
// carsInReverse.splice(2,2);
// console.log('After the remove',carsInReverse);
carsInReverse.splice(2,2,'ford','honda');
console.log('After the add',carsInReverse);
carsInReverse.push('ford','honda');
console.log(carsInReverse);
console.log(carsInReverse.pop());
console.log(carsInReverse.unshift('dodge'));
let numbers = [23,45,0,2];
numbers.forEach((item,index) => numbers[index]+=2);
console.log(numbers);
