export default class Person {

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