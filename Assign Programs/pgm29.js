//Write a function to capitalize the first letter of each word in an array of strings.

let x = ['akash','trijal']
    let out = x.map(el => el.charAt(0).toUpperCase()+el.slice(1))
console.log(out);

