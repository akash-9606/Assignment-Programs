// Write a function that takes an array of numbers and returns a new array,
// where each element is doubled using the map method

let a = [1,2,3,4,5]

function double(arr)
{
    return arr.map(el => el*el)
}

let out = double(a)
console.log(out);