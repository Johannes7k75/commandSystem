module.exports = (client) => {
    let { log } = require('../utils/log')
    events = require('../utils/files')('./events', []).filter(file => file.endsWith('.js'));
    events.forEach(event => {
        let evnt = require('../' + event);
        JsMacros.on(event.replace('.js', '').split('/').pop(), JavaWrapper.methodToJava(evnt.bind(null, client)))
        // https://jsmacros.wagyourtail.xyz/?/1.6.0/xyz/wagyourtail/jsmacros/client/api/event/impl/EventSendMessage.html
    })
    log('Loaded events')
}