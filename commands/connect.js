module.exports = {
    name: "connect",

    execute(client, msg, args) {
        if (!args[0]) return Chat.log('No address given')
        Client.connect(args[0])
    }
}