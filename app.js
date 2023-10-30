
const ADD = '+';
const SUBTRACT = '-';
const MULTIPLY = '*';
const DIVIDE = '/';
let num1 =''
let num2 =''
let op = null;
let removeAllScreen = false

// INTERFACE

function addFun(numOne,numTwo){
  return numOne + numTwo;
}
function subtractFun(numOne,numTwo){
  return numOne - numTwo;
}
function multiplyFun(numOne,numTwo){
  return numOne * numTwo;
}
function divideFun(numOne,numTwo){
  if(numOne===0 || numTwo===0 || (numOne===0 && numTwo===0)){
    return "Error"
  }
  return numOne / numTwo;
}


function allCalculate(numOne,operator,numTwo){
  numOne =Number(numOne)
  numTwo =Number(numTwo)
  if(operator===ADD){
    return addFun(numOne,numTwo)
  }else if(operator===SUBTRACT){
    return subtractFun(numOne,numTwo)
  }else if(operator===MULTIPLY){
    return multiplyFun(numOne,numTwo)
  }else if(operator===DIVIDE){
    return divideFun(numOne,numTwo)
  }
}

const calculate = document.querySelector('.calculate')
const result = document.querySelector('.result')
const clearAll = document.querySelector('.clearAll')
const deleteOne = document.querySelector('.delete')
const percent = document.querySelector('.percent')
const operator = document.querySelectorAll('.btn-operator')
const numbers = document.querySelectorAll('.btn-number')
const point = document.querySelector('.point')
const equal = document.querySelector('.equal')

clearAll.addEventListener('click',clearAllFunc)
deleteOne.addEventListener('click',removeOne)
equal.addEventListener('click',calculateResult)

operator.forEach((button)=>{
  button.addEventListener('click',()=> getOperator(button.textContent))
})

numbers.forEach((button)=>{
  button.addEventListener('click',()=> getNumber(button.textContent))
})





function getOperator(operator){
  if(op!==null){
    calculateResult()
  }
  num1 = result.textContent
  op = operator
  calculate.textContent = `${num1} ${op}`
  removeAllScreen = true
}


function getNumber(num){
  if(removeAllScreen){
    result.textContent = ""
    removeAllScreen = false
  }
  result.textContent += num
}


function calculateResult(){
  if(op===null || removeAllScreen){
    return
  }
  num2 = result.textContent
  result.textContent = allCalculate(num1,op,num2)
  calculate.textContent = `${num1} ${op} ${num2} =`
  op = null
}


function removeOne(){
  calculate.textContent = calculate.textContent.slice(0,-1)
}



function clearAllFunc(){
  calculate.textContent = ""
  result.textContent = ""
  num1 = ''
  num2 =''
  op = null
}