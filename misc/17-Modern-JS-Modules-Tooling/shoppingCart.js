'use strict'



const shippingCost = 10;
const cart = [];

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
 




