const fs = require("fs")
// const quote = "Inspiration does exist, but it must find you working"
// fs.writeFile("./awesome.html", quote, (err) => {
//     console.log("Completed Writing")
// })

// const [, , n1] = process.argv
// console.log(n1)
// const quote1 = "Don't settle for average"
// for (let i = 1; i <= n1; i++) {
//     fs.writeFile(`./backup/text-${i}.html`, quote1, (err) => {
//         console.log("Completed Writing")
//     })

// }


// fs.readFile("./cool.txt", "utf-8", (err, data) => {
//     console.log(data)
// })


// fs.readFile("./cool.txt", "utf-8", (err, data) => {
//     if (err) {
//         console.log("❌", err);
//     }
//     else {
//         console.log(data)
//     }
// })


// const quote3 = "Life is either a daring adventure or nothing at all"
// fs.appendFile("./fun.html", "\n" + quote3, (err) => {
//     console.log("completed appending")
// })

fs.unlink("./delete-me.css", (err) => {
    console.log("deleted successfully")
})