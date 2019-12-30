const fs = require("fs");
const timeout = 5000;
//TODO place timeout in config
const getDirectory = (path) => {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            reject('Promise timed out after ' + timeout + ' ms');
        }, timeout);

        return fs.readdir(path, function (err, files) {
            if (err) reject(err)
            resolve(files)
        });
    })
}

const prepareResponseData = async (path, files) => {
    return Promise.all(files.map(async file => {
        const stat = await fs.promises.lstat(`${path}/${file}`);
        return { path: file, isFolder: stat.isDirectory() }
    }))
}

module.exports = { getDirectory, prepareResponseData }