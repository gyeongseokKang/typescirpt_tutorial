class Animal {}

class Cat extends Animal {
  isCat: boolean = true;
}

class Dog extends Animal {
  isDog: boolean = true;
}

const animals: Animal[] = [new Cat(), new Cat(), new Dog()];

function isCat(animal: Animal): animal is Cat {
  return (animal as Cat).isCat !== undefined;
}

animals.every<Cat>(isCat);
