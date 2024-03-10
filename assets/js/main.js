window.onload=function(){
    window.addEventListener('scroll', function (e){
        if (window.scrollY >100){
            document.querySelector("header").classList.add('scroll');
        }
        else{
            document.querySelector("header").classList.remove('scroll');
        }
    })
}
const hamburger= document.querySelector(".hamburger");
const navMenu= document.querySelector(".mobile-nav");
hamburger.addEventListener("click",() => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})