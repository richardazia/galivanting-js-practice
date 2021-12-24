// global variable

var numberOfSchool = 68;

const school = () => {
    // local variable 
    let fishPerSchool = 320;

    // Second local variable
    let totalFish = numberOfSchool * fishPerSchool;

    return `Our collection of fish is ${totalFish} large`;
}

console.log(school());