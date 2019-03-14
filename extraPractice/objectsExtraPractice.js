//Object Constructor
function Person(name, eyeColor, age) {
    this.name = name;
    this.eyeColor = eyeColor;
    this.age = age;
    this.updateAge = function(){
      return ++this.age;  
    };
}

let person01 = new Person("cwylie0", "brown", 42);
let person02 = new Person("jane", "blue", 43);

console.log(person01);
console.log(person02);