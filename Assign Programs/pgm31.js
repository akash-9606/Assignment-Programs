//  Write a function to merge two arrays with extra zeros.
let arr1 = [1, 2, 3, 4];
let arr2 = [5, 6, 7];

function mergeArray(arr1, arr2)
{
    let len1 = arr1.length;
    let len2 = arr2.length;

    let maxLength = Math.max(len1, len2)
    let result = [];

    for(i=0;i<maxLength;i++)
        {
            val1 = (i<len1) ? arr1[i] : 0;
            val2 = (i<len2) ? arr2[i] : 0;

            result.push(val1+val2)
        }
    return result
}

let out = mergeArray(arr1, arr2)
console.log(out);
