module.exports = {
    name: "uuid",
    description: "Get the UUID of a player",
}
const message = GlobalVars.getString("MESSAGE")
const args = JSON.parse(GlobalVars.getString("MESSAGE_ARGS"))


if (!args[0]) return
World.getPlayers().forEach(player => { if (player.getName() === args[0]) { Chat.log(player.getUUID()) } })