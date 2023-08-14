
let str = `Lorem Ipsum is simply dummy text of the printing and typesetting 
 Lorem Ipsum is simply dummy text of the printing and typesetting`;
let arr = str.split(" ")
let obj = {}
let uniq_arr = []
arr.forEach((word, index) => {
    obj[`${word}`] ? null : uniq_arr.push(word)
    obj[`${word}`] = index
});
console.log(uniq_arr);

let j = arr.length-1
for (let i = 0; i < arr.length/2; i++) {
    let first = arr[i];
    let last = arr[j];
    [first, last] = [last, first];
    arr[i] = first;
    arr[j] = last;
    j = j-1 
}

console.log(arr);