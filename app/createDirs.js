const fs = require('fs-extra');

module.exports = async config => {
    let rootDir = `${process.cwd()}/Day-${config.day}/`;
    for (let i = config.numCameras; i > 0; i--) {
        await fs.ensureDir(`${rootDir}/${config[`Camera-${i}`]}`);
    }
}
