//Reverse the array without using built-in functions

let x =[2,4,6,8,10]

function revArray(arr)
{
    let start = 0
    let end = arr.length - 1

    while(start < end)
        {
            [arr[start] , arr[end]] = [arr[end] , arr[start]]

            start ++;
            end --;

        }
        return arr
}
let out = revArray(x)
console.log(out);