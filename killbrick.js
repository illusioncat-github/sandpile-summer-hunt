// Any brick you name "kill" will kill the player when they touch it.

world.bricks.forEach(brick => { // Gets all brick objects -
    if (brick.name == "kill") { // And check if its named kill -
        killBlock(brick) // Then do all logic with the object(s)
    }
})

function killBlock(brick) {
    brick.touching(debounce((p) => { // Get the player object that touched the block
        p.kill() // Kills the player.
   }), 2000) // Debounce of 2 seconds.
}