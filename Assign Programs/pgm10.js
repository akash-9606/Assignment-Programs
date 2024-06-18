//Write a function to flatten a nested array.
let x = [1, [2, [3, 4], 5], 6, [7]];

function flatArray()
{
    let out = x.flat(3)
    return out
}
let out1 = flatArray(x)
console.log(out1);