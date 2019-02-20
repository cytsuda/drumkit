function playSound(checkKey){
    buttonAnimation(checkKey);
    var audio;
    switch (checkKey) {
        case 'w':
            audio = new Audio("sounds/crash.mp3");
            break;
        case 'a':
            audio = new Audio("sounds/kick-bass.mp3");
            break;
        case 's':
            audio = new Audio("sounds/snare.mp3");
            break;
        case 'd':
            audio = new Audio("sounds/tom-1.mp3");
            break;
        case 'j':
            audio = new Audio("sounds/tom-2.mp3");
            break;
        case 'k':
            audio = new Audio("sounds/tom-3.mp3");
            break;
        case 'l':
            audio = new Audio("sounds/tom-4.mp3");
            break;
        default:
            console.log(this.innerHTML);
            audio = new  Audio("sounds/crash.mp3");
    }
    audio.play();
}

function buttonAnimation(checkKey){
    var activeButton = document.querySelector("." + checkKey);
    activeButton.classList.add("pressed");
    console.log(activeButton);
   setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
}

var array = document.getElementsByClassName('drum');
for (var i = 0; i < array.length; i++) {

    array[i].addEventListener("click", function () {
        var sendKey = this.innerHTML;
        playSound(sendKey);
    });
}

document.addEventListener('keydown',function(event){
    playSound(event.key);
});

// var audio = new Audio("sounds/tom-1.mp3");
//