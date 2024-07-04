import { EventEmitter } from 'events';

const emitter = new EventEmitter();

const  greetHandler = (name) => {
    console.log('Hello ' + name);
}

const goodByeHandler = (name) => {
    console.log('Goodbye ' + name);
};

emitter.on('greet', greetHandler);
emitter.on('goodbye', goodByeHandler);

emitter.emit('greet', 'Amey');
emitter.emit('goodbye', 'Jenny');

emitter.on('error',(err) => {
    console.log('An error occurred: ' + err);
})

emitter.emit('error', new Error('Something went wrong'));

