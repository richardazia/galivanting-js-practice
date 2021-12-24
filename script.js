const couacBird = () => {
    var bird1 = 'Ducks';
    var bird2 = 'Seagulls';

    return `Our birds are ${bird1} and ${bird2}.`;
}

const couacBird2 = () => {
    var bird1 = 'Herons';
    var bird2 = 'Eagles';

    return `Our birds are ${bird1} and ${bird2}.`;
}

console.log(couacBird());
console.log(couacBird2());

console.log(couacBird(), couacBird2());
// bird 1 and 2 are out of scope as they are declared locally. 
console.log(bird1, bird2);