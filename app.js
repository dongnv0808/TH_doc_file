const fs = require('fs');

console.log('Start');

fs.readFile('test.txt', 'utf-8', (err, data) => {
    console.log(data);
})

console.log('End');