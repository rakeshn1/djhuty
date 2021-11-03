const fileCheck = require('./fileChecker');

function checkNUpload (page, path, selectorText) {
    return new Promise(async (resolve, reject) => {
        let fileCheckResult  = await fileCheck(path);
        if(fileCheckResult){
            const [fileChooser] = await Promise.all([
                page.waitForFileChooser(),
                page.click(selectorText),
            ]);
            await fileChooser.accept([path]);
            resolve();
        }else{
            throw new Error('File doesn\'t exists')
        }
    })
}

module.exports = checkNUpload;