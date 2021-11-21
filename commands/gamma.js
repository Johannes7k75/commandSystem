module.exports = {
    name: 'gamma',
    description: 'sets your gamma value',

    execute(client, msg, args) {
        let { log } = require('../utils/log')

        if (!args[0]) { log(Client.getGameOptions().getGamma()) }
        if (!isNaN(args[0])) { Client.getGameOptions().setGamma(parseInt(args[0])); log('set gamma to ' + Client.getGameOptions().getGamma()) }
    }
}