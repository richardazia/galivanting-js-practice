'use strict'

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




