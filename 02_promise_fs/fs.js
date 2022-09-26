const fs = require('fs')

/* Original way 
fs.readFile(
    './content.txt',
    (err, data) => { if (err) { throw(err) } else { console.log(data.toString()) }}
)
*/

/* New way using promise */
const promise = new Promise(
  (resolve, reject) => {
    fs.readFile('./content.txt', (err, data) => {
      if (err) reject(err)
      resolve(data)
    })
  }
)

promise.then(
  value => console.log(value.toString()),
  reason => console.log(reason)
)