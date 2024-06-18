// Write a function to check if a given string is a palindrome.

let str = 'akash'


function checkPalindrom(str)
{
    let len = str.length;
    for(i = 0;i < len/2;i++)
        {
            if(str[i] !== str[len - i - 1]) //from the beginning of the string) //(from the end of the string)
                {
                    return 'Not Palindrome'
                }
                else
                {
                     return 'Palindrome'
                }
        }
       
}

let out =  checkPalindrom(str);
console.log(out);