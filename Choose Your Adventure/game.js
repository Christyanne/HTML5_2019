//Single line comment
/*

Multiline comment

*/

//document.write("<h1> I can't wait for <em>spring!</em></h1>")

//alert(Warning! Will Robinson... Warning!");

//confirm("Do you like pokemon?");

// ("What type of pokemon do you like?");

Game();

function Game(){
    document.write("Legends of Oria");
    var playerName = prompt("What is your name?");
    alert("Welcome to the land of Oira "+ playerName);
    
    MainRoom();
    
    function MainRoom(){
        var MainRoom = prompt("You wake up... Your head is pounding and your vision blurred. After pacing around walking off the headache your visions clears. It appears you are in an empty room and you can't remember why. /n - look around /n - go back to sleep n/-examine room").toLowerCase();
        
        if (MainRoom == "look around" || ER == "look"){
            var ERLook = prompt ("The room is small, dusty, drips of some substance seep into the room from the celing. There are two doors. One leading North and one leading South. The North door is locked but the rest seem open to explore. And on the floor is the only thing in the cementroom. A rug. It's visably moldy and smells terable. /n - open south door /n - move rug")
            
        }
        else if(MainRoom == "go back to sleep" || prison == "sleep"){
            alert("You fall back to sleep on the moldy rug. You dream of distant lands and adventures");
            var resume = confirm ("Do you wish to continue?");
            
            if (resume){
                MainRoom();
            }
            else{
                alert ("Game Over! You Failed!");
            
            }
        }
    }
}