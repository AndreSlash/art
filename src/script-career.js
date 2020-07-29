
let arrow1=document.getElementById("arrow1");
let arrow2=document.getElementById("arrow2");

arrow1.addEventListener("click",()=>{
    document.getElementById("offer1").classList.toggle("offer-toggler");
})

arrow2.addEventListener("click",()=>{
    document.getElementById("offer2").classList.toggle("offer-toggler");
})

