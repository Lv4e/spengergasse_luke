 class Calculator {
  constructor(previousOperandTextElement, currentOperandTextElement) {
    this.previousOperandTextElement = previousOperandTextElement
    this.currentOperandTextElement = currentOperandTextElement
    this.clear()
  }
clear(){
  	this.currentOperand = ""
    this.previousOperand = ""
    this.operation = undefined
}
delete() {

}

appendNumber() {

}

chooseOperation() {

}
compute() {

}

updateDisplay() {

}
 }
 
 const numberButtons = document.querySelectorAll('[data-number]')
  const operationButtons = document.querySelectorAll('[dataoperation]')
  const equalsButton = document.querySelectorAll('data-equals')
  const deleteButton = document.querySelectorAll('data-delete')
  const allClearButton = document.querySelectorAll('data-all-clear')
  const previousOperandTextElement = document.querySelectorAll('data-previous-operand')
  const currentOperandTextElement = document.querySelectorAll('data-current-operand')