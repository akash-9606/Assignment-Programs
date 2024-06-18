// Analyze the given input and output, write a program accordingly
let arr = [2,3,4,5,3,3,5,2,5,3];
function sortArr(arr) {
    let b = {};
    
    arr.forEach(el => {
        b[el] = b[el] ? b[el] + 1 : 1;
    });

    let sort = Object.keys(b).sort((a, b) => b - a);

    let result = [];
    sort.forEach(el => {
        result.push(...Array(b[el]).fill(parseInt(el)));
    });

    return result;
}

let out =sortArr(arr)
console.log(out);