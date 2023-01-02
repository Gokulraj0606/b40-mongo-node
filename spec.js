const os = require("os")
//1 kb = 1024 b
//1 mb = 1024 kb
// 1 gb =1024 mb
console.log("Free memory", os.freemem() / 1024 / 1024 / 1024)
console.log("Total memory", os.totalmem() / 1024 / 1024 / 1024)
console.log("Version", os.version())
console.log("CPU", os.cpus())