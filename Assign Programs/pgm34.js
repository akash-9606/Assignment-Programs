// Write a function to find how many times each element is repeated in an array.

let x = [1,2,3,4,5,1,2,3,4,5,6,7,6,8,7,8]

let out = x.reduce((acc,el) => {
    if(acc[el])
        {
            acc[el] ++
        }
        else 
        {
            acc[el] = 1
        }
    return acc
},{})

console.log(out);