const customEmitter = require('./parent_module');

customEmitter.emit('customEvent', 'john', 34)
customEmitter.emit('customEvent')
customEmitter.emit('customEvent', 'john')
customEmitter.emit('customEvent', 20)
