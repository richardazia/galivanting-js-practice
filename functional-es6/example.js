//Using the some method
// This can be used to check that all fields in a form are filled before submitting

const staff = [{
    name: 'Jane Doe',
    salary: 1000
    }, {
    name: 'John Dough',
    salary: 2000
    }, {
    name: 'Jill Do',
    salary: 3000
    }, {
    name: 'Dill Do',
    salary: 4000
    }];

const MakesMoreThan2000 = staff => 
    staff.salary > 2000;

const result = staff.some(MakesMoreThan2000);

console.log(result);

const formValues = [
    'Kalenji',
    'shoehorn',
    'Divonne',
    '',
];

const isNotEmpty = string => !!string;

const allFieldsFilled = formValues.every(isNotEmpty);

console.log(allFieldsFilled);