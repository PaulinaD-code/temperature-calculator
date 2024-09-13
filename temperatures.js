const container1 = document.querySelector('.calculator1')
let input1 = document.querySelector('.input1');
const btn1 = document.querySelector('.checkBtn1');
let answer1 = document.querySelector('.answer1');

let result1;
let result2;

btn1.addEventListener('click', celToFafr )

function celToFafr(){
  let number = input1.value;
  let change = number * 9 / 5 + 32;


  if(number ===''){
    answer1.textContent = 'Nie podano wartości'
  }  else {
    answer1.textContent = `Podana wartość w stopniach Celsjusza (${number}°C) stanowi ${change} stopni Fahrenheita`
  }

  input1.value = ''
}

function keyEvent(event){
  if(event.key === 'Enter'){
    celToFafr();
  }
}

let input2 = document.querySelector('.input2');
const btn2 = document.querySelector('.checkBtn2');
let answer2 = document.querySelector('.answer2');

btn2.addEventListener('click', fahrToCel)

function fahrToCel(){
  let number2 = input2.value;
  let change2 = Math.round((number2 - 32) * 5 /9);

  if (number2 === ""){
    answer2.textContent = 'Nie podano wartości'
  } else {
    answer2.textContent = `Podana wartość w stopniach Fahrenheita (${number2}°F) stanowi ${change2} stopni Celsjusza`
  }

  input2.value = ''
}

function checkKeyEvent(event){
  if(event.key === 'Enter'){
    fahrToCel();
  }
}
