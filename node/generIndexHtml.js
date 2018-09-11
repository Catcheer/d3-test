const fs = require('fs')
const path = require('path')

const dir = path.resolve(__dirname, '../')


let htmlStr = `
    <html>
    <head></head>
    <body><ul>`

fs.readdir(dir, 'utf8', (err, fileList) => {
    if (err) {
        console.log(err)
    } else {
        fileList.forEach((file, index) => {
            let stat = fs.statSync(file)
            if (!stat.isDirectory()) {
                // console.log(path.basename(file))
                htmlStr += `<li><a href="./${file}">${file}</a></li>`
            }
            if (index == fileList.length - 1) {
                htmlStr += `</ul></body></html>`
            }
        })
        // console.log(htmlStr)
        fs.writeFile(path.resolve(dir,'./index.html'),htmlStr,(err,file)=>{
            if(!err){
                console.log('done')
            }
        })
    }
})