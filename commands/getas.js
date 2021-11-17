module.exports = {
    name: "getas",
    execute(client, msg, args) {
        let item = Player.getPlayer().getMainHand()
        let attackspeedAttribute = item.getRaw().method_7909().method_7844(Java.type("net.minecraft.class_1304").field_6173).get(Java.type("net.minecraft.class_5134").field_23723).get(0)
        let attackspeed = Math.round((4 + attackspeedAttribute.method_6186()) * 10) / 10

        Chat.log(1 / attackspeed)
        Chat.log(attackspeed)
    }
}