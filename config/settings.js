const fs = require('fs')
const chalk = require('chalk')
// EDIT DISINI
global.owner = ['62895700747718'] // nomer mu
global.packname = '© Sticker By Bowo' // nama pack sticker
global.author = 'Bowo'// nama author 


let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.yellowBright(`Update File Terbaru ${__filename}`))
delete require.cache[file]
require(file)
})