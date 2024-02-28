let numberOfdrums = document.querySelectorAll(".drum").length;

for ( let i = 0 ; i<numberOfdrums ; i++ ){

    document.querySelectorAll("button")[i].addEventListener("click", function (){
        
        let buttonInnerHTML = this.innerHTML;
        
        makeSound(buttonInnerHTML);

        buttonAnimation (buttonInnerHTML)
    });
}

document.addEventListener("keydown", function(event) {
makeSound(event.key );

buttonAnimation(event.key)
});

function makeSound(key){
    switch (key) {
        case "w":
            let tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

            case "a":
                let tom2 = new Audio("sounds/tom-2.mp3");
                tom2.play();
                break;

             case "s":
            let tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;    
            
            case "d":
            let tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

            case "j":
            let snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

            case "k":
            let crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

            case "l":
            let kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;

    
        default:console.log(buttonInnerHTML)
            break;
    }

}

function buttonAnimation(currentKey){

    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function (){
        activeButton.classList.remove("pressed");

    }, 100)
}
//

// High order functions example

// function add(num1, num2) {
//     return num1 + num2;
//     }
     
//     function subtract(num1, num2) {
//     return num1 - num2;
//     }
     
//     function multiply(num1, num2) {
//     return num1 * num2;
//     }
     
//     function divide(num1, num2) {
//     return num1 / num2;
//     }
     
//     function calculator(num1, num2, operator) {
//     return operator(num1, num2);
//     }

//     // House keeper code

//     var houseKeeper1 = {
//         yearsOfExperience:12,
//         name:"Jane",
//         languages:["French","English"]
//     }
//     undefined
//     alert("hello"+houseKeeper1.name);

//     // Constuctor function

//     function HouseKeeper (yearsOfExperience, name,languages)    {
//         this.yearsOfExperience = yearsOfExperience;
//         this.name = name;
//         this.languages = languages;
//         this.clean = function (){
//             alert("cleaning in progress!!");                
//         }
//     }

//     var houseKeeper1 = new HouseKeeper(5, "Rich" , ["French","English"]);

//     console.log("hello i am " + houseKeeper1.name + " i have worked for "+ houseKeeper1.yearsOfExperience + "years ");


