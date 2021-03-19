// Crash
function crashAnimation() {
  var crashCymbol = document.getElementById("Crash-Cymbol");
  var crashTimeLine = gsap.timeline();
  crashTimeLine
    .to(crashCymbol, 0.1, { rotation: 8, transformOrigin: "50% 50%" })
    .to(crashCymbol, 1.5, { rotation: 0, transformOrigin: "50% 50%", ease: Elastic.easeOut.config(2.5, 0.3) });
  return crashTimeLine;
}

// RightTomDrumAnimation
function rightTomDrumAnimation() {
  var rightTomDrum = document.getElementById("Tom-Right-Drum");
  var rightTomDrumAll = document.getElementById("Tom-Right-All");
  var rightTomDrumTimeLine = gsap.timeline();
  rightTomDrumTimeLine
    .to(rightTomDrum, 0.1, { scaleX: 1.04, transformOrigin: "50% 50%", ease: Expo.easeOut })
    .to(rightTomDrum, 0.1, {scaleY: 0.95, transformOrigin: "50% 50%", ease: Expo.easeOut}, '0')
    .to(rightTomDrumAll, 0.1, {rotation: 2.5, transformOrigin: "0 50%", ease: Elastic.easeOut}, '0')
    .to(rightTomDrum, 0.4, {scale: 1, transformOrigin: "50% 50%", ease: Elastic.easeOut})
    .to(rightTomDrumAll, 0.6, {rotation: 0, transformOrigin: "0 50%", ease: Elastic.easeOut}, '-=0.4');
  return rightTomDrumTimeLine;
}

// LeftTomDrumAnimation
function leftTomDrumAnination() {
  var leftTomDrum = document.getElementById("Tom-Left-Drum");
  var leftTomDrumAll = document.getElementById("Tom-Left-All");
  var leftTomDrumTimeLine = gsap.timeline();
  leftTomDrumTimeLine
    .to(leftTomDrum, 0.1, {scaleX: 1.04, transformOrigin: "50% 50%", ease: Expo.easeOut})
    .to(leftTomDrum, 0.1, {scaleY: 0.95, transformOrigin: "50% 50%", ease: Expo.easeOut}, '0')
    .to(leftTomDrumAll, 0.1, {rotation: -2.5, transformOrigin: "100% 50%", ease: Elastic.easeOut}, '0')
    .to(leftTomDrum, 0.4, {scale: 1, transformOrigin: "50% 50%", ease: Elastic.easeOut})
    .to(leftTomDrumAll, 0.6, {rotation: 0, transformOrigin: "100% 50%", ease: Elastic.easeOut}, '-=0.4');
  return leftTomDrumTimeLine;
}

function floorTomAnimation() {
  var floorTom = document.getElementById("Floor-Tom");
  var floorTomTimeLine = gsap.timeline();
  floorTomTimeLine
    .to(floorTom, 0.1, { scaleX: 1.02, transformOrigin: "50% 50%", ease: Expo.easeOut })
    .to(floorTom, 0.1, {scaleY: 0.95, transformOrigin: "50% 100%", ease: Expo.easeOut}, '0')
    .to(floorTom, 0.4, {scale: 1, transformOrigin: "50% 100%", ease: Elastic.easeOut});
  return floorTomTimeLine;
}

function snareAnimation() {
	var snareDrum = document.getElementById("Snare-Drum");
  var snareAnimationTimeLine = gsap.timeline();
  snareAnimationTimeLine
    .to(snareDrum, 0.1, { scaleX: 1.04, transformOrigin: "50% 50%", ease: Expo.easeOut })
    .to(snareDrum, 0.1, {scaleY: 0.9, transformOrigin: "50% 100%", ease: Expo.easeOut}, '0')
    .to(snareDrum, 0.4, {scale: 1, transformOrigin: "50% 100%", ease: Elastic.easeOut});
  return snareAnimationTimeLine;
}

function kickAnimation() {
  var kickDrumAll = document.getElementById("Kick");
  var kickTimeLine = gsap.timeline();
  kickTimeLine
    .to(kickDrumAll, 0.1, { scale: 1.02, transformOrigin: "50% 100%", ease: Expo.easeOut })
    .to(kickDrumAll, 0.4, { scale: 1, transformOrigin: "50% 100%", ease: Elastic.easeOut });
  return kickTimeLine;
}

function hiHatAnimation() {
	var hiHatTop = document.getElementById("Hi-Hat-Top");
	var hiHatBottom = document.getElementById("Hi-Hat-Bottom");
  var hiHatTimeLine = gsap.timeline();
  hiHatTimeLine
    .to([hiHatTop, hiHatBottom], 0.1, { rotation: -4, transformOrigin: "50% 50%" })
    .to([hiHatTop, hiHatBottom], 0.6, { rotation: 0, transformOrigin: "50% 50%", ease: Elastic.easeOut.config(1.5, 0.2) });
  return hiHatTimeLine;
}

function playSound(checkKey) {
  var master = gsap.timeline();
  buttonAnimation(checkKey);
  var audio;
  switch (checkKey) {
    // Crash
    case "d":
      audio = new Audio("sounds/crash.mp3");
      master.add(crashAnimation);
      break;
    // Foor-Tom
    case "f":
      audio = new Audio("sounds/floorTom.mp3");
      master.add(floorTomAnimation);
      break;
    // Tom-Left-Drum
    case "r":
      audio = new Audio("sounds/bigRackTom.mp3");
      master.add(leftTomDrumAnination);
      break;
    // Tom-Right-Drum
    case "u":
      audio = new Audio("sounds/smallRackTom.mp3");
      master.add(rightTomDrumAnimation);
      break;
    // Snare
    case "j":
      audio = new Audio("sounds/snare.mp3");
      master.add(snareAnimation);
      break;
    // Hi Hat
    case "k":
      audio = new Audio("sounds/hiHatClosed.mp3");
      master.add(hiHatAnimation);
      break;
    // Kick
    case "b":
      audio = new Audio("sounds/kick.mp3");
      master.add(kickAnimation);
      break;
    default:
      break;
  }
  if (audio) {
    audio.play();
  }
}

function buttonAnimation(checkKey) {
  var getButton = document.querySelectorAll("button." + checkKey);
  var activeButton = getButton[0];
  if (activeButton) {
    activeButton.classList.add("pressed");
    setTimeout(function () {
      activeButton.classList.remove("pressed");
    }, 100);
  }
}

var array = document.getElementsByClassName("drum");

for (var i = 0; i < array.length; i++) {
  array[i].addEventListener("click", function () {
    var classKey = this.classList;

    playSound(classKey[0]);
  });
}

document.addEventListener("keydown", function (event) {
  playSound(event.key);
});

/*
#Crash {
}
#Crash-Stand-Top {
}
#Crash-Cymbol {
}
#Crash-Stand {
}


*/
