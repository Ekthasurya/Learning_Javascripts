
const numbers = [12, 7, 9, 4, 21, 6, 15, 8, 3];


function filterArray(arr, callback) {
   
    const filtered = [];

    
    for (const element of arr) {
        
        if (callback(element)) {
           
            filtered.push(element);
        }
    }

    
    return filtered;
}


function isEven(number) {
    return number % 2 === 0;
}


const evenNumbers = filterArray(numbers, isEven);


console.log('Original array:', numbers);
console.log('Filtered array (even numbers):', evenNumbers);
