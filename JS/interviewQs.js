// ________ARRAY QUESTIONS______________
//
// 1. How to find the missing number in a given integer array of 1 to 100? (solution)

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let numbersUnsorted = [2, 4, 6, 1, 8, 10, 9, 7, 3, 5];
let numbersWithDup = [1, 2, 3, 4, 5, 4, 6, 7, 8, 9, 10];
let numbersWithMissing = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 14, 15, 16, 17, 18];
let unsortedNums = [4, 3, 6, 87, 91, 3, 0, 2, 6, 4, 3, 25, 333, 918, 9, 10, 18, 84, 93, 100, 93];

// function sortNums(numArr){
//     return numArr.sort((a, b) => {
//         return a - b;
//     });
// }
//
// console.log(sortNums(unsortedNums));

//      1. How to find the missing number in a given integer array of 1 to 100?
//  numArr is 1 - 100

    function missingNum(numArr){
        let newArr = numArr.sort((a, b) => {
            return a - b;
        });
        for(let i = 0; i < newArr.length - 1; i++){
            if(newArr[i] + 1 !== newArr[i + 1]){
                return false;
            }
        }
        return true;
    }
//--------------DONE------------//
// console.log(missingNum(numbers));
// console.log(missingNum(numbersWithMissing));
// console.log(missingNum(numbersUnsorted));


//     2. How to find the duplicate number on a given integer array? (solution)
//
function findDupNum(numArr){
        for(let i = numArr.length-1; i >= 0; i--) {
            let removed = numArr.splice(i, 1);
            if(numArr.join(" ").indexOf(removed) !== -1){
                return "duplicate found: " + removed;
            }
        }
        return "no duplicate found";
}

//-----------DONE------------//
// console.log(findDupNum(numbers));
// console.log(findDupNum(numbersWithDup));
// console.log(findDupNum(unsortedNums));


function findAllDupNum(numArr){
    let dupNums = [];
    for(let i = numArr.length-1; i >= 0; i--) {
        let removed = numArr.splice(i, 1);
        if(numArr.join(" ").indexOf(removed) !== -1){
            dupNums.push(removed);
        }
    }
    if(dupNums.length > 0){
        return "duplicates found: " + dupNums;
    }
    return "no duplicates found";
}

console.log(findAllDupNum(unsortedNums));

//     3. How to find the largest and smallest number in an unsorted integer array? (solution)
//
function minAndMax(numArr){
        let highest = numArr[0];
        let lowest = numArr[0];
        for(let i = 0; i < numArr.length; i++){
            if(numArr[i] > highest){
                highest = numArr[i];
            } else if(numArr[i] < lowest){
                lowest = numArr[i];
            }
        }
        return [highest, lowest];
}

//----------DONE-------------
// console.log(minAndMax(unsortedNums));


//     4. How to find all pairs of integer array whose sum is equal to a given number? (solution)
//
function twoNumSum(numArr, x){
        let bucket = [];
        let test = null;
        for(let i = 0; i < numArr.length; i++){
            test = numArr[i];
            for(let j = 0; j < numArr.length; j++){
                if(numArr[j] + test === x){
                    bucket.push(numArr[j]);
                    bucket.push(test);
                    // return bucket; // if i want to return just 2 nums
                }
            }
        }
        return bucket; // to return all combos of numbers
}

//-----------DONE---------------
// console.log(twoNumSum(unsortedNums, 922));//  918 and 4
// console.log(twoNumSum(unsortedNums, 180));//  93 and 87
// console.log(twoNumSum(numbers, 11));//basically every number in each order


//     5. How to find duplicate numbers in an array if it contains multiple duplicates? (solution)
//





//     6. How to remove duplicates from a given array in Java? (solution)
//






//     7. How to sort an integer array in place using QuickSort algorithm? (solution)
//





//     8. How to remove duplicates from an array in place? (solution)
//





//     9. How to reverse an array in place in Java? (solution)
//





//     10. How to find multiple missing numbers in given integer array with duplicates? (solution)
//






// _____________STRING QUESTIONS____________-
//
//     11. How to Print duplicate characters from String? (solution)
//
//     12. How to check if two Strings are anagrams of each other? (solution)
//
//     13. How to print first non repeated character from String? (solution)
//
//     14. How to reverse a given String using recursion? (solution)
//
//     15. How to check if a String contains only digits? (solution)
//
//     16. How to find duplicate characters in a String? (solution)
//
//     17. How to count a number of vowels and consonants in a given String? (solution)
//
//     18. How to count the occurrence of a given character in String? (solution)
//
//     19. How to find all permutations of String? (solution)
//
//     20. How to reverse words in a given sentence without using any library method? (solution)
//
//     21. How to check if two String is a rotation of each other? (solution)
//
//     22. How to check if given String is Palindrome? (solution)
//
//
// __________LINKED LIST QUESTIONS_____________
//
//     23. How to find the middle element of a singly linked list in one pass? (solution)
//
//     24. How to check if a given linked list contains a cycle? How to find the starting node of the cycle? (solution)
//
//     25. How to reverse a linked list? (solution)
//
//     26. How to reverse a singly linked list without recursion? (solution)
//
//     27. How to remove duplicate nodes in an unsorted linked list? (solution)
//
//     28. How to find the length of a singly linked list? (solution)
//
//     29. How to find the 3rd node from the end in a singly linked list? (solution)
//
//     30. How do you find the sum of two linked lists using Stack? (program)
//
//
// ___________BINARY TREE_________________
//
//     30. Can you write a program to implement a binary search tree?  (solution)
//
//     31. How do you perform Pre-order traversal in a given binary tree? (solution)
//
//     32. Write a Program to traverse a given binary tree in Pre-order without recursion (solution)
//
// 33. How to perform an In order traversal in a given binary tree? (solution)
//
//     34. How to print all nodes of given binary tree using inorder traversal without recursion (solution)
//
// 35. How to implement a Post-order traversal algorithm? (solution)
//
//     36. How to traverse a binary tree in Postorder traversal without recursion (solution)
//
// 37. How to Print all leaves of a binary search tree? (solution)
//
//     38. How to count a number of leaf nodes in a given binary tree? (solution)
//
//     39. How to perform a binary search in a given array? (solution)
//
//
//
//
//
//     ____________MISCELLANIOUS QESTIONS_____________
//
//     40. How to implement the Bubble Sort algorithm? (solution)
//
//     41. How to implement Iterative QuickSort Algorithm? (solution)
//
//     42. How to implement the Insertion Sort Algorithm? (solution)
//
//     43. How to implement Merge Sort Algorithm? (solution)
//
//     44. How to implement the Bucket Sort Algorithm? (solution)
//
//     45. How to implement the Counting Sort Algorithm? (solution)
//
//     46. How to implement Radix Sort Algorithm? (solution)
//
//     47. How to swap two numbers without using the third variable? (solution)
//
//     48. How to check if two rectangles overlap with each other? (solution)
//
//     49. How to design a Vending Machine? (solution)
//
//     50. How to implement an LRU Cache in your favorite programming language? (solution)
//
//     51. How to check if a given number is a Palindrome? (solution)
//
//     52. How do you check if a given number is an Armstrong number? (solution)
//
//     53. How do you find all prime factors of a given number? (solution)
//
//     54. How do you check if a given number is positive or negative in Java? (solution)
//
//     55. How to find the largest prime factor of a given integral number? (solution)
//
//     56. Write a Program to print all prime numbers up to a given number? (solution)
//
//     57. Write a Program to print Floyd's triangle? (solution)
//
// 58. Write a Program to print Pascal's triangle? (solution)
//
// 59. How to calculate the square root of a given number? (solution)
//
//     60. How to check if the given number is a prime number? (solution)
//
//     61. How to implement the Sieve of Eratosthenes Algorithm? (solution)
//
//     62. How to add two numbers without using the plus operator in Java? (solution)
//
//     63. Write a Program to subtract two binary numbers? (solution)
//
//     64. Write a Program to transpose a Matrix? (solution)
//
//     65. Write a Program to add or subtract two Matrices? (solution)
//
//     66. Write a Program to multiply two Matrices in Java? (solution)
//
//     67. How to calculate the average of all numbers in a given array? (solution)
//
//     68. How to check if a given number is even/odd without using an Arithmetic operator? (solution)
//
//     69. Write a Program to find GCD of two numbers using Euclid's Algorithm? (solution)
//
// 70.  How to find the number of 1s (the Set bit) in a given Bit Sequence? (solution)
//
//     71. Write a Program to given Pyramid structure? (solution)
//
//     72. How to find the highest repeating world from a given file in Java? (solution)
//
//     73. How to reverse given Integer in Java? (solution)
//
//     74. How to convert a decimal number to binary in Java? (solution)
//
//     75. How to check if a given year is a leap year in Java? (solution)
//
