const fs = require("fs");

function fileCheck (path) {
    return new Promise((resolve, reject) => {
        fs.stat(path, function(err, stat) {
            if(err == null) {
                console.log(`The file exists in given path : ${path}`);
                resolve(true);
            } else {
                console.error(`The file doesn't exists in given path : ${path}`)
                console.error(err)
                resolve(false);
            }
        });
    })
}

module.exports = fileCheck;