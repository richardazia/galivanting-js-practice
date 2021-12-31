// Playing with switch
// source (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch)
const expr = 'Oranges';
switch (expr) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
  case 'Mangoes':
  case 'Papayas':
    console.log('Mangoes and papayas are $2.79 a pound.');
    // expected output: "Mangoes and papayas are $2.79 a pound."
    break;
  default:
    console.log(`Sorry, we are out of ${expr}.`);
}

const mask = 'masks';
switch (mask) {
    case 'surgicalMask': 
        console.log('Surgical Masks are not considered enough');
        break;
    case 'ffp2Masks':
    case 'Vaccinations':
        console.log('FFp2 Masks and vaccinations are required.');
        // expected output: "FFp2 Masks and vaccinations are required."
        break;
    default:
        console.log(`Sorry, we are unable to offer service wihtout ${mask}`);
    }

// switch continued 
const answer2 = 'yes';

switch (answer2) {
    case "yes": 
        console.log("You chose 'Yes, of course'");
        break;
    case "Maybe": 
        console.log("Your mind is not made up yet.");
        break;
    case "No":
        console.log("You decided not to");
        break;
    default: 
        console.log("Ane de Buridan ;-)");
        break;
}

var pandemic = "maskWearing"

pandemic === "maskWearing"
    ? console.log("You will be safe") // When true
    : console.log("It was nice knowing you"); // When false

