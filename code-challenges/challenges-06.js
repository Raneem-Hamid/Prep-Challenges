'use strict';

// -------------------------------------------------------------------------------------------------------
//  Challenge 01:
//  Required:
//
//  Write a function that takes an array and returns the maximum value in the provided array
//  without using build-in functions.
//  
// Input: [12, 32, 22, 45, 78, 12, 50]
// Output: 78
//  

const findMax = (arr)=>{
    let max;
    // write your code here
    let element;
    max = 0;
    for (let i = 0; i < arr.length; i++) {
        
         element = arr[i];
        if(element >= max ){
             max = element;
        }
       
    }
    return max;
}
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
//  Challenge 02:
//  Required:
//
//  Write a function that takes an arrays and returns the Sum of the numeric values
//  inside the array (there could be strings inside), without using built-in functions
//  
// Input: [20, '234', 'car', 41, 20, 'chair']
// Output: 81
//  

const sumNums = (arr)=>{
    let sum;
    // write your code here
    let item;
    sum = 0 ;
    for (let i = 0; i < arr.length; i++) {
        item = arr[i];
        if (typeof(item)== "number") {
            sum += item;
        }
        
        }
    return sum;
}
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
//  Challenge 03:
//  Required:
//
//  Write a function that takes an array and returns the array reversed
//  without using built-in functions
//  
// Input: ['C#', 'JS', 'Ruby','Python'] 
// Output: ['Python','Ruby','JS','C#']

const reverseArray = (arr)=>{
    // write your code here

    let newArray = [];
    for (let i = arr.length-1; i >= 0; i--) {
        let element = arr[i];

        newArray.push(element)
    }

    return newArray ;
}
// -------------------------------------------------------------------------------------------------------

module.exports = {findMax , sumNums, reverseArray};
