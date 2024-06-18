// Find a = [3,7,8,6,2,5] maximum and minimum number in array
let a = [2,7,8,6,2,5]

function maxAndmin(arr)
{
    let max = arr[0];
    let min = arr[0]

    for(i=0;i<arr.length;i++)
        {
            if(arr[i] > max)
                {
                    max = arr[i];
                }
            if(arr[i] < min)
                {
                    min = arr[i];
                }
        }
        return {max,min}
        
}
let out = maxAndmin(a)
console.log(out);

