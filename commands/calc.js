module.exports = {
    name: 'calc',
    description: 'Calculates a math expression',
    execute(client, msg, args) {
        let { log } = require('../utils/log')
        log(eval(args.join(' ')))
    }
}