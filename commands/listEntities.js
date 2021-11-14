module.exports = {
    name: "listEntities",

    execute(client, msg, args) {
        let { log } = require('../utils/log')
        World.getEntities().forEach(entity => {
            if (entity.getType() === 'minecraft:zombie') {
                entity.setGlowing(true)
                log(`${entity.getX()}, ${entity.getZ()}`)
            }
        })
    }
}