
let onBtn= document.querySelector('.onBtn')
let bulb = document.querySelector('.bulb')


function turnOnBulb(){
    
    bulb.src= "./img/on.png"
}
onBtn.addEventListener ('click', turnOnBulb) 


let offBtn= document.querySelector('.offBtn')


function turnOffBulb(){
    
    bulb.src= "./img/off.png"
}
offBtn.addEventListener ('click', turnOffBulb) 

