let canvas=document.querySelector("canvas");
let menudivs=document.getElementById("menudivs");
let settingbutton=document.getElementById("settingbutton");
let checkmenu=document.getElementById("checkmenu");
let body=document.querySelector("body");
settingbutton.addEventListener("click",function(){
   console.log("arjukum")
   menudivs.classList.toggle("active")
   body.classList.toggle("active")
   checkmenu.classList.toggle("active")
   
},)