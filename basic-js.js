let name = "Peter";
let age = 20;
let graduated = true;
let gpa = 3.75;

let student1 = {
    name : "labubu",
    age : 67,
    graduated : true,
    gpa : 3.67
};

let student2 = {
    name : name,
    age : age,
    graduated : graduated,
    gpa : gpa
};
console.log(student1.name);
console.log(student2);

let grades = ["A", "B", "C", "D", "F"];
let scores  = [90, 80, 70, 60, 50];
let students = [student1, student2];

console.log(students[1].gpa);
function calculategrade(score) {
    if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else {
        return "F";
    }
}

console.log(calculategrade(90));

for (let i = 0; i < scores.length; i++) {
    let grade = calculategrade(scores[i]);
    console.log(`Score: ${scores[i]}, Grade: ${grade}`);
}