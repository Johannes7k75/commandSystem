module.exports = {
    name: "glow",

    execute(client, msg, args) {
        let { log } = require('../utils/log')
        if (!args[0]) return
        World.getLoadedPlayers().forEach(p => {
            if (p.getName().toLowerCase() === args[0].toLowerCase()) {
                log(`${p.getName()} is ${p.isGlowing() ? '§cnot Glowing' : '§aGlowing'}`)
                p.setGlowing(p.isGlowing() ? false : true)

            }
        })
    }
}