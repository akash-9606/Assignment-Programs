// Write a program to print numbers 1-10 with a delay of 1 second between each number.

let num = 1

function printArr()
{
    if( num <= 10)
        {
            console.log(num);
            num++;
            setTimeout(printArr,1000)
        }
}
printArr()