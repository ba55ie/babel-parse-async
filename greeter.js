const sayHi = name => {
	return new Promise(resolve => setTimeout(() => resolve(`Hello, ${name}`), 1000));
}

const greeter = async name => {
	const greeting = await sayHi(name);

	return greeting;
};

export default greeter;
