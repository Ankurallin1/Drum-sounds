 // The addEventListener() method attaches an event handler to a document
 // syntax of addEventListener --> document.addEventListener(event, function, Capture) 
 // as you notice that after the function we didn't add a () because if we add it than as soon as the web page open 
 // the function got triggered for the first without the click made
 // here we are using this which used to get current click button or it basically store the identity
 var numberOfDrumButtons = document.querySelectorAll(".drum").length;

 // button press onclick
 for (var i = 0; i < numberOfDrumButtons; i++) {

     document.querySelectorAll(".drum")[i].addEventListener("click", function() {
         var buttonInnerHTML = this.innerHTML;
         makeSound(buttonInnerHTML);
         buttonanimation(buttonInnerHTML);
     });

 }
 // we can also add an unknown function in eventlistener like
 // document.querySelector("button").addEventListener("click",function ()
 // {
 //     alert("i got clicked");
 // }); alert("i got clicked");
 // });

 // to play sound in respect of button or key press
 function makeSound(key) {
     switch (key) {
         case "w":
             var tom1 = new Audio("sounds/tom-1.mp3");
             tom1.play();
             break;
         case "a":
             var tom2 = new Audio("sounds/tom-2.mp3");
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
             console.log(key);
     }
 }

 //to respond on keyhit by the user or viewer we will use keypress to detect it

 // keyboard press
 document.addEventListener("keypress", function(event) {
     //  alert("key pressed");
     // if we use pass event in function than it will give as all the details related to the keyhit
     //  alert(event);
     // through event.key we got to know which key was hit
     makeSound(event.key);
     buttonanimation(event.key);
 });

 function buttonanimation(currentkey) {
     var activebutton = document.querySelector("." + currentkey);
     activebutton.classList.add("pressed");
     setTimeout(function() {
         activebutton.classList.remove("pressed")
     }, 100);
 }