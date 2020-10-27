import Person from './Person.js';

export default class App {

  constructor() {

    this.createPersons();
    this.createNewPersonEventHandling();
    this.listPersons(); // also adds kill/revive event handling

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

    // Empty the content of person-list before adding persons
    $('.person-list').empty();

    // Loop through the array (for each is named for...of in JS)
    let index = 0;
    for (let person of this.persons) {

      /* Use jQuery to add new html in the DOM inside
      the element with class 'person-list
      Note that we write the string as a template literal*/
      // inside a template literal ${} does not refer to jQuery
      // it is just that syntax for including JS expressions
      $('.person-list').append(`
      <div>
      <h2>${person.name}</h2>
       <p>${person.sayHi()}</p>
        <button class="kill-revive-button" data-index="$"${index}
        ">${person.alive ? 'Kill' : 'Revive'}</button>
       </div>
        `);

      index++;

    }

    // Add an event handler to all the kill/revive buttons
    let that = this; // that = this instance of App;
    $('.kill-revive-button').click(function () {
      // $(this) = grab the element we clicked with jQuery
      // (in a jQuery event handler this is the element clicked)
      let person = that.persons[+$(this).attr('data-index')];
      person.alive = !person.alive; // toggle dead/alive
      that.listPersons();

    });

  }
  createNewPersonEventHandling() {
    let that = this;
    $('.add-person-button').click(function () {
      // read the values of the name and age inputs fields
      let name = $('.input-name').val();
      let age = +$('.input-age').val();
      if (name === '' || age === '') { return; }
      // add a new person to the persons array
      that.persons.push(new Person(name, age));
      // update the html by calling listPersons
      that.listPersons();
      // empty the name and age fields
      $('.input-name').val('');
      $('.input-age').val('');
    });
  }

}
