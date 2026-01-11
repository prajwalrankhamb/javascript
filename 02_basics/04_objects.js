// const tinderUser = new Object()

const tinderUser = {}

tinderUser.id = 1
tinderUser.name = "prajwal"
tinderUser.email = "prajwal@gmail.com"

// console.log(tinderUser);

const otherUser = {
    email : "p@gmail.com",
    fullName : {
        userFullName : {
            firstName : "prajwal",
            lastName : "Rankhamb"
        }
    }
}

// console.log(otherUser.fullName.userFullName.firstName);

const obj1 = {1 : 'a', 2 : 'b'}
const obj2 = {3 : 'a', 4 : 'b'}

// const obj3 = Object.assign({},obj1, obj2)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const users = [
    {
        id: 1,
        name: "Rohan"
    },
    {
        id: 2,
        name: "Prajwal"
    },
    {
        id: 3,
        name: "Rohit"
    }
]

// console.log(users[1].name)

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

//check 
// console.log(tinderUser.hasOwnProperty('email'));


//Object de-structure

const course = {
    courseName: "JS in hindi",
    courseFees: 999,
    courseInstructor: "Hitesh"
}

// console.log(course.courseInstructor);

const {courseInstructor: instructor} = course

// console.log(courseInstructor);

console.log(instructor);

//JSON API

// {
//     "name" : "prajwal",
//     "courseName" : "JS in hindi",
//     "free" : "free"
// }

[
    {},
    {},
    {},
]