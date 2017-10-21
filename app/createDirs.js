// J. Rasmussen 2017

const fs = require('fs-extra');
const m = require('moment');

module.exports = async config => {
    let base = process.cwd() + '/';
    let date = m();
    let root = process.cwd() + '/' + 'Day-' + config.day + '/';
    for (let i = config.numCameras; i > 0; i--) {
        await fs.ensureDir(root + config['camera ' + i]);
    }
    return;
}
