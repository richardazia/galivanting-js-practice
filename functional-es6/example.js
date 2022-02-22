//Data from Learning Functional Programming with Javascript ES6+ Ch3 execise 9

const employees = [{
    name: 'John Olsen',
    age: 54,
    jobTitle: 'developer',
    salary: 70000,
}, {
    name: 'Karen Norris',
    age: 34,
    jobTitle: 'engineer',
    salary: 75000,
}, {
    name: 'Daryl Cline',
    age: 25,
    jobTitle: 'secretary',
    salary: 54000,
}, {
    name: 'Abbey Garcia',
    age: 40,
    jobTitle: 'developer',
    salary: 100000,
}, {
    name: 'Finn Smith',
    age: 29,
    jobTitle: 'engineer',
    salary: 40000,
}, {
    name: 'Eve Wordsworth',
    age: 20,
    jobTitle: 'developer',
    salary: 65000,
}, {
    name: 'Ronald Jacobs',
    age: 60,
    jobTitle: 'developer',
    salary: 90000,
}];

const developers = employees.filter(employee => 
    employee.jobTitle === 'developer');
// console.log(developers);
const developerSalaries = developers.map(developer => developer.salary);
const totDevSal = developerSalaries.reduce((acc, x) => acc + x, 0);
const avgDevSal = totDevSal / developers.length;
console.log(`Non Developers have an average salary of : USD${avgDevSal}`);

const nonDevelopers = employees.filter(employee =>
    employee.jobTitle !== 'developer');
//  console.log(nonDevelopers);
const nonDevSal = nonDevelopers.map(nonDevelopers => nonDevelopers.salary);
// console.log(nonDevSal);
const totNonDevSal = nonDevSal.reduce((acc, x) => acc + x, 0);
const avgNonDevSal = totNonDevSal / nonDevelopers.length;
console.log(`The non developer average salary is ${avgNonDevSal}`);
