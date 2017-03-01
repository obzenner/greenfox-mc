import container from './container';

require('dotenv').config();
require("babel-core/register");
require("babel-polyfill");

setupConfig(container.get('config'));
function setupConfig(config) {
    config.update('cache', 'memory');
    config.update('mongo', {
        type: 'memory',
        url: 'mongodb://localhost:27017/prod'
    });
}

async function update() {
    const requestmonitor = await container.get('requestmonitor');
    const cache = await container.get('cache');
    const requests = await requestmonitor.getRequests()
    return cache.increment('totalIncomingRequests', requests.length);
}

update();