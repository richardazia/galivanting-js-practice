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

// global variable

var numberOfBoxes = 200;

const ppe = () => {
    // local variable
    let masksPerBox = 50;

    // second variable
    let totalMasks = numberOfBoxes * masksPerBox;

    return `Our collection of masks is ${totalMasks} strong`;
}

console.log(ppe());