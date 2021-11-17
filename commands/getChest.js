Hud.clearDraw3Ds()
overlay = Hud.createDraw3D()
Hud.registerDraw3D(overlay)

const nextChest = require('../utils/getNextChest')
let { x, y, z } = Player.getPlayer().getPos()
x = parseInt(x); y = parseInt(y); z = parseInt(z)

for (xi = -5; xi < 5; xi++) {
    for (yi = -5; yi < 5; yi++) {
        for (zi = -5; zi < 5; zi++) {
            if (World.getBlock(x + xi, y + yi, z + zi).getId() === ('minecraft:chest' || 'minecraft:hopper' || 'minecraft:barrel')) {
                Player.getPlayer().interactBlock(x + xi, y + yi, z + zi, 0, false)
                Client.waitTick()
            }
        }
    }
}