module.exports = {
    name: 'test',
    description: 'Test command',

    execute(client, msg, args) {
        const { log } = require('../utils/log')
        Client.waitTick(500)
        Chat.log('Test')
    }
}