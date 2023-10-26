// INTERFACE

const add = '+';
const subtract = '-';
const multiply = '*';
const divide = '/';

let num1 , num2;

function addFun(num1,num2){
  return num1 + num2;
}
function subtractFun(num1,num2){
  return num1 - num2;
}
function multipleFun(num1,num2){
  return num1 * num2;
}
function divideFun(num1,num2){
  return num1 / num2;
}

function allCalculate(operator,num1,num2){
  if(operator===add){
    return addFun(num1,num2)
  }else if(operator===subtract){
    return subtractFun(num1,num2)
  }else if(operator===multiple){
    return multipleFun(num1,num2)
  }else{
    return divideFun(num1,num2)
  }
}

// UI

const clearAll = document.querySelector('.clearAll');
const deleteOne = document.querySelector('.delete');
const operator = document.querySelectorAll('[data-operator]')
const number = document.querySelectorAll('[data-num]')
const point = document.querySelector('.point')
const equal = document.querySelector('.equal')

clearAll.addEventListener('click',clear)
deleteOne.addEventListener('click',remove)
