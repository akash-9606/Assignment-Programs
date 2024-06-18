//  Write a function to count repeated characters in a string and print in a string format.
let str = 'Akaskakash'

let obj = [];

for(i=0;i<str.length;i++)
    {
        if(obj[str[i]])
            {
                obj[str[i]] ++
            }
            else
            {
                obj[str[i]] = 1
            }
    }
console.log(obj);