module.exports = (client, msg) => {
    GlobalVars.putString("MESSAGE", '')
    GlobalVars.putString("MESSAGE_ARGS", '')
    if (!msg.message.toString().startsWith(client.prefix)) return

    let content = msg.message.toString()
    let args = msg.message.toString().slice(client.prefix.length).trim().split(/ +/g)
    let cmd = args.shift().toLowerCase()
    let command = client.commands.get(cmd)

    // cancel sending message
    msg.message = ''

    // GlobalVars.getInt(VAR)
    // GlobalVars.putInt(VAR, VALUE)

    if (command) {
        GlobalVars.putString("MESSAGE", content)
        GlobalVars.putString("MESSAGE_ARGS", JSON.stringify(args))
        // Chat.log('./all_Macros/commandSystem/' + command.path.replace('./', ''))
        // command.execute(client, content, args)
        JsMacros.runScript('./all_Macros/commandSystem/' + command.path.replace('./', ''))
        Client.getMinecraft().field_1705.method_1743().method_1803(GlobalVars.getString("MESSAGE"))
    }

}