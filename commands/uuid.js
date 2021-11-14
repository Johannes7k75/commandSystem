module.exports = {
    name: "uuid",

    execute(client, msg, args) {
        if (!args[0]) return
        World.getPlayers().forEach(player => { if (player.getName() === args[0]) { Chat.log(player.getUUID()) } })
    }
}