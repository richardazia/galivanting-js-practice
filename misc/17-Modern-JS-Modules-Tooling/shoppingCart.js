'use strict'
console.log('Exporting module');
/*
// Blocking Code
console.log('start fetching users');
await fetch('https://jsonplaceholder.typicode.com/posts/');
console.log('Find 100 users but do nothing with the data');
*/

const shippingCost = 10;
export const cart = [];


export const addToCart = function(product, quantity) {
  cart.push({product, quantity});
  console.log(`${quantity} ${product} added to cart`);
};

console.log('I am the shopping cart');

const totalPrice = 237;
const totalQuantity = 23;

export { totalPrice, totalQuantity };

export default function(product, quantity) {
  cart.push({product, quantity});
  console.log(`${quantity} ${product} added to cart`);
};
 




