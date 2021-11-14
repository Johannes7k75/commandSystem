module.exports = {
    name: "help",
    description: "Displays all commands",

    execute(client, message, args) {
        let { log } = require('../utils/log')
        if (!args[0]) {
            client.commands.forEach(command => {
                log(`${command.name}, ${command.description || 'no description'}`)
            })
        }
    }
}