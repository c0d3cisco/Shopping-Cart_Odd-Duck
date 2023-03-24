/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
let cart;

function loadCart() {
  let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
  console.log(cart.items[0]+ '  this came from load cart function');
}

let storeCartList = [];

// let tempCart = loadCart();
// console.log(state.cart);

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  document.getElementById('cart').innerHTML = ''
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {
  storeCartList = JSON.parse(localStorage.cart);
  
  // TODO: Find the table body
  const tableBody = document.getElementById('cart');
  // TODO: Iterate over the items in the cart
  for (let i=0; i<cart.items.length; i ++) {
    // TODO: Create a TR
    let tr = document.createElement('tr');
    //TODO: Create a TD for the delete link, quantity,  and the item
    let tag = document.createElement('button');
    tag.setAttribute('id', ('mybutton' + i));
    let text = document.createTextNode('Delete ME');
    tag.appendChild(text);
    
    let td = document.createElement('td');
    let stingAsWhole = cart.items[i];
    td.textContent = stingAsWhole[0] + ",  "+ parseInt(stingAsWhole[1]);
    tr.appendChild(td);
    tableBody.appendChild(tr);
    tableBody.appendChild(tag);
    // tableBody.appendChild()
  }

}

function removeItemFromCart(event) {

  // let itemToBeRemoved = document.('cart-container');
  // itemToBeRemoved.addEventListener('click', function(event){
  //   let setEvent = document.getElementById(this.click);
  //   setEvent.remove();

  }
  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table
  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
 

  // TODO: Save the cart back to local storage
 





  // TODO: Re-draw the cart table
  // calling functon
  // showCart();



// }

// This will initialize the page and draw the cart on screen
renderCart();
