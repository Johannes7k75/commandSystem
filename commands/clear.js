module.exports = {
    name: 'clear',
    description: 'Clears the screen from all 3d and 2d Objects',
    execute(client, msg, args) {

        const { log } = require('../utils/log')
        if (!args[0]) {
            Hud.clearDraw2Ds()
            Hud.clearDraw3Ds()
            log('Cleared all 2D and 3D objects')
        } else if (args[0].toLowerCase() === "2d") {
            Hud.clearDraw2Ds()
            log('Cleared 2D objects')
        } else if (args[0].toLowerCase() === "3d") {
            Hud.clearDraw3Ds()
            log('Cleared 3D objects')
        }
    }
}