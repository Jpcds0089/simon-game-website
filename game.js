/* Functions ---------------------------------------------------- */


function randomNumber(gameLevel) {
    var targets = 1;
    var randomNumber = Math.floor((Math.random() * 100) + 1);    
    
    if (gameLevel > 0 && gameLevel <= 2) {
        if (randomNumber <= 50) {
            return targets ++;
        }
        return targets;
    } 
    else if (gameLevel > 2 && gameLevel <= 4) {
        if (randomNumber <= 25) {
            return targets + 2;
        } else {
            return targets ++;
        }
    }  
    else if (gameLevel > 4 && gameLevel <= 6) {
        if (randomNumber <= 25) {
            return targets + 3;
        } else {
            return targets + 2;
        }
    }  
    else if (gameLevel > 6 && gameLevel <= 8) {
        return targets + 3;
    }
}

function challengesLogic(amountOfChallenges, cssOfTarget) {

    for (let i=0; i<amountOfChallenges; i++) {
        var hi = task(i);
        }
        
    function task(i) {
        setTimeout(function zero() {

            /* Animation */
            $(cssOfTarget).animate({"opacity": 0.5});

            /* Sound */
            switch (cssOfTarget) {
                case "#green":
                    var sound = new Audio("sounds/green.mp3");
                    sound.play();
                    break;
                case "#red":
                    var sound = new Audio("sounds/red.mp3");
                    sound.play();
                    break;
                case "#yellow":
                    var sound = new Audio("sounds/yellow.mp3");
                    sound.play();
                    break;
                case "#blue":
                    var sound = new Audio("sounds/blue.mp3");
                    sound.play();
                    break;
                default:
                    console.log("Don't was none of the colors. Colors: " + cssOfTarget);
                    break;
            }

            /* Animation */
            $(cssOfTarget).animate({"opacity": 1});

            return true;

        }, 2000 * i);
        return true
    }

    //return true;
}


/* Init --------------------------------------------------------- */


/* globalVariable */
var gameLevel = 6;

/* Listener the keyboard */
$(document).on("keypress", function(event) {


    /* Game logic ----------------------------------------------- */


    /* Defining the game level */
    if (gameLevel < 8) {
        $("h1").text("Level " + gameLevel);
    } else {
        $("h1").text("Final Level");
    }

    console.log("Game level: " + gameLevel);

    /* Gameplay logic */
    while(true) {
        
        /* Calculating the targets */
        var amountOfTargets = randomNumber(gameLevel);

        console.log("Amount of targets: " + amountOfTargets);

        var listOfTargets = ["#green", "#red", "#yellow", "#blue"];

        for (var i = 0; i < amountOfTargets; i++) {
            
            var amountOfChallenges = randomNumber(gameLevel);
            
            console.log("Target " + i + " amount of challenges: " + amountOfChallenges);

            /* Choosing the target */
            var random = Math.floor(Math.random() * listOfTargets.length);
            var target = listOfTargets[random];

            console.log("Target chosed: " + target);

            /* Execulting the challenge of the target */
            var count = 0;
            while (true) {
                if (count === 0) {
                    var challenges = challengesLogic(amountOfChallenges, target);
                }
                else if (challenges === true) {
                    console.log("Challenge complete!\n");
                    break;
                } else if (count > 1000) {
                    console.log("\nDon'n funct :/\n");
                    break;
                }
                count ++;
            }

            /* Removing target of the list */
            listOfTargets = listOfTargets.filter(function(item) {
                return item !== listOfTargets[target];
            })
        }

        break;
    }
})