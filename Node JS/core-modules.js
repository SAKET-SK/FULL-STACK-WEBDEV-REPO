const path = require('path')

// Global objects
console.log(__dirname)
console.log(__filename)

// Methods given by path module
console.log(path.basename(__dirname))
console.log(path.dirname(__dirname))
console.log(path.extname(__filename))

console.log(path.join(__dirname + "/temp"))

// Methods given by os module
const os = require('os')
console.log(os.arch())
console.log(os.homedir())
console.log(os.platform())