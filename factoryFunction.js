function createPerson(fName, lName, age) {
  let person = Object.create(personActions);
  person.fName = fName;
  person.lName = lName;
  person.age = age;
  return person;
}

let personActions = {
  getFullName() {
    return this.fName + " " + this.lName;
  },
  introducton() {
    return `My name is ${this.fName} ${this.lName} and my age is ${this.age}`;
  },
};
let person = createPerson("Mirza","Saeed",23);

console.log(person)
console.log(person.introducton())
console.log(person.getFullName())