
const ADD = '+';
const SUBTRACT = '-';
const MULTIPLY = '*';
const DIVIDE = '/';
let num1 =0
let num2 =0
let op = "";
let currResult =0

// INTERFACE

function addFun(num1,num2){
  return num1 + num2;
}
function subtractFun(num1,num2){
  return num1 - num2;
}
function multiplyFun(num1,num2){
  return num1 * num2;
}
function divideFun(num1,num2){
  if(num1===0 || num2===0 || (num1===0 && num2===0)){
    return "Error"
  }
  return num1 / num2;
}


function allCalculate(num1,operator,num2){
  if(operator===ADD){
    return addFun(num1,num2)
  }else if(operator===SUBTRACT){
    return subtractFun(num1,num2)
  }else if(operator===MULTIPLY){
    return multiplyFun(num1,num2)
  }else if(operator===DIVIDE){
    return divideFun(num1,num2)
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
    num1 = parseFloat(value)
    calculate.textContent += num1
    num1 = parseFloat(calculate.textContent)
    const input = calculate.textContent;
    const cal = input.match(/(-?\d+)([-+*/])(-?\d+)/);
    if (cal) {
      num1 = parseFloat(cal[1]);
      op = cal[2];
      num2 = parseFloat(cal[3]);
    }
  }
}

function clearAll(){
  calculate.textContent = ""
    result.textContent = ""
}

function removeOne(){
  calculate.textContent = calculate.textContent.slice(0,-1)
}

function addOneOperator(value){
    let arr =calculate.textContent.split('')
    // console.log(arr)
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

function equalCalculate(num1,op,num2){
  // if(op==="/"){
  //   if(num1===0 || num2===0 ||(num1===0 && num2===0)){
  //     alert("Error")
  //   }else{
  //     currResult = num1/num2
  //     result.textContent = currResult
  //   }
  // }else if(op==="*"){
  //   currResult = num1*num2
  //   result.textContent = currResult
  // }else if(op==="-"){
  //   currResult = num1-num2
  //   result.textContent = currResult
  // }else if(op==="+"){
  //   currResult = num1+num2
  //   result.textContent = currResult
  // }

  currResult = allCalculate(num1,op,num2)
  result.textContent = currResult
}

