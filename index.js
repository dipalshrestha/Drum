
var buttonList = document.querySelectorAll(".drum");
//addEventListener("click",function (){
  //alert("I am clicked.");
//});
for(var i=0; i<buttonList.length; i++){

  buttonList[i].addEventListener("click", function (){

    var buttonInnerHTML = this.innerHTML;
      buttonAnimation(buttonInnerHTML);
      play(buttonInnerHTML);

  });

}
document.addEventListener("keydown", function(event){
  play(event.key);
  buttonAnimation(event.key);
});
// buttonList.forEach(function (buttonList) {
//   buttonList.addEventListener("click",function (){
//     alert("I am clicked.");
//   });
// });
//
// var audio = new Audio('sounds/tom-1.mp3');
// audio.play();
function play(letter){

  switch (letter) {
    case "w":
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;

    case "j":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;

    case "k":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;

    case "l":
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;

    default:
    console.log(buttonInnerHTML);

  }
}

function buttonAnimation(currentKey){

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function(){
    activeButton.classList.remove("pressed")
  }, 100);


}
