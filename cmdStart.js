let { log } = require('./utils/log')
if (event.action) {
    if (GlobalVars.getInt("CHAT_CMD_TOGGLE") === 0) {
        GlobalVars.putInt("CHAT_CMD_TOGGLE", 1);
        // set here the path to the index.js
        let context = JsMacros.runScript("./all_Macros/commandSystem/index.js").getCtx()
        GlobalVars.putObject("CHAT_CMD_CONTEXT", context)
        log('§eChatCmds §fhas been §aenabled§w!')
        // log(context.getMainThread())
    } else {
        GlobalVars.putInt("CHAT_CMD_TOGGLE", 0);
        GlobalVars.getObject("CHAT_CMD_CONTEXT").closeContext()
        log('§eChatCmds §fhas been §cdisabled§w!')
    }
}