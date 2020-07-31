let click=document.getElementById("burger");
let click2=document.getElementById("form");
let sendBtn=document.getElementById("send-msg-btn");
let postIcon=document.getElementById("post-icon");
let navBurger=document.getElementById("nav-burger");
let nav=document.getElementById("nav");
let burgerbutton=document.getElementById("hamburger");

click.addEventListener("click",()=>{
    click2.classList.toggle("toggle");
    sendBtn.classList.toggle("send-btn-toggle");
    postIcon.classList.toggle("d-none");
});
navBurger.addEventListener("click",()=>{
    navBurger.classList.toggle("fix");
    nav.classList.toggle("nav-toggle");
    burgerbutton.classList.toggle("is-active");
    burgerbutton.querySelector(".hamburger-inner").classList.toggle("color");
})

document.querySelectorAll('.collapse').forEach(function(item) {
    item.addEventListener('click', function() {
      item.querySelector('.submenu').classList.toggle("collapse-nav");
    });
});
