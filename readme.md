let display = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");


// these button are in the form of nodelist so we have to convert into arraylist so that we use Array.from() function

let buttonsArray = Array.from(buttons);
// console.log(buttonsArray)

// to access each and every buttons so we have to run a loop => which loop => forEach loops

buttonsArray.forEach(function(btn){
  btn.addEventListener("click", koko)

  function koko(event){
    num = event.target.innerHTML
    if(num == "DEL"){
      num = num.substring(0,num.length-1)
    }
    // console.log(event)
    // console.log(event.target)
    
    // console.log(event.target.innerHTML)
    // display.value = num // to show single number in displayBox
    display.value = display.value + num
  }
})