Library for animated adding products to cart

#Example

const cart = document.querySelector('#cart');
const buttons = document.querySelectorAll('button');
const imagesSelector = '.product img';

const animatedCart = new AnimatedAdding(cart, imagesSelector, buttons);

