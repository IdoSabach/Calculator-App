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
  if(num1===0 || num2===0 || (num1===0 && num2===0)){
    return "Error"
  }
  return num1 / num2;
}



function allCalculate(num1,operator,num2){
  if(operator===add){
    return addFun(num1,num2)
  }else if(operator===subtract){
    return subtractFun(num1,num2)
  }else if(operator===multiply){
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
const operator = document.querySelectorAll('.btn-operator')
const numbers = document.querySelectorAll('.btn-number')
const point = document.querySelector('.point')
const equal = document.querySelector('.equal')




clearAll.addEventListener('click',clear)
deleteOne.addEventListener('click',remove)

numbers.forEach((button)=>{
  button.addEventListener('click',function(){
    const num = button.textContent
    getNumber(num);
  })
})
operator.forEach((button)=>{
  button.addEventListener('click',function(){
    const opera = button.textContent
    getOperator(opera);
  })
})

equal.addEventListener('click',equalCalculate)



function updateDisplayResult(value){
 result.textContent += value;
}

function updateDisplayCalculate(value){
  calculate.textContent += value;
 }

function clear(){
  calculate.textContent = '';
  result.textContent = '';
}

function remove(){
  let allText = calculate.textContent
  if(allText>0){
    allText = allText.slice(0,-1);
    calculate.textContent = allText;
  }
}

function getNumber(number){
  updateDisplayCalculate(number);
}

function getOperator(operator){
  updateDisplayCalculate(operator);
}

function equalCalculate(){
  return
}






