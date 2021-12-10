const EventEmitter = require('events')
const customEmitter = new EventEmitter()

// ? Alternative Import
// const eventEmitted = new require('events').EventEmitter
// const customEmitter = new eventEmitted()

customEmitter.on('customEvent', (name, age) => {
  // Default undefined (if not passed)
  if (name === undefined && age === undefined) {
    console.log('Name and age not passed')
  } else
    if (name === undefined) {
      console.log('Name is not passed')
    } else if (age === undefined) {
      console.log('Age is not passed')
    } else {
      console.log(`customEvent Invoked with ${name} and ${age}`)
    }
})

module.exports = customEmitter
