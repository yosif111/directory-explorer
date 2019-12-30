const recursive = require("recursive-readdir");
const timeout = 1000;

function getDirectory(path) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.error("rejection")
            reject('Promise timed out after ' + timeout + ' ms');
        }, timeout);

        return recursive(path, function(err, files) {
            if (err) reject(err)
            resolve(files)
        });
    })
}

module.exports = { getDirectory }