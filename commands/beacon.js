module.exports = {
    name: 'beacon',
    description: 'Displays the beacon range from an tier 4 beacon',
    execute(client, msg, args) {
        overlay = Hud.createDraw3D()
        Hud.registerDraw3D(overlay)

        if (!args[0]) {
            let { x, y, z } = Player.getPlayer().getPos()
            xp = parseInt(x); yp = parseInt(y); zp = parseInt(z)
            let coords = { 1: { x: xp - 50, y: yp - 50, z: zp - 51 }, 2: { x: xp + 51, y: 256, z: zp + 50 } }
            // Chat.log(JSON.stringify(coords))
            overlay.addBox(coords[1].x, coords[1].y, coords[1].z, coords[2].x, coords[2].y, coords[2].z, parseInt("FF0000", 16), 100, parseInt("FF0000", 16), 100, true)
        }

        if (args[0] === 'list') {
            Chat.log(Hud.listDraw3Ds().forEach(e => { Chat.log(e.getBoxes()) }))
        }
    }
}