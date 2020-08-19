
function getNumber(num) {
  var inputVar = document.getElementById('input')
  switch (num){
    case 1:
      inputVar.value += '1'
      break
    case 2:
      inputVar.value += '2'
      break
    case 3:
      inputVar.value += '3'
      break
    case 4:
      inputVar.value += '4'
      break
    case 5:
      inputVar.value += '5'
      break
    case 6:
      inputVar.value += '6'
      break
    case 7:
      inputVar.value += '7'
      break
    case 8:
      inputVar.value += '8'
      break
    case 9:
      inputVar.value += '9'
      break
    case 0:
      inputVar.value += '0'
      break
  }
}

// mathematical operation sigh
function getOperand(operand) {
  var inputVar = document.getElementById('input')
  switch (operand){
    case '+': 
      inputVar.value += '+'
      break
    case '-': 
      inputVar.value += '-'
      break
    case 'x': 
      inputVar.value += '*'
      break
    case '/': 
      inputVar.value += '/'
      break
    case '+/-': 
      inputVar.value += '-' + inputVar.value
  }
}


// clear the screen
function clearScreen() {
  document.getElementById('input').value = ''
  document.getElementById('answer').value = ''
}

// backspace function
function backspace() {
  var inputVar = document.getElementById('input')
  var x = inputVar.value
  if (x.length > 0) {
    x = x.substring(0, x.length - 1)
    inputVar.value = x
  }
}

function compute() {
  var inputVar = document.getElementById('input')
  var ans = Math.floor(+eval(inputVar.value))
  document.getElementById('answer').value = ans
}





//   THE BASIC IDEEA FOR CALCULATOR //

// let running = true

// while (running) {
//   const op = prompt('Enter the operator')

//   switch (op) {
//     case '+': {
//       const x = parseFloat(prompt('Enter the first number'))
//       const y = parseFloat(prompt('Enter the second number'))
//       console.log(x + y)
//       break
//     }
//     case '-': {
//       const x = parseFloat(prompt('Enter the first number'))
//       const y = parseFloat(prompt('Enter the second number'))
//       console.log(x - y)
//       break
//     }
//     case '*': {
//       const x = parseFloat(prompt('Enter the first number'))
//       const y = parseFloat(prompt('Enter the second number'))
//       console.log(x * y)
//       break
//     }
//     case '/': {
//       const x = parseFloat(prompt('Enter the first number'))
//       const y = parseFloat(prompt('Enter the second number'))
//       console.log(x / y)
//       break
//     }
//     case 'power': {
//       const x = parseFloat(prompt('Enter the first number'))
//       const y = parseFloat(prompt('Enter the second number'))
//       console.log(Math.pow(x, y))
//       break
//     }
//     case 'sqrt': {
//       const x = parseFloat(prompt('Enter the first number'))
//       const y = parseFloat(prompt('Enter the second number'))
//       console.log(Math.sqrt(x, y))
//       break
//     }
//   }

  
//   running = confirm('Do you want to keep going?')
// }