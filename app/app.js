'use strict';
const inquirer = require('inquirer');
const createDirs = require('./createDirs');

module.exports = (async () => {
    let config = {};
    await inquirer.prompt({
            message: "How Many Cameras did you use?",
            name: "numCameras",
        })
        .then(answer => config['numCameras'] = Number(answer.numCameras))
        .catch(console.log);
    for (let i = config.numCameras; i > 0; i--) {
        await inquirer.prompt({
            message: `What was camera ${i}?`,
            name: "name"
        })
        .then(res => config[`Camera-${i}`] = res.name)
        .catch(console.log);
    }
    await inquirer.prompt({
        message: "What day of the shoot is it?",
        name: 'day'
    })
    .then(res => config['day'] = Number(res.day))
    .catch(console.log);

    await createDirs(config);
})();
