                    //FIXED NAVBAR
window.onscroll = function () {
    myFunction()
    scrollFunction()
}

var navbar = document.getElementById("navbar");
var hamburger = document.getElementById("hamburger");
var sticky = navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}

                // Hambuger DOM click
var mobile_link = document.getElementById("mobile_links");
var backdrop = document.getElementById("backdrops");

hamburger.addEventListener('click', () => {
    mobile_link.style.transform = 'translateX(0)';
    mobile_link.style.zIndex = "100";
    backdrop.style.display = "block";
    backdrop.style.zIndex = "50";
});

backdrop.addEventListener('click', () => {
    mobile_link.style.transform = "translateX(-100%)";
    backdrop.style.display = "none";
})

/*Hide drop down */
/*var webdev_info = document.getElementById("webdev_info");
var hide_dd = document.getElementById("hide_dd");

hide_dd.addEventListener('click',()=>{
    webdev_info.style.display="none"

    hide_dd.removeEventListener();
})*/


                            //SCROLL BACK TO TOP BUTTON
var backTo_top = document.getElementById('myBtn');


function scrollFunction(){
    if(document.body.scrollTop>20 || document.documentElement.scrollTop>20){
        backTo_top.style.display="block";
    }else{
        backTo_top.style.display="none";
    }
}

backTo_top.addEventListener('click',()=>{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})

                            //SCROLL ANIMATION
window.sr = ScrollReveal();
sr.reveal('.side',{
    duration: 2000,
    origin: 'bottom'
});

sr.reveal('.me',{
    duration:2000,
    origin:'top',
    distance:'300px'
})

sr.reveal('.Cards',{
    duration:2000,
    origin:'top',
    distance:'300px'
})
