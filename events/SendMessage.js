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
        comamndFromLoad = load(`commands/${cmd}.js`)
        JsMacros.runScript(`./all_macros/commandSystem/commands/${cmd}.js`, JavaWrapper.methodToJava(comamndFromLoad.execute.bind(null, client, content, args)))
        Client.getMinecraft().field_1705.method_1743().method_1803(GlobalVars.getString("MESSAGE"))
    }

}