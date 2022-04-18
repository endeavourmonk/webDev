const fs = require('fs')

// fs.readFile('file.txt', 'utf-8', (err, data) =>{
//     console.log(err, data);
// })
// console.log('Finshed reading file.')

b = fs.writeFileSync('file2.txt', 'this is content of file2.')
console.log(b)
console.log('finished reading file.')