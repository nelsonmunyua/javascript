const studentProfile = {
    name: "Aisha",
    age: 21,
    courses:[
        {
            title: "javaScriptBasics",
            completed: true,
            scores: [85,90,88],
        },
        {
            title: "Web Development",
            completed: false,
            scores: [78,82,80]
        }
    ],
    contact: {
        email: "aisha@example.com",
        social: {
            twitter: "@aishacodes",
            github: "aisha-dev"
        }
    }
};

// Using the dot notation 
console.log(studentProfile.contact.social.github)
// Using the square brackets
console.log(studentProfile['contact']['social']['github'])

// Score of the second test of web development (dot notation)
console.log(studentProfile.courses[1].scores[1])

// Score of the second test of web development (square brackets)

console.log(studentProfile['courses'][1]['scores'][1])

// Has the student completed the javaScript basic course
console.log(studentProfile.courses[0].completed)

// What is the title of the first course
console.log(studentProfile.courses[0].title)

// What is the students email address
console.log(studentProfile.contact.email)

    console.log( true && false || true
)