

export class Hello{
	firstName: string = 'John';
	lastName: string = 'Doe';

	sayHello(){
		alert(`Hello ${this.firstName} ${this.lastName}. Nice to meet you.`);
	}
}