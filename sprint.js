//Game.on("initialSpawn", (player) => {
 //  player.speedCooldown = false

 /*  player.keypress(async(key) => {
      if (player.speedCooldown) return
      if (key === "shift") {
          player.speedCooldown = true

         player.bottomPrint("Boost activated!", 3)

         player.setSpeed(8)

          await sleep(6000)

          player.setSpeed(4)

          player.bottomPrint("Boost cooldown...", 6)

          setTimeout(() => {
               player.speedCooldown = false
           }, 1000)
       }
   })
})

const defspeed = 4;
Game.on('playerJoin', p => {
    p.on('initialSpawn', () => {
        p.sprint = false;
        p.keypress(async(k) => {
            if (k != 'shift') return;
            p.sprint = !p.sprint;
            p.setSpeed(p.sprint ? defspeed * 2 : defspeed);
        });
    });
    p.on('respawn', () => {
        p.sprint = false;
    });
})
*/

Game.on("initialSpawn",(player) => {
    player.setJumpPower(6)
    player.sprinting = 0
    player.speedCooldown = false
    player.keypress(async(key) => {
        if (player.speedCooldown) return
        if (key === "shift") {
            if(player.sprinting == 0) {
                player.sprinting = 2
                for (let step = 0; step < 41; step++) {
                    await sleep(10)
                    player.setCameraFOV(player.cameraFOV += 1);
                  }
                player.setSpeed(10)
                player.sprinting = 1
                player.setCameraFOV(100)
            } else {
                player.sprinting = 2
                for (let step = 0; step < 41; step++) {
                    await sleep(10)
                    player.setCameraFOV(player.cameraFOV -= 1);
                  }
                player.setCameraFOV(60)
                player.setSpeed(5)
                player.sprinting = 0
            }}
    })
})



//health sauce

const brick = world.bricks.find(brick => brick.name === "tele6")
brick.touching((player) => {
  player.setPosition(new Vector3(-15,6.5,200))
})


let tool = new Tool("Health#Sauce")
tool.model = 86315
Game.on("playerJoin", (player) => {
       player.equipTool(tool)

   })

   
tool.on("activated", async(p) => {
    
    if (p.alive == false) return
    if (p.ToolEnabled ) return
   

       p.ToolEnabled  = true
       let WAIT = 3;
       

    for (let i = 0; i < WAIT; i++) {
        p.bottomPrint(`Wait: \\c1${WAIT - i}`);
        
        await sleep(1000)
        if (i === WAIT - 1) { p.ToolEnabled = false
           
       }
    }
})

tool.on("activated", debouncePlayer(h => {

    if (h.alive == false) return
       h.setHealth(h.health + 30);
       
    }, 3000))

//burrito

let toool = new Tool("Destoryer's#burrito")
toool.model = 285811
Game.on("initialSpawn", async(player) => { 
    let ownsAsset = await player.ownsAsset(278699)
    if (ownsAsset) {
        player.equipTool(toool)
    }
})

Game.command("fov", async(player, args) => {
    player.setCameraFOV(args)
})