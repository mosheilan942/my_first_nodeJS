import fs from "fs";
import * as myfunlodash from "./lodashModule.js";


export function read() {
    fs.readFile("./data/text.txt", "utf-8", (error, data) => {
        if (error) throw error;
        let arr = data.split(" ");
        let myarr = arr.slice();
        let rev_data = myfunlodash.rev(myarr)
        console.log(rev_data.toString());
        let uniq_data = myfunlodash.uniq(myarr)
        console.log(uniq_data.length);
        let words = uniq_data;
        let words_str = words.join(" ").toUpperCase();
        send_to_text(words_str);
        const arr_big_five = [];
        words.filter((word) => {
          word.length > 5 ? arr_big_five.push(word) : null;
        });
        console.log(arr_big_five);
        send_to_text(arr_big_five.join(" "));
        let Vowels_Count = [];
        let obj = {};
        
        words.forEach((word) => {
          let times = word.replace(/[^a, e, i, o, u]/gi, "").length;
          obj[`${word}`] = "vowelCount: " + times;
          Vowels_Count.push(word)
        });
        send_to_text(Vowels_Count);
      });
} 

function send_to_text(text) {
  fs.appendFile("result.txt", text + "\n\n", (err) => {
    if (err) throw err;
    console.log("The result has been saved!");
  });
}


