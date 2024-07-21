let display = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");

let buttonsArray = Array.from(buttons);


buttonsArray.forEach(function(btn){
  btn.addEventListener("click", handleButtonClick)

  function handleButtonClick(event){
    let str = event.target.innerHTML
    if(str == "DEL"){
      str = display.value.substring(0, display.value.length-1)
      display.value = str
    }
    else if(str == "AC"){
      str = ""
      display.value = str
    }
    else if(str == "="){
      str = eval(display.value)
      display.value = str
    }
    else{
      display.value = display.value + str
    }
  }
})




