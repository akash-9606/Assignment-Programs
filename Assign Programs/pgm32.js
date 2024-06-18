// Write a function to reverse a string without using built-in methods.
let str = 'Trijal'

function revArray(str)
{
    let arr = str.split('')
    let n = str.length;
    let start = 0;
    let end = n - 1;

    while (start < end)
        {
            let temp = arr[start];
            arr[start] = arr[end]
            arr[end] = temp

            start ++;
            end --;
        }
    return arr.join('')


}
let out = revArray(str)
console.log(out);