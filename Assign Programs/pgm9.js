//Write a function to remove duplicate arrays from an array of arrays.
let arr = [
    [1, 2, 3],
    [4, 5],
    [1, 2, 3],
    [4, 5],  
    [6, 7]
];

function removeDuparr(arrOfArrys)
{
let a = new Set();
let b =[];
    for(arr of arrOfArrys)
    {
        let arrString = JSON.stringify(arr)
        if(!a.has(arrString))
            {
                a.add(arrString)
                b.push(arr)
            }

    }
    return b
}
let out = removeDuparr(arr)
console.log(out);
// let out1 = out.flat(3);
// console.log(out1);



