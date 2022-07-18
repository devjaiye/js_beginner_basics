//..set initial count 
let count = 0

//..declare the value and buttons 
const value = document.querySelector("#value")
const allBtns = document.querySelectorAll(".btns")

allBtns.forEach(function (btn) {
    //..event lisnter to loop through the 3 buttons
    btn.addEventListener('click', function(e){
        console.log(e.currentTarget)
    }) 
})