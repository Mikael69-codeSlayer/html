class Person {

  alive = true;

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHi() {
    return 'Hello my name is ' + this.name + ' and I am ' +
      this.age + ' years old. I\'m ' + (this.alive ? 'alive' :
        'dead' + '!');
  }


}

// Create an instance of Person
let kalle = new Person('Kalle', 30);
// Log the whole object
console.log(kalle);
// Log the result of calling say hi
console.log(kalle.sayHi());

// Put three persons in an array
let persons = [
  new Person('Anna', 28),
  new Person('Beata', 30),
  new Person('Cecilia', 20)
];

// Add another person to the array
// (arrays are dynamic - can change length in JS)
persons.push(new Person('David', 5));

// Change the property alive of Beata to false!
persons[1].alive = false;


// Loop through the array (for each is named for...of in JS)
for (let person of persons) {
  console.log(person.sayHi());
}