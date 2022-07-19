//..set initial count 
let count = 0

//..declare the value and buttons 
const value = document.querySelector("#value")
const allBtns = document.querySelectorAll(".btn")

allBtns.forEach(function (item){
   item.addEventListener("click", function(e){ //.. e is the event object 
   const style = e.currentTarget.classList //..get the current class list of the counter
   if(style.contains('decrease')){
    count--
   } else if(style.contains('increase')){
         count++
   }
   else {
      count = 0
   } 
   if (count > 0){
      value.style.color = 'green'
   } else if(count < 0){
      value.style.color = 'red'
   } else{
      value.style.color = '#222'
   }

   value.textContent = count
})
})