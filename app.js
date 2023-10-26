// INTERFACE
const add = '+';
const subtract = '-';
const multiply = '*';
const divide = '/';
const arr = [];

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

function allCalculate(num1,operator,num2){
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

const calculate = document.querySelector('.calculate')
const result = document.querySelector('.result')
const clearAll = document.querySelector('.clearAll')
const deleteOne = document.querySelector('.delete')
const operator = document.querySelectorAll('#operator')
const numbers = document.querySelectorAll('#number')
const point = document.querySelector('.point')
const equal = document.querySelector('.equal')
const one = document.querySelector('.one')


clearAll.addEventListener('click',clear)
deleteOne.addEventListener('click',remove)

numbers.forEach(button=>{
  button.addEventListener('click',()=>{
    const number = button.textContent;
    calculate.textContent += `${number}`
    // console.log(arr);
  })
})

operator.forEach(button=>{
  button.addEventListener('click',()=>{
    const operator = button.textContent;
    calculate.textContent += `${operator}`
    // console.log(operator);
  })
})

function clear(){
  calculate.textContent = '';
  result.textContent = '';
}

function remove(){
  return
}





