const counterInitialValue = document.querySelector('.initialValue')
let increaseCounter = document.querySelector('.increaseBtn')
let decreaseCounter = document.querySelector('.decreaseBtn')
let resetCounter = document.querySelector('.resetBtn')

function counterOperations(){
  increaseCounterOperation();
  decreaseCounterOperation();
  resetCounterOperation();
}
counterOperations()

function increaseCounterOperation(){
  increaseCounter.addEventListener('click', ()=> {
    counterInitialValue.innerHTML = parseInt(counterInitialValue.innerHTML) + Number(1)
    return
  })
  
}


function decreaseCounterOperation(){
  decreaseCounter.addEventListener('click', ()=> {
    counterInitialValue.innerHTML = parseInt(counterInitialValue.innerHTML) - Number(1)
    return
  })
}


function resetCounterOperation(){
  resetCounter.addEventListener('click', ()=> {
    counterInitialValue.innerHTML = 0
    return;
  })
}


  if(counterInitialValue.innerHTML <= 0){
    counterInitialValue.style.color = 'red'
  }
  
 else{
   counterInitialValue.style.color = 'purple'
 }
console.log('ann ann')