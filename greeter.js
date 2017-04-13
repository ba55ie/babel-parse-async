export default class Greeter {
	constructor(name)	 {
		this.name = name;
	}

	async greet() {
		const greeting = await Greeter.sayHi(this.name);

		return greeting;
	}

	static sayHi(name) {
		return new Promise(resolve => setTimeout(() => resolve(`Hello, my name is ${name}`), 1500));
	}
}
