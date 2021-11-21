module.exports = {
    name: 'connect',
    description: 'Connects to a server',
    execute(client, msg, args) {
        if (!args[0]) { Chat.log('No address given') }
        if (args[0]) { Client.connect(args[0]) }
    }
}

