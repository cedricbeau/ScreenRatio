'use strict';

let checkRadio = document.querySelectorAll('.check-radio')
let width = document.querySelector('#width')  
let height = document.querySelector('#height')
let btnReset = document.querySelector('.btn-reset')
let btnCloseAlert = document.querySelector('.close-alert')

checkRatio()

function checkRatio() {  

  let titleRatio = document.querySelector('.title-ratio')
  let calc = document.querySelector('.calc')
    
  for(let i=0; i<checkRadio.length; i++){

    if(checkRadio[i].checked === false) {
      calc.style.opacity = '.8'
      calc.style.pointerEvents = 'none'
      calc.style.boxShadow = '0 0 0 rgba(00,00,00,0)'
    }

    checkRadio[i].addEventListener('click', function() {

      clear()

      calc.style.opacity = '1'
      calc.style.pointerEvents = 'all'
      calc.style.boxShadow = '0 0 20px rgba(00,00,00,0.35)'

      console.log(checkRadio[i].id)

      if(checkRadio[i].id === '169') {
        titleRatio.innerText = '16:9'
      }
			
			if(checkRadio[i].id === '219') {
        titleRatio.innerText = '21:9'
      }

      if(checkRadio[i].id === '43') {
        titleRatio.innerText = '4:3'
      }

    })

  }

}
  
  
function calcRatio() {    
    
	//Récupère la valeur du input
  let valueWidth = this.value
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
        
  //Affiche la hauteur
  height.innerText = valueHeight
    
}

//
function clear() {	
  width.value = ''
  height.innerText = ' '
}

//
function alertBox(){
	
	let alertDanger = document.querySelector('.alert-danger')
		
	if(height.textContent === 'NaN') {
		alertDanger.style.display = 'block'
	}
	if(height.textContent !== 'NaN') {
		alertDanger.style.display = 'none'
	}
	
}

// Event Listener
// Calc Ratio
width.addEventListener('keyup', calcRatio, false) 

// Clear input
btnReset.addEventListener('click', clear, false)

// Alert
width.addEventListener('keyup', alertBox, false)  

// Close alert
btnCloseAlert.addEventListener('click', function(){
	console.log(this)
  this.parentNode.style.display = 'none'
})






