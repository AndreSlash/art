
let sendBtn=document.getElementById("send-msg-btn");
let postIcon=document.getElementById("post-icon");
let navBurger=document.getElementById("nav-burger");
let nav=document.getElementById("nav");
let burgerbutton=document.getElementById("hamburger");


let hero1=document.getElementById("hero");
let hero2=document.getElementById("hero2");
let hero3=document.getElementById("hero3");
let hero4=document.getElementById("hero4");

let pricing1=document.getElementById("pricing-1");
let pricing2=document.getElementById("pricing-2");
let pricing3=document.getElementById("pricing-3");
let pricing4=document.getElementById("pricing-4");

let back_arrow1=document.getElementById("back-arrow");
let back_arrow2=document.getElementById("back-arrow2");
let back_arrow3=document.getElementById("back-arrow3");
let back_arrow4=document.getElementById("back-arrow4");

navBurger.addEventListener("click",()=>{
    nav.classList.toggle("nav-toggle");
    burgerbutton.classList.toggle("is-active");
    burgerbutton.querySelector(".hamburger-inner").classList.toggle("color");
})

document.querySelectorAll('.collapse').forEach(function(item) {
    item.addEventListener('click', function() {
      item.querySelector('.submenu').classList.toggle("collapse-nav");
    });
});

back_arrow2.addEventListener("click",()=>{
    hero2.classList.remove("bring");
    hero1.classList.remove("back");
    hero1.classList.add("bring");
})
pricing1.addEventListener("click",()=>{
    hero2.classList.add("bring");
    hero1.classList.add("back");
})

back_arrow3.addEventListener("click",()=>{
    hero3.classList.remove("bring");
    hero2.classList.remove("back");
    hero2.classList.add("bring");
})
pricing2.addEventListener("click",()=>{
    hero3.classList.add("bring");
    hero2.classList.add("back");
})

back_arrow4.addEventListener("click",()=>{
    hero4.classList.remove("bring");
    hero3.classList.remove("back");
    hero3.classList.add("bring");
})
pricing3.addEventListener("click",()=>{
    hero4.classList.add("bring");
    hero3.classList.add("back");
})