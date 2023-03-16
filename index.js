let num1 = 0;
let num2 = 0;
document.getElementById("num1-el").textContent= num1;
document.getElementById("num2-el").textContent= num2;



let sumEl= document.getElementById("num1-el");



function add1(){
   sumEl.textContent = num1+=1;
  
}
function add2(){
    sumEl.textContent = num1+=2;
}
function add3(){
    sumEl.textContent = num1+=3;
}

let sumEl2= document.getElementById("num2-el");


function add1A(){
    sumEl2.textContent = num2+=1;
   
 }
 function add2A(){
     sumEl2.textContent = num2+=2;
 }
 function add3A(){
     sumEl2.textContent = num2+=3;
 }
 let newGame =document.getElementById("container-reset");

 function reset(){
    sumEl.textContent=0;
    num1=0;
    sumEl2.textContent=0;
    num2=0;
   
 }
//  let highScore=document.getElementById("container-boxHome");
//  function score(){
//   if(sumEl.textContent>sumEl2.textContent){
//     highScore.textContent= 
//   }
//  }

