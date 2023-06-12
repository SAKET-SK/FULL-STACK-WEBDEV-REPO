const event = require('events')
const emitter = new event.EventEmitter()

emitter.on("party", function(){
    console.log("Party started....")
})

emitter.emit("party")