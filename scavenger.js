 //  How to Create an Egg
// Create a brick, name the brick "egg [name]" without the square brackets.

    // Egg Variables
let eggName = "egg" // What the collectible is referred to as
let victoryColor = "[#00FF00]" // Color of the announcement when you collect an egg
let failColor = "[#FF0000]" // Color of the announcement if you've already collected an egg

let eggRef = eggName.charAt(0).toUpperCase() + eggName.slice(1); // No touchy

    // Player Variables
let playerSpeed = 6 // Player's speed (Default is 4)
let loadTool = false // If the player has the tool their avatar is wearing

    //  CREATES EGGS
world.bricks.forEach((brick) => {
    if ( brick.name?.startsWith("egg") ) {
        brick.eggName = brick.name?.length > 3 ? brick.name.slice(4) : eggRef

        brick.touching(debounce(async(p) => { 

                // Checks if the player has the egg in their inventory.
            if ( !p.eggInv.includes(brick.eggName) ) { 
                p.eggInv.push(brick.eggName) ; p.setScore(++p.score) 
                p.centerPrint(`${victoryColor}You found the ${brick.eggName}!`, 3)

            } else p.centerPrint(`${failColor}You already collected this ${eggName}!`, 5)
        }, 1000))
    }
})
    //  TODO - PLAYER JOIN EVENT
Game.on("playerJoin", (p) => {
        //  Runs code when the player is fully loaded in
    p.on("initialSpawn", () => {
        p.loadTool = loadTool ; p.setSpeed(playerSpeed) 
        p.eggInv = [] // Keeps track of the player's eggs
    })
})