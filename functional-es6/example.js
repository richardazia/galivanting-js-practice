//Sort through items using a function. 

const mixedUpNumbers = [1, 2, 3, 4, 10, 2, 56, 3, 5, 2, 2, 12, 73, 14, 23, 6, 15];

const ascending = (a, b) => {
    if (a < b) return -1; 
    if (a > b) return 1;
    return 0;
}

const descending = (a, b) => {
    if (a > b) return -1; 
    if (a < b) return 1;
    return 0;
}

const sortedNumbers = mixedUpNumbers.slice().sort(ascending);

console.log(sortedNumbers);

const sortedDownNumbers = mixedUpNumbers.slice().sort(descending);

console.log(sortedDownNumbers);