
module.exports = {
    checkNode : async function (page, id){
        let checkResult = await page.evaluate(() => {
            console.log(id)
            const sel = "#"+id
            let el = document.querySelector(sel)
            return el ? true : false
        })
        console.log(`Node with id ${id} found : ${checkResult}`)
        return Promise.resolve(checkResult);
    }
}
