module.exports = {
    name: 'listEntities',
    description: 'List all loaded Entities in the World',

    execute(client, msg, args) {
        let { log } = require('../utils/log')
        let mobs = 0
        World.getEntities().forEach(entity => {
            // if (entity.getType() === 'minecraft:spider') {
            //     entity.setGlowing(true)
            //     log(`${entity.getX()}, ${entity.getZ()}`)
            // }
            if (entity.getType() === 'minecraft:drowned') {
                entity.setGlowing(true)
                mobs++
            }
        })
        log(`Es wurden ${mobs} gefunden`)
    }
}