
// Simple form verification


const currentInputValues = {
    firstName: 'Canard', // Must be at least 2 characters
    lastName: 'Duke', // Must be at least 2 characters
    zipCode: '90210', // Must be exactly 5 characters
    state: 'AZ', // Must be exactly 2 characters
}

const inputCriteria = {
    firstName: [
        value => value.length >= 2,
        value => value.length <= 20
        ? ''
        : 'First name must be between 2 and 20 characters',
    ],
    lastName: [
        value => value.length >= 2,
        value => value.length <= 20
        ? ''
        : 'Last name must be between 2 and 20 characters',
    ],
    zipCode: [
        value => value.length === 5,
        value => value.length === 5
        ? ''
        : 'Zip code must be exactly 5 characters',
    ], 
    state: [
        value => value.length === 2,
        value => value.length === 2
        ? ''
        : 'State must be exactly 2 characters',
    ],
};

const getErrorMessages = (inputs, criteria) => {
    return Object.keys(inputs).reduce((acc, inputName) => [
        ...acc,
        ...criteria[inputName].map(test =>
            test(inputs[inputName])),
    ], []).filter(message => message);
}

console.log(getErrorMessages(currentInputValues, inputCriteria));

/*
    Expected Output: [
        'First name must be at least 2 characters',
        'Last name must be at least 2 characters',
        'Zip code must be exactly 5 characters',
        'State must be exactly 2 characters',
    ]
    */