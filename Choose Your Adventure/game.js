//Single line comment
/*

Multiline comment

*/

//document.write("<h1> I can't wait for <em>spring!</em></h1>")

//alert(Warning! Will Robinson... Warning!");

//confirm("Do you like pokemon?");

// ("What type of pokemon do you like?");

//Check coin expression
var checkCoins = function () {
    alert("Pink Coins:" + player.inventory.coins.pink + "/ -n Purple Coins: ");
    (+player.inventory.coins.purple + "/ -n Blue Coins: " + player.inventory.coins.blue);
}

var player = {
    health: 100,
    inventory: {
        coins: {
            pink: 0,
            purple: 0,
            blue: 0
        },
        books: {
            diary: 0,
            guide: 0
        },
        keys: {
            tardis: 0
        },
        food: {
            minimarshmallows: 0,
            minigummybears: 0
        },
        backpack: {
            map: 0,
            waterbottle: 0,
            pillow: 0
        }
    };
    
function GetRandInt(max) {
    var randInt = Math.floor(Math.random() * Math.floor(max));
    return randInt;

//Start Game
    Game();

    function Game() {
        var legendNames = ["Oria", "Iridia", "Cartan", "Rixen"];
        document.write("Legends of" + legendNames[Math.floor(Math.random() * 4)] + "!");
        var playerName = prompt("What is your name?");
        alert("Welcome to the land of Drust " + playerName);
    
        MainRoom();

        function MainRoom() {
            var mainroom = prompt("You wake up... Your head is pounding and your vision blurred. After pacing around walking off the headache your visions clears. It appears you are in an empty room and you can't remember why. /n - look around /n - go back to sleep").toLowerCase();

            if (MainRoom === "look around" || MainRoom === "look") {
                var mainroomLook = prompt("The room is small, dusty, drips of some substance seep into the room from the celing. There are two doors. One leading North and one leading South. The North door is locked but the rest seem open to explore. And on the floor is the only thing in the cementroom. A rug. It's visably moldy and smells terrible. /n - open south door /n - move rug");
            }  
                else if (MainRoom === "go back to sleep" || MainRoom === "sleep") {
                alert("You fall back to sleep on the moldy rug. You dream of distant lands and adventures of a distant but not entierly forgotten past.");
                var resume = confirm("Do you wish to wake up? ");

                if (resume) {
                    MainRoom();
                }
                    else {
                        alert("Game Over! You Failed! You Slept Into A Coma!");

                    }
            }

            function CrystalCave() {
                var crystalcaveEnv = promt("Rock cave walls with purple crystals illuminating the room. At the West of the room there is a pool. It reflecks and glitters of the purple light crystals. /n - swim in pool /n - look around /n - throw rock ");


                if (crystalcaveEnv === "swim in pool" || "swim") {
                    var crystalWaters = prompt("You swim around the pool. And it strangly makes no ripples in the water. The crystals reflect off the surface of the water but you don't see you own reflection. It feels refreshing. You wonder when the last time you had a bath was. /n - get out");
                    if (crystalcaveEnv = "get out") {
                        alert("You get out and your are dripping wet because you didn't take off your close.");
                    }
                }
                    else if (crystalcaveEnv === "throw rock" || "throw") {
                    alert("You throw rock into pool but it doesn't wripple. As soon as its done hopping is sinks to an unknown bottom.");
                }   
                if (crystalcaveEnv === "look around" || "look") {
                    var crystalcaveEnv = prompt("You scan the room and see writing on the wall. It spells out Keepers of the Orians. A strange icky sensaton creeps up your spine like someones watching you. You glance around but see nothing there.");
                }  
                    else {
                        alert("I don't understand" + crystalcaveEnv);
                        CrystalCave();
                    }
                switch (new Area().getArea()) {
                case MainRoom:
                    area = "MainRoom"
                    break;
                case CrystalCave:
                    area = "CrystalCave"
                    break;
                }
}