var numberOfDrumButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", handleListner);
}

//detect button press
function handleListner() {
  var buttonInnerHTML = this.innerHTML;
 makeSound(buttonInnerHTML);
 addAnimation(buttonInnerHTML);

}

//detect key press
document.addEventListener("keypress", function(event){
  makeSound(event.key);
  addAnimation(event.key);
})

//make sound
function makeSound(key)
{
  switch (key) {
    case "w":
      var sound = new Audio("sounds/kick-bass.mp3");
      sound.play();
      break;
    case "a":
      var sound = new Audio("sounds/tom-1.mp3");
      sound.play();
      break;
    case "s":
      var sound = new Audio("sounds/tom-2.mp3");
      sound.play();
      break;
    case "d":
      var sound = new Audio("sounds/tom-3.mp3");
      sound.play();
      break;
    case "j":
      var sound = new Audio("sounds/tom-4.mp3");
      sound.play();
      break;
    case "k":
      var sound = new Audio("sounds/snare.mp3");
      sound.play();
      break;
    case "l":
      var sound = new Audio("sounds/crash.mp3");
      sound.play();
      break;
  }
}

function addAnimation(eventElement)
{
  var activeButton = document.querySelector("." + eventElement);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  }, 100);
}
