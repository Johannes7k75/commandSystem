module.exports = {
    name: "getnbt",
    description: "Get the NBT of the main hand",

    execute(client, msg, args) {
        Chat.log(Player.getPlayer().getMainHand().getNBT().toString())
        Chat.log(net.minecraft.class_636.method_2924)
    }
}