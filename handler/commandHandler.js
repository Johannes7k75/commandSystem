module.exports = (client) => {
    let { log } = require('../utils/log')
    commands = require('../utils/files')('./commands', []).filter(file => file.endsWith('.js'));
    commands.forEach(command => {
        let com = require('../' + command);
        // Chat.log(`Loaded command ${command}`);

        client.commands.set(command.split('/').pop().toLowerCase().replace('.js', ''), com);
    })
    log('Loaded commands')
}