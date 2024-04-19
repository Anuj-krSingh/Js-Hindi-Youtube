// =====   De-structuring object   =====

const course = {
    coursename: "js in Hindi",
    price: "999",
    courseInstructor: "Hitesh"
}

// course.courseInstructor

// const {courseInstructor} = course
// console.log(courseInstructor);


// =====   De-structuring object   =====
const {courseInstructor: instructor} = course
console.log(instructor);

// Json
// {
//     "name": "Hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

