// J. Rasmussen 2017

const Promise = require('bluebird');
const inquirer = require('inquirer');
const createDirs = require('./createDirs');

module.exports = (async () => {
    let config = {};
    let schema = [
        {
            message: "How Many Cameras did you use?",
            name: "numCameras",
        }
    ]
    let temp = 0;
    await inquirer.prompt(schema)
        .then(answer => {
            temp = answer.numCameras
            return config['numCameras'] = Number(temp);
        })
        .catch(console.log);
    for (; temp > 0; temp--) {
        await inquirer.prompt({
            message: "What was the camera?",
            name: "name"
        })
        .then(res => {
            return config['camera ' + temp] = res.name;
        })
        .catch(console.log);
    }
    await inquirer.prompt({
        message: "What day of the shoot is it?",
        name: 'day'
    })
    .then(res => {
        return config['day'] = Number(res.day);
    })
    .catch(console.log);
    createDirs(config);
})();
