let client = {};
client.prefix = '.';
client.commands = new Map();

['commandHandler', 'eventHandler'].forEach(handler => {
    require(`./handler/${handler}`)(client);
});