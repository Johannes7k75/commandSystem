module.exports = {
    name: "help",
    description: "Displays all commands",

    execute(client, message, args) {
        let { log } = require('../utils/log')
        log(`Available commands:`)
        if (!args[0]) {
            client.commands.forEach(command => {
                builder = Chat.createTextBuilder()
                Chat.log(builder.append(`§8[§c§lJs§9§lMacros§r§8]§r ${command.name}`).withShowTextHover(Chat.createTextHelperFromString(command.description || 'no description')).build())
                // log(`${command.name}, ${command.description || 'no description'}`)
            })
        }
    }
}

// command.description