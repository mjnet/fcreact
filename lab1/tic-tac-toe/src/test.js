import { copyFileSync } from 'fs';

function Person(name) {
	this.name = name;
	this.hello = function() {
		setTimeout(() => {
			console.log(this.name);
		}, 1000);
	};
}

const p = new Person('Kim');

console.log(p.name);
console.log(p.hello());

const ff = (props) => _.get(_.filter([], name === 'Kim'), 'address');

const ss = (...args) => {
	console.log(arguments);
	console.log(args);
};

ss(1, 2, 3, 4, [ 5, 6 ]);
