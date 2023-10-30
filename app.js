
const ADD = '+';
const SUBTRACT = '-';
const MULTIPLY = '*';
const DIVIDE = '/';
let num1 =0
let num2 =0
let op = "";
let currResult =null

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

const buttons = document.querySelectorAll('.grid button')
buttons.forEach((button) =>{
  button.addEventListener('click',function(){
    mainFunction(button.textContent);
  })
})



function mainFunction(value){

  if(value==="AC"){
    clearAll()

  }else if(value==="C"){
    removeOne()

  }else if(value==="%"){
    alert("It's not working")

  }else if(value==="/" ||value==="*" || value==="-" ||value==="+"){
    addOneOperator(value);
    op = value
    // console.log(op)

  }else if(value==="."){
    //add code here

  }else if(value==="="){
    equalCalculate(num1,op,num2)

  }else{
    checkObject(value)
  }
}

function clearAll(){
  calculate.textContent = ""
  result.textContent = ""
  num1 = null
  num2 = null
  op = ""
  currResult = null
}

function removeOne(){
  calculate.textContent = calculate.textContent.slice(0,-1)
}

function addOneOperator(value){
    let arr =calculate.textContent.split('')
    if(arr[arr.length-1]==="/" ||
       arr[arr.length-1]==="*" ||
       arr[arr.length-1]==="-" ||
       arr[arr.length-1]==="+" ||
       arr[arr.length-1]==="=" ||
       arr[arr.length-1]==="."){
      alert("have operator in calculate")
    }else{
      calculate.textContent += value;
    }
}

function checkObject(value){
  num1 = parseFloat(value)
  calculate.textContent += num1
  num1 = parseFloat(calculate.textContent)
  const input = calculate.textContent;
  const cal = input.match(/(-?\d+)([-+*/])(-?\d+)/);
  if (cal) {
    if(currResult===null){
      num1 = parseFloat(cal[1]);
      op = cal[2];
      num2 = parseFloat(cal[3]);
    }else{
      // calculate.textContent = currResult
      cal[1] = currResult
      num1=parseFloat(cal[1])
      op = cal[2];
      num2 = parseFloat(cal[3]);
    }
    
  }
  console.log(num1,op,num2)
}

function equalCalculate(numOne,operator,numTwo){
  currResult = allCalculate(numOne,operator,numTwo)
  result.textContent = currResult
  calculate.textContent =currResult
}

