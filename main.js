// 1 -----------------------------------------------------------------1

let str = "hello world"
let res = ""
let word = ""

for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] === " ") {
        res += word + " "
        word = ""
    } else {
        word = str[i] + word
    }
}
res += word

console.log(res)

// 2 ------------------------------------------------------------------2
// let str = "level"
// let res = 'true'

// for (let i = 0; i < str.length / 2; i++) {
//     if (str[i] !== str[str.length - 1 - i]) {
//         res = 'false'
//     }
// }

// console.log(res)


// 3 -----------------------------------------------------------------3
// let str = 'HellO'
// let res = 0

// for (let i = 0; i < str.length; i++) {
//     if (str[i] === str[i].toUpperCase()) {
//         res++        
//     }        
// }

// console.log(res);
