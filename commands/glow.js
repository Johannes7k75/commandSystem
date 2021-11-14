module.exports = {
    name: "glow",

    execute(client, msg, args) {
        let { log } = require('../utils/log')
        if (!args[0]) return
        let player

        if (args[0].toLowerCase() === 'clear' && !args[1]) {
            World.getLoadedPlayers().forEach(p => {
                p.setGlowing(false)
            })
            log('§cCleared all glowing§r players')
        } else if (args[0].toLowerCase() === 'clear' && args[1]) {
            World.getLoadedPlayers().forEach(p => {
                if (p.getName() === args[1]) {
                    player = p
                    p.setGlowing(false)
                }
            })
            log(`§cCleared glowing §rfrom ${player.getName()}`)
        } else if (args[0] && !args[1]) {
            if (args[0].toLowerCase() === 'all') {
                World.getLoadedPlayers().forEach(p => {
                    p.setGlowing(true)
                })
                log('§aAll players are glowing')
                return
            }
            World.getLoadedPlayers().forEach(p => {
                if (p.getName().toLowerCase() === args[0].toLowerCase()) {
                    player = p
                    p.setGlowing(p.isGlowing() ? false : true)
                    log(`${player.getName()} is ${player.isGlowing() ? '§aGlowing' : '§cnot Glowing'}`)
                    return
                }
            })
        }

    }
}