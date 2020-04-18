'use strict';

let checkRadio = document.querySelectorAll('.check-radio')
let width = document.querySelector('#width')  
let height = document.querySelector('#height')
let resetBtn = document.querySelectorAll('.reset')

checkRatio()

function checkRatio() {

  let titleRatio = document.querySelector('.title-ratio')
  
  checkRadio.forEach(function(e){

    e.addEventListener('change', function(e) {

      // Add ratio in page title
      titleRatio.innerText = e.target.nextElementSibling.innerText

      // Display the calc box
      calcStyle()

      // Do the calc ratio
      calcRatio()

    })

  })

}

// Display the calc box
function calcStyle() {

  let calc = document.querySelector('.calc')

  calc.style.opacity = '1'
  calc.style.pointerEvents = 'all'
  calc.style.boxShadow = '0 0 20px rgba(00,00,00,0.35)'

}

// Do the calc ratio
function calcRatio() {

	// Get the input value
  let valueWidth = width.value
  valueWidth *= 1
  let valueHeight

  // The calc ratio depend of checbox checked
  checkRadio.forEach(function(event){

    if(event.checked === true) {

      if(event.id === '43') {
        valueHeight = Math.round((valueWidth/4)*3)
      } else if(event.id === '169') {
        valueHeight = Math.round((valueWidth/16)*9)
      } else if (event.id === '219') {
        valueHeight = Math.round((valueWidth/64)*27)
      }

    }

  })

  // Dispay height value
  height.innerText = valueHeight

  // Display alert box
  alertBox()

}

// Reset value
function reset() {

  width.value = ''
  height.innerText = ''

  // Close the alert box
  alertBox()

}

// Alert NaN
function alertBox() {

  let alertDanger = document.querySelector('.alert-danger')

  isNaN(height.textContent) ? alertDanger.style.display = 'block' : alertDanger.style.display = 'none'

}

// Event Listener
// Do calc ratio
width.addEventListener('keyup', calcRatio, false)

// Close alert & Clear input
resetBtn.forEach(function(event){
    event.addEventListener('click', reset, false)
})