// Write a function to remove duplicate characters in a string.

let str = 'abcdbecfgfh'

function removeDuplicates(str) {
    let seen = new Set();
    let result = [];

    for (let char of str) 
    {
        if (!seen.has(char)) 
            {
            seen.add(char);
            result.push(char);
            }
    }

    return result.join('');
}
let out = removeDuplicates(str)
console.log(out);