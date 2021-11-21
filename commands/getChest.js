module.exports = {
    name: 'getchest',
    description: 'Get the chest arround of your player',

    execute(client, msg, args) {
        Hud.clearDraw3Ds()
        overlay = Hud.createDraw3D()
        Hud.registerDraw3D(overlay)

        let { x, y, z } = Player.getPlayer().getPos()
        x = parseInt(x); y = parseInt(y); z = parseInt(z)

        for (xi = -5; xi < 5; xi++) {
            for (yi = -5; yi < 5; yi++) {
                for (zi = -5; zi < 5; zi++) {
                    blockId = World.getBlock(x + xi, y + yi, z + zi).getId()
                    if (blockId === 'minecraft:chest' || blockId === 'minecraft:hopper' || blockId === 'minecraft:barrel' || blockId === 'minecraft:shulker_box') {
                        Player.getPlayer().interactBlock(x + xi, y + yi, z + zi, 0, false)
                        Client.waitTick()
                    }
                }
            }
        }

        KeyBind.key("key.esc", true)
    }
}
