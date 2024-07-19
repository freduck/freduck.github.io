"use strict";
const menu= document.querySelector(".mobile-menu");
const dot= document.querySelector(".dot");
dot.addEventListener("click",function(e){
    e.preventDefault();
   if(menu.classList.contains("hidden")){
       menu.classList.remove("hidden");
       
   } else{
       menu.classList.add("hidden");
   }
});
let h3=document.getElementsByTagName("h3");
for(let i=0; i<h3.length;i++){
    h3[i].addEventListener("click",function(){
//       alert(this.textContent); 
let ul = document.querySelectorAll(".ul");
        let iu= document.querySelectorAll(".fa");
        if(ul[i].classList.contains("hidden") && iu[i].classList.contains("fa-caret-right")){
            ul[i].classList.remove("hidden");
            iu[i].classList.remove("fa-caret-right");
            iu[i].classList.add("fa-caret-down");
        }else{
            
            ul[i].classList.add("hidden");
            iu[i].classList.add("fa-caret-right");
        }
        
        
    });
}
const request= new XMLHttpRequest();
const name= "fredrick";
const param='name='+name;
request.open("POST","login.php");
request.onload=function(){
    console.log(request.responseText);
    
}
request.send(param)