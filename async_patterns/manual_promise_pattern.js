const { readFile, writeFile } = require('fs')

const getText = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(err)
      } else {
        resolve(data)
      }
    })
  })
}

const writeText = (path, first, second) => {
  return new Promise((resolve, reject) => {
    writeFile(path, `THIS IS AWESOME : ${first} ${second}`, { flag: 'a' }, (err, data) => {
      if (err) {
        reject(err)
      } else {
        resolve(data)
      }
    })
  })
}

async function main() {
  const first = await getText('../content/first.txt')
  const second = await getText('../content/second.txt')
  await writeText('../content/result.txt', first, second)

}

main().catch((err) => console.log(err))