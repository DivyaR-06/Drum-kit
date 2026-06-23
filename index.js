
var noOfBtn=document.querySelectorAll(".drum").length;
for(var i=0;i<noOfBtn;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",handleclick);
}

//detecting mouse clicks
function handleclick(){
   var btnInnerHTML=this.innerHTML;
   makeSound(btnInnerHTML);
   buttonAnimation(btnInnerHTML);
}


//detecting keyboard press
document.addEventListener("keydown",function(event) { //event param says which key got pressed say 'a' 'b' etcc... 
    makeSound(event.key);
    buttonAnimation(event.key);
});

//sounds are produced
function makeSound(key){
    switch(key){
        case "w":
            var aud = new Audio("sounds/tom-1.mp3");
            aud.play();
            break;
        case "a":
            var aud = new Audio("sounds/tom-2.mp3");
            aud.play();
            break;
        case "s":
            var aud = new Audio("sounds/tom-3.mp3");
            aud.play();
            break;
        case "d":
            var aud = new Audio("sounds/tom-4.mp3");
            aud.play();
            break;
        case "j":
            var aud = new Audio("sounds/crash.mp3");
            aud.play();
            break;
        case "k":
            var aud = new Audio("sounds/kick-bass.mp3");
            aud.play();
            break;
        case "l":
            var aud = new Audio("sounds/snare.mp3");
            aud.play();
            break;
        default:
            console.log();

    }
}


function buttonAnimation(currentKey){
   var activeBtn= document.querySelector("."+currentKey);
   activeBtn.classList.add("pressed");
   setTimeout(function(){
    activeBtn.classList.remove("pressed");
   },100);
}