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

let arr1=[12, 32, 22, 45, 78, 12, 50]
const findMax = (arr1)=>{
    let max=0;
    for(let i=0;i<8;i++){
        if(arr1[i]>max){
            max=arr1[i]
        }
    }
    return max;
}
console.log(findMax(arr1));

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

let arr=[78, "sad", 45, "hungry", "agony", 23, 10]
const sumNums = (arr)=>{
    let sum=0;
    // write your code here
    for(let i=0;i<8;i++){
        if (typeof arr[i] =="number"){
            sum=sum+arr[i];
        }
    }
    return sum;
}
console.log(sumNums(arr));
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
//  Challenge 03:
//  optional:
//
//  Write a function that takes an array and returns the array reversed
//  without using built-in functions
//  
// Input: ['C#', 'JS', 'Ruby','Python'] 
// Output: ['Python','Ruby','JS','C#']
let arr3 = [1, 2, 3, 4, 5]
var reverce = [];
const reverseArray = (arr3)=>{
    for (let i = 5 - 1; i >= 0; i--) {
    
        reverce.push(arr3[i]);
    }
    return reverce
}
console.log(reverseArray(arr3));





// -------------------------------------------------------------------------------------------------------

module.exports = {findMax , sumNums, reverseArray};