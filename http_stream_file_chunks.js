var http = require('http')
var fs = require('fs')

http.createServer((req, res) => {

  // Sending complete file in 1 chunk
  // const text = fs.readFileSync('./content/big.txt', 'utf8')
  // res.end(text)

  // Sending file in chunks
  const fileStream = fs.createReadStream('./content/big.txt', 'utf8')
  fileStream.on('open', () => {
    fileStream.pipe(res)
  })
  fileStream.on('error', (err) => {
    res.end(err)
  })
}).listen(5000)