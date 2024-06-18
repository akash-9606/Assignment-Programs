//  Write a function to find the second maximum and minimum numbers in an array.
let x = [2,4,6,8,9]

function maxAndmin(arr)
{
    let max = arr[1];
    let min = arr[1]

    for(i=0;i<arr.length;i++)
        {
            if(arr[i] > max)
                {
                    max = arr[i-1];
                }
            if(arr [i] < min)
                {
                    min = arr[i+1]
                }
        }
    return {max , min}
}
let out = maxAndmin(x);
console.log(out);