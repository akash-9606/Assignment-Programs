//Write a function to sort an array without using built-in methods.
let arr = [64, 34, 25, 12, 22, 11, 90];

function arrSort(arr)
{
    let n = arr.length;

    for(i=0;i<n-1;i++)
        {
            for(j=0;j<n - i - 1;j++)
                {
                    if(arr[j] > arr[j+1])
                        {
                            temp = arr[j];
                            arr[j] = arr[j+1]
                            arr[j+1] = temp;
                        }
                }
        }
    return arr
}

let out = arrSort(arr);
console.log(out);