'use strict';

// -------------------------------------------------------------------------------------------------------
// Challenge 01:
// Required:
//
// Given a string find the length of the middle word in the sentence
//
// Ex:
// Input: "You can't handle the truth!"
// Output: 6
//
// Input: "You're gonna need a bigger boat"
// Output: 1
//

const wordLength = (str) => {
    let arr= str.split(" ");
    let i=Math.floor((arr.length) / 2);
    let ss=arr[i];
    return ss.length;
    // write your code here
}
// -------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------
// Challenge 02:
// Required:
//
// Write a function that takes two strings and checks if the two strings contain the same combination of letters
//
// Ex:
// Input: "dad", "add"
// Output: true
//
// Input: "dad", "aadd"
// Output: false
//
// Input: "table", "label"
// Output: false
//
// Input: "cat", "rat"
// Output: false

const wordLetters = (str1, str2) => {
    if (str1.length !== str2.length) {
        return false; 
    }
    const freq1 = {};
    const freq2 = {};
    for (let char of str1) {
        if (freq1[char]) {
            freq1[char]++;
        } else {
            freq1[char] = 1;
        }
    }
    for (let char of str2) {
        if (freq2[char]) {
            freq2[char]++;
        } else {
            freq2[char] = 1;
        }
    }
    for (let char in freq1) {
        if (freq1[char] !== freq2[char]) {
            return false;
        }
    }

    return true;
    // let freq1 = new Array(26).fill(0);
    // let freq2 = new Array(26).fill(0);
    // let flag=true;

    // for(let i=0;i<str1.length;i++){
    //     let index = str1.charCodeAt(i) - 'a'.charCodeAt(0);
    //     freq1[index]++;
    // }
    // for(let i=0;i<str2.length;i++){
    //     let index = str1.charCodeAt(i) - 'a'.charCodeAt(0);
    //     freq2[index]++;
    // }
    // for(let i=0;i<=26;i++){
    //     if(freq1[i]!==freq2[i]){
    //          flag=false;
    //          break;}
    // }
    // return flag;
    // write your code here
}
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 03:
// Optional:
//
// Write a function that takes an integer and a sorted array
// The function returns the index of the integer in the array
// If the integer was not there, the function returns where it could have been
//
// Ex:
// Input: [1,3,5,6], 5
// Output: 2
//
// Input: [1,3,5,6], 2
// Output: 1
//
// Input: [1,3,5,6], 7
// Output: 4
//

const targetIndex = (arr, int) => {
    // write your code here
}
// -------------------------------------------------------------------------------------------------------

module.exports = { wordLength, wordLetters, targetIndex };