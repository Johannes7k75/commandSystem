module.exports = {
    name: "help",
    description: "Displays all commands",

    execute(client, message, args) {
        let { log } = require('../utils/log')
        log(`Available commands:`)
        Client.waitTick(500)
        if (!args[0]) {
            client.commands.forEach(command => {
                log(`${command.name}, ${command.description || 'no description'}`)
            })
        }
    }
}