'use strict'

import cloneDeep from './node_modules/lodash-es/cloneDeep.js';

// import { addToCart, totalPrice as price, totalQuantity }   from  './shoppingCart.js';
// addToCart('chicken', 7);
// console.log(price, totalQuantity);

console.log('importing module');

// Import everything at once
/*
import * as ShoppingCart from './shoppingCart.js'

ShoppingCart.addToCart('bread', 4);

console.log(ShoppingCart.totalPrice);
*/
import add, { cart } from './shoppingCart.js';

add('hamburgers', 7);
add('turnips', 1);
add('onions', 2);
add('chocolate bars', 22);

console.log(cart);
/*
console.log('start fetching');
// Top level await with modules 
const res = await fetch('https://jsonplaceholder.typicode.com/posts/');
const data = await res.json();
console.log(data);

// be wary that this is a blocking action
*/

const getLastPost = async function() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/');
    const data = await res.json();
    console.log(data);
    
    return { title: data.at(-1).title, text: data.at(-1).body };
}

const lastPost = getLastPost();
console.log(lastPost);

// There is a neater way to do this. 
// lastPost.then(last => console.log(last));
/*
// The tidy option
const lastPostTidy = await getLastPost();
console.log(lastPostTidy);

const shoppingCart2 = (function() {
  const cart = [];
  const shippingCost = 22;
  const totalPrice = 78;
  const totalQuantity = 42;

  const addToCart = function(product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} added to cart`);
  };

  const orderStock = function (product, quantity) {
    console.log(`${quantity} ${product} ordered from supplier`);
  };

  return {
    addToCart, 
    cart, 
    totalPrice,
    totalQuantity,
  };

})();

shoppingCart2.addToCart('Aranet4', 1);
shoppingCart2.addToCart('bike tyres', 3);
shoppingCart2.addToCart('wellington boots', 2);
shoppingCart2.addToCart('Gummibears', 12);

console.log(shoppingCart2);

// This works via clojures. 
*/
// CommonJS
// Works in node.js
// Doesn't work in JS
/*
export.addToCart = function (product, quantity) {
  cart.push({product, quantity });
  console.log(`${quantity} ${product} added to cart (shipping cost is ${shippingCost}}`);
};
*/

const state = {
  cart: [
    {product: 'rivella', quantity: 6},
    {product: 'Nettle Tea', quantity: 1},
  ],
  user: {loggedIn: true },
};

const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);

state.user.loggedIn = false;

console.log(`stateClone: ${stateClone}`);
console.log(`stateDeepClone: ${stateDeepClone}`);


