const path = require('path')


// Resolve
console.log('resolve with relative path: ' + path.resolve('a', 'b', 'c'))
console.log('resolve with absolute path: ' + path.resolve('/a', '/b', 'c'))

// Join
console.log('\njoin with relative path: ' + path.join('a', 'b', 'c'))

const os_module = path.resolve('os_module.js')


console.log('\n\n\tSome Anomalies are here!!!')
console.log('resolve with dirname and absolute path: ' + path.resolve(__dirname, '/a', 'b'))
console.log('resolve with dirname and relative path: ' + path.resolve(__dirname, 'a', 'b'))

console.log('join with dirname and absolute path: ' + path.join(__dirname, '/a', 'b'))