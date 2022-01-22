//Class

class Shoe {
    constructor(name, soles, colour, use) {
        this.name = name;
        this.soles = soles;
        this.colour = colour;
        this.use = use;
    }
// Method
    shoeStats() {
        return `${this.name} have ${this.soles} soles, are ${this.colour} and are for this sport: ${this.use}!`;
    }
}

const btwin500 = new Shoe("btwin500", "clipped", "black", "cycling");
const kalenji = new Shoe("kalenji Ekiden Active Trail", "generic", "grey", "running");

console.log(btwin500);
console.log(btwin500.shoeStats());

console.log(kalenji);
console.log(kalenji.shoeStats());