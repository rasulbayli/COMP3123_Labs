/**
 purpose :
 filter()
 reduce()
 map()
 forEach()
 search()
 */

 console.log("Starting - lab2 array methods")
const courses = ["COMP3123", "COMP3122", "COMP1230", "FASH1111"]
console.log(courses[0][0])
const filteredCourses = courses.filter((course) => course[0] === "C")
console.log(filteredCourses)