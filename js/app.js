'use strict';

let checkRadio = document.querySelectorAll('.check-radio')
let width = document.querySelector('#width')  
let height = document.querySelector('#height')
let resetBtn = document.querySelectorAll('.reset')

checkRatio()

function checkRatio() {

  let titleRatio = document.querySelector('.title-ratio')

  for(let i=0; i<checkRadio.length; i++) {

    checkRadio[i].addEventListener('click', function(event) {

      titleRatio.innerText = event.target.nextElementSibling.innerText
      calcStyle()
      calcRatio()

    })

  }

}

function calcRatio() {

	//Get the input value
  let valueWidth = width.value
  valueWidth *= 1
  let valueHeight

  for(let i=0; i<checkRadio.length; i++){

    let radioChecked = checkRadio[i].checked
    let radioId = checkRadio[i].id

    if(radioChecked === true &&  radioId === '43') {
      valueHeight = Math.round((valueWidth/4)*3)
    } else if (radioChecked === true && radioId === '169') {
      valueHeight = Math.round((valueWidth/16)*9)
    } else if (radioChecked === true && radioId === '219') {
      valueHeight = Math.round((valueWidth/64)*27)
    }

	}

  //Dispay height value
  height.innerText = valueHeight

}

// Show bloc values
function calcStyle() {

  let calc = document.querySelector('.calc')
  calc.style.opacity = '1'
  calc.style.pointerEvents = 'all'
  calc.style.boxShadow = '0 0 20px rgba(00,00,00,0.35)'

  let check = document.querySelector('.check')
  check.style.justifyContent = 'flex-end'

}

// Reset value
function reset() {

  width.value = ''
  height.innerText = ' '
  alertBox()

}

// Alert NaN
function alertBox(){

  let alertDanger = document.querySelector('.alert-danger')

  height.textContent === 'NaN' ? alertDanger.style.display = 'block' : alertDanger.style.display = 'none'

}

// Event Listener
// Calc Ratio
width.addEventListener('keyup', calcRatio, false)
// Display Alert
width.addEventListener('keyup', alertBox, false)
// Close alert & Clear input
resetBtn.forEach(function(event){
    event.addEventListener('click', reset, false)
})