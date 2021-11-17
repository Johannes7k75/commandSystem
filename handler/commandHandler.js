module.exports = (client) => {
    let { log } = require('../utils/log')
    commands = require('../utils/files')('./commands', []).filter(file => file.endsWith('.js'));
    commands.forEach(command => {
        com = { name: command.split('/').pop().toLowerCase().replace('.js', '') }
        // let com = require('../' + command);
        // Chat.log(com.name)
        // com.name = com.name || 'null'
        // Chat.log(`Loaded command ${com.name}`);
        Chat.log(command.split('/').pop().toLowerCase().replace('.js', ''))
        client.commands.set(command.split('/').pop().toLowerCase().replace('.js', ''), com, (com.path = command));
    })
    log('Loaded commands')
}