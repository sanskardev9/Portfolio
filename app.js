let dayNight = document.querySelector(".dayNight");
let navbar = document.querySelector(".navbar");

dayNight.addEventListener("click",()=>{
    navbar.classList.toggle("night");
})

let typingEffect = new Typed("#text",{
    strings:["Sanskar","Coder","Singer","Calisthenics Athlete"],
    loop:true,
    typeSpeed:100,
    backSpeed:50,
    backDelay:1000,
})