const beat1 = world.bricks.filter(b => b.name.startsWith("Beat1"))
const beat2 = world.bricks.filter(b => b.name.startsWith("Beat2"))

        //  Variables
    // Delay between switch in Milliseconds/mS
    // Default - 1000mS
let delay = 1000
    // Which color is chosen first
    // Default - false
let x = false

setInterval(() => {
    beat1.forEach(brick => {
        brick.setVisibility(x ? 1 : 0.5)
        brick.setCollision(x)
    })
    beat2.forEach(brick => {
        brick.setVisibility(x ? 1 : 0.5)
        brick.setCollision(x)
    })
    x = !x
}, delay)
