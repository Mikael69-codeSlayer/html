import Person from './Person.js';

export default class App {

  constructor() {

    this.createPersons();
    this.listPersons();

  }

  createPersons() {
    // Put three persons in an array
    this.persons = [
      new Person('Anna', 28),
      new Person('Beata', 30),
      new Person('Cecilia', 20)
    ];

    // Add another person to the array
    // (arrays are dynamic - can change length in JS)
    this.persons.push(new Person('David', 5));

    // Change the property alive of Beata to false!
    this.persons[1].alive = false;

  }


  listPersons() {
    // Loop through the array (for each is named for...of in JS)
    for (let person of this.persons) {
      console.log(person.sayHi());
    }

  }
}