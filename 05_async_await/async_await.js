const fs = require('fs')
const util = require('util')

// Traditional Method - Callbacks
const asyncMethodOld = () => {
    fs.readFile('./file01.txt', (err, data1) => {
        if (err) throw err 
        fs.readFile('./file02.txt', (err, data2) => {
            if (err) throw err 
            fs.readFile('./file03.txt', (err, data3) => {
                if (err) throw err 
                console.log(data1 + data2 + data3)
            })
        })
    })
}

asyncMethodOld()

// Modern Method - Async & Await
const readFile = util.promisify(fs.readFile)
const asyncMethodNew = async () => {
    try {
        let data01 = await readFile('./file01.txt')
        let data02 = await readFile('./file02.txt')
        let data03 = await readFile('./file03.txt')
        console.log(data01 + data02 + data03)
    } catch (e) {
        console.log(e)
    }
}

asyncMethodNew()