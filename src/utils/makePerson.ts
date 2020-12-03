export function makePerson(name:string, age : number) {
	return {name:name, age:age};
}

export function testMakePerson() {
	console.log(
		makePerson('kang', 22),
		makePerson('pakr', 23)
	)
}