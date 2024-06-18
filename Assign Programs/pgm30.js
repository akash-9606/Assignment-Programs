// Write a function to calculate the sum of total marks in an array of objects.
let students = [
    { name: 'Alice', totalMarks: 85 },
    { name: 'Bob', totalMarks: 90 },
    { name: 'Charlie', totalMarks: 75 },
    { name: 'David', totalMarks: 95 }
];

function calculateTotalMarks(students)
{
    let sum = 0;

    for(i=0;i<students.length;i++)
        {
            sum += students[i].totalMarks;
        }
    return sum
}

let out = calculateTotalMarks(students)
console.log(out);

