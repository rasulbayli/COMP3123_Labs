let variableLocal = 200;
var variableGlobal = 100;
variableGlobal = "Hello";
console.log(variableGlobal);

// prototypes: one_time use objectcreated from the
// base prototypes called Object
const newObject = {
  prop1: "Rasul",
  prop2: "comp3123",
  method1: function (pram1) {
    console.log(pram1);
  },
};

console.log(newObject);
console.log(newObject.prop1);
console.log(newObject.prop2);
newObject.method1("Pizza");

// prototypes: constructor
function Student(student_name, course, lunch) {
  this.prop1 = student_name;
  this.prop2 = course;
  this.prop3 = lunch;

  this.method1 = function (parm1) {
    console.log(parm1);
  };
}

const student_morning = new Student("Rasul", "comp3123", "burger");
console.log(student_morning);
console.log(student_morning.prop1);
console.log(student_morning.prop2);
student_morning.method1(student_morning.prop3);

//optinal homewor : Instantiate anothter student object and print its values

// prototypes: Add a method After/ In Another FILE
// to give more capabilities to prototype
Student.prototype.prop4 = "hard_codded value";
Student.prototype.method2 = function (parm1) {
  return parm1;
};

console.log(student_morning.prop4);
console.log(student_morning.method2("chow mein"));

// Class
class prof {
  constructor(prof_name_p) {
    this.prof_name = prof_name_p;
  }

  method1(param1) {
    return param1;
  }
}

const morning_prof = new prof("Laily");
console.log(morning_prof);

// optinal homework : call morning_prof.method
// and directly next print its property
