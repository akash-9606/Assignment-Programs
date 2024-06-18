//Write a function to find the maximum number in an array.

let x = [1,2,7,9,4,10]

function maxNum(arr)
{
    let max = arr[0]

    for(i=0;i<arr.length;i++)
        {
            if(arr[i] > max)
                {
                    max = arr[i]
                }
        }
        return max
}

let out = maxNum(x)
console.log(out);