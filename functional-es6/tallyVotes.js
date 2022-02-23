const electionVotes = [
    'Harry', 'Rick', 'Ben', 'Ben', 'Harry', 'Ashley',
    'Connor', 'Rick', 'Ashley', 'Rick', 'Albert', 'Ben',
    'Michael', 'Rick', 'Albert', 'Karen', 'Harry',
    'Karen', 'Donna', 'Ashley', 'Albert', 'Harry',
    'Dane', 'Dane', 'Rick', 'Donna', 'Mortimer',
];
console.log(electionVotes);

// My solution
// const tallyVotes = votes => {
//     uniqueNames = electionVotes.filter((name, index, arr) => arr.indexOf(name) === index);
//     var tally = uniqueNames.reduce((acc, name) => {
//         acc[name] = 0;
//         return acc;
//     }
//     , {});
//     for (let i = 0; i < electionVotes.length; i++) {
//         tally[electionVotes[i]]++;
//     }
//     // console.log(tally);
//     return tally;
// }

// Course Solution

const tallyVotes = votes => {
    return votes.reduce((acc, name) => ({
        ...acc,
        [name]: acc[name] ? acc[name] + 1 : 1,
    }), {});
};

console.log(tallyVotes(electionVotes));

/* Expected Output (something like this):
    {
        Harry: <some number>
        Donna: <some number>
        Rick: <some number>
        ...
    }
*/