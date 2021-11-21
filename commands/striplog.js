module.exports = {
    name: 'stripLog',
    description: 'Strips all logs in a range of 5 Blocks',

    execute(client, msg, args) {
        const { log } = require('../utils/log')

        let { x, y, z } = Player.getPlayer().getPos()
        x = parseInt(x); y = parseInt(y); z = parseInt(z)
        for (xi = -5; xi < 5; xi++) {
            for (yi = -5; yi < 5; yi++) {
                for (zi = -5; zi < 5; zi++) {
                    if (World.getBlock(x + xi, y + yi, z + zi).getId() === 'minecraft:dark_oak_log') {

                        Player.getPlayer().interactBlock(x + xi, y + yi, z + zi, 0, false)

                    }
                }
            }
        }
    }
}