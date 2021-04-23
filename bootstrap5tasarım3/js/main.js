var menu = document.getElementsByClassName("menu-toggle")[0];
var linkler = document.getElementsByClassName("collapse")[0];

menu.addEventListener("click",function(){   
        linkler.classList.toggle("animation-left");
        linkler.classList.toggle("ac-kapa");
        

    

})