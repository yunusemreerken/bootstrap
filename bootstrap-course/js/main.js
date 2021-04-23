// var header = document.getElementById("myDIV");
// var btns = header.getElementsByClassName("dropdown-item");
// for (var i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function() {
//   var current = document.getElementsByClassName("active");
//   current[0].className = current[0].className.replace(" active", "");
//   this.className += " active";
//   });
// }

let buttons = document.querySelectorAll('a');

buttons.forEach(button =>{
    button.addEventListener('click',function(){
        buttons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
    });
});