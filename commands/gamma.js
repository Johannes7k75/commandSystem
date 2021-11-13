module.exports = {
    name: "gamma",

    execute(client, msg, args) {
        Chat.log(Client.getGameOptions().getGamma())
        Client.getGameOptions().setGamma(10000.0)
    }
}