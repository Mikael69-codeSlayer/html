class Person {

  alive = true;

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHi() {
    return 'Hello my name is ' + this.name + ' and I am ' +
      this.age + ' years old.';
  }


}

// Create an instance of Person
let kalle = new Person('Kalle', 30);
// Log the whole object
console.log(kalle);
// Log the result of calling say hi
console.log(kalle.sayHi());