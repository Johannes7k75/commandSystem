module.exports = {
    name: "getthreads",
    description: "Get the number of threads",

    execute(client, msg, args) {
        const { log } = require('../utils/log')
        log('1')
        JsMacros.getOpenContexts().forEach(c => { log(c.getMainThread()) })
    }
}