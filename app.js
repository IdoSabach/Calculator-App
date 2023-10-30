
const ADD = '+';
const SUBTRACT = '-';
const MULTIPLY = '*';
const DIVIDE = '/';

// INTERFACE

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
  if(operator===ADD){
    return addFun(num1,num2)
  }else if(operator===SUBTRACT){
    return subtractFun(num1,num2)
  }else if(operator===MULTIPLY){
    return multipleFun(num1,num2)
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
    calculate.textContent = ""
    result.textContent = ""
  }else if(value==="C"){
    calculate.textContent = calculate.textContent.slice(0,-1)
  }else if(value==="%"){
    alert("It's not working")
  }else if(value==="/" ||value==="*" || value==="-" ||value==="+"){
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

  }else if(value==="."){
    //add code here
  }else if(value==="="){
    let arr = calculate.textContent.split('')
    console.log(arr)
    // console.log(arr.length)
    const resultValue = equalCalculate(arr);
    result.textContent = resultValue;
  }else{
    let num = parseFloat(value)
    calculate.textContent += num
  }
}

function equalCalculate(arr){
//   Dear Sam!
// Every time we press "=" we will get an array of numbers and you will be able to see a printout of it in the console
// All I have to do is separate the array into the first operator number and the second number and do the calculation and later add precedence of operators and a decimal point.
// I tried pop push include and more. Would appreciate help!
}
