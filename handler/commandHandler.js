module.exports = (client) => {
    let { log } = require('../utils/log')
    commands = require('../utils/files')('./commands', []).filter(file => file.endsWith('.js'));
    commands.forEach(command => {
        com = require('../' + command);
        client.commands.set(command.split('/').pop().toLowerCase().replace('.js', ''), com, (com.path = command));
    })
    log('Loaded commands')
}