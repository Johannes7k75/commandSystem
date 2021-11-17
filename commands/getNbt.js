module.exports = {
    name: "getnbt",

    execute(client, msg, args) {
        Chat.log(Player.getPlayer().getMainHand().getNBT().toString())
        Chat.log(net.minecraft.class_636.method_2924)
    }
}