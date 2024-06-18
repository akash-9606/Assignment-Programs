// Write a function to remove duplicate elements from an array without using default functions.

let a = [1,2,3,4,5]
let b = [3,4,5,6,7]
let c = a.concat(b)
let d = [];

for(i=0;i<c.length;i++)
    {
        if(!d.includes(c[i]))
            {
                d.push(c[i])
            }
    }
console.log(d);


