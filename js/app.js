'use strict';

checkRatio()
calcRatio()
closeAlert()
clearInput()

function checkRatio() {  

  let checkRadio = document.querySelectorAll('.check-radio')
  let titleRatio = document.querySelector('.title-ratio')
  let calc = document.querySelector('.calc')
    
  for(let i=0; i<checkRadio.length; i++){

    if(checkRadio[i].checked === false) {
      calc.style.opacity = '.5'
      calc.style.pointerEvents = 'none'
      calc.style.boxShadow = '0 0 0 rgba(00,00,00,0)'
    }

    checkRadio[i].addEventListener('click', function() {

      clear()

      calc.style.opacity = '1'
      calc.style.pointerEvents = 'all'
      calc.style.boxShadow = '0 0 20px rgba(00,00,00,0.15)'

      console.log(checkRadio[i].id)

      if(checkRadio[i].id === '169') {
        titleRatio.innerText = '16:9'
        if(titleRatio.classList.contains('43')) {
          titleRatio.classList.remove('43')
        }
        titleRatio.classList.add('169')
      }

      if(checkRadio[i].id === '43') {
        titleRatio.innerText = '4:3'
        if(titleRatio.classList.contains('169')) {
          titleRatio.classList.remove('169')
        }
        titleRatio.classList.add('43')
      }

    })

  }

}

function calcRatio(){
  
  let width = document.querySelector('#width')  

  function ratio() {
    
    let height = document.querySelector('#height')
    let result = document.querySelector('.resultat')

    //Récupère la valeur du input
    let valueWidth = this.value
    valueWidth *= 1
    let valueHeight

    let checkRadio = document.querySelectorAll('.check-radio')
    for(let i=0; i<checkRadio.length; i++){

      let radioChecked = checkRadio[i].checked
      let radioId = checkRadio[i].id
      
      if(radioChecked === true &&  radioId === '43') {        
        valueHeight = Math.round((valueWidth/4)*3)
      } else if (radioChecked === true && radioId === '169') {       
        valueHeight = Math.round((valueWidth/16)*9)
      }

    }
        
    //Affiche la hauteur
    height.innerText = valueHeight
    //Applique la largeur et la hauteur au conteneur du résultat
    window.setTimeout(function(){
      result.style.width = valueWidth+'px'
      result.style.height = valueHeight+'px'      
    }, 600)      

  }

  width.addEventListener('keyup', ratio, false)  

}

//
function clearValues(input1, input2, resultat){
  input1.value = ''
  input2.innerText = ' '
  resultat.style.width = ''
  resultat.style.height = ''  
}

//
function clear() {	
  let width = document.querySelector('#width')
  let height = document.querySelector('#height')
  let result = document.querySelector('.resultat')
  clearValues(width, height, result)
}

// Detect number
function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

//
function keySuppr(e){
	let alertBox = document.querySelector('.alert-danger')
  if(isNumber(e.key) === false){
	  console.log(e.key)
	  alertBox.style.display = 'block'
    clear()
  }  
}

// Clear input
function clearInput(){

  let btn = document.querySelector('.btn-reset')
  let width = document.querySelector('#width')  

  btn.addEventListener('click', clear, false)
  width.addEventListener('keyup', keySuppr, false)  

}

// Close alert
function closeAlert(){
  let closeAlertBtn = document.querySelector('.close-alert')
  closeAlertBtn.addEventListener('click', function(){
	  console.log(this)
    this.parentNode.style.display = 'none'
  })
}





