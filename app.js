const fs = require('fs');
for (let index = 1; index <= 100000; index++) {
  fs.writeFileSync('content/big.txt', `This is ${index}th line\n`, { flag: 'a' });
}