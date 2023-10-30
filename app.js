
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
  }else if(operator===MULTIPLE){
    return multipleFun(num1,num2)
  }else{
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
    alert(".")
  }else if(value==="="){
    let arr = calculate.textContent.split('')
    // console.log(arr);
    // equalCalculate(arr);
  }else{
    let num = parseInt(value)
    calculate.textContent += num
  }
}

// function equalCalculate(arr){
//   const op = []
//   const value = []

//   const precedence = {
//     "+":2,
//     "-":2,
//     "/":1,
//     "*":1
//   }
// }



// let currentInput = '';
// let result = '';

// function handleButtonClick(value) {
//   if (value === 'AC') {
//     currentInput = '';
//     result = '';
//   } else if (value === 'C') {
//     currentInput = currentInput.slice(0,-1);
//   } else if (value === '=') { 
//     result = calculateResult();
//   } else {
//     currentInput += value;
//   }
//   updateDisplay();
// }


// function calculateResult() {
//   try {
//     const parts = currentInput.match(/[0-9.]+|[-+*/]/g);

//     if (!parts) {
//       return 'Error';
//     }

//     let total = parseFloat(parts[0]);
//     for (let i = 1; i < parts.length; i += 2) {
//       const operator = parts[i];
//       const operand = parseFloat(parts[i + 1]);

//       if (isNaN(operand)) {
//         return 'Error';
//       }

//       switch (operator) {
//         case ADD:
//           total += operand;
//           break;
//         case SUBTRACT:
//           total -= operand;
//           break;
//         case MULTIPLY:
//           total *= operand;
//           break;
//         case DIVIDE:
//           if (operand === 0) {
//             return 'Error';
//           }
//           total /= operand;
//           break;
//         default:
//           return 'Error';
//       }
//     }

//     return total.toString();
//   } catch (error) {
//     return 'Error';
//   }
// }

// function updateDisplay() {
//   const display = document.querySelector('.calculate');
//   display.textContent = currentInput;
//   const resultDisplay = document.querySelector('.result');
//   resultDisplay.textContent = result;
// }


// const buttons = document.querySelectorAll('.grid button');
// buttons.forEach((button) => {
//   button.addEventListener('click', () => {
//     handleButtonClick(button.textContent);
//   });
// });




// // UI

// const calculate = document.querySelector('.calculate')
// const result = document.querySelector('.result')
// const clearAll = document.querySelector('.clearAll')
// const deleteOne = document.querySelector('.delete')
// const operator = document.querySelectorAll('.btn-operator')
// const numbers = document.querySelectorAll('.btn-number')
// const point = document.querySelector('.point')
// const equal = document.querySelector('.equal')




// clearAll.addEventListener('click',clear)
// deleteOne.addEventListener('click',remove)

// numbers.forEach((button)=>{
//   button.addEventListener('click',function(){
//     const num = button.textContent
//     calculate.textContent += num;
//     const num1 = calculate.textContent
//   })
// })

// operator.forEach((button)=>{
//   button.addEventListener('click',function(){
//     const opera = button.textContent
//     calculate.textContent += opera;

//   })
// })

// equal.addEventListener('click',equalCalculate)



// function updateDisplayResult(value){
//  result.textContent = value;
// }


// function clear(){
//   calculate.textContent = '';
//   result.textContent = '';
// }
