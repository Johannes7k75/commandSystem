module.exports = (client, msg) => {
    if (!msg.message.toString().startsWith(client.prefix)) return

    let content = msg.message.toString()
    let args = msg.message.toString().slice(client.prefix.length).trim().split(/ +/g)
    let cmd = args.shift().toLowerCase()
    let command = client.commands.get(cmd)

    // cancel sending message
    msg.message = ''

    if (command) {
        command.execute(client, content, args)
        Client.getMinecraft().field_1705.method_1743().method_1803(content)
    }

}