import Greeter from './greeter';

const john = new Greeter('John Doe');

console.log('greeter created:', john.name);

john.greet()
	.then(m => console.log('message:', m));
