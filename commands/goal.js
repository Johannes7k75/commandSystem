module.exports = {
    name: 'goal',
    description: 'Sets a goal',

    execute(client, msg, args) {
        let x, y, z;
        Hud.clearDraw3Ds();
        overlay = Hud.createDraw3D()
        Hud.registerDraw3D(overlay)

        if (!args[0]) {
            x = parseInt(Player.getPlayer().getX())
            z = parseInt(Player.getPlayer().getZ())
            overlay.addBox(x, 0, z, x + 1, 256, z + 1, parseInt("17a05d", 16), 100, parseInt("17a05d", 16), 100, true)
        }
        if (args.length === 2) {
            x = parseInt(args[0])
            z = parseInt(args[1])
            overlay.addBox(x, 0, z, x + 1, 256, z + 1, parseInt("17a05d", 16), 100, parseInt("17a05d", 16), 100, true)

        } else if (args.length === 3) {
            x = parseInt(args[0])
            y = parseInt(args[1])
            z = parseInt(args[2])
            overlay.addBox(x, y, z, x + 1, y + 2, z + 1, parseInt("17a05d", 16), 100, parseInt("17a05d", 16), 100, true)
        }
    }
}