/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);

function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  state.cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  const tableBody = document.getElementById('tableBody');
  while(tableBody.hasChildNodes(){
    tableBody.removeChild(tableBody.firstChild);
  })
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // TODO: Find the table body
  const tableBody = document.getElementById('cart-container');
  // TODO: Iterate over the items in the cart
  let itemsInCart = loadCart();

  for(let i= 0; i < itemsInCart.length; i++){
    let generatedItem = tableBody.insertCell();
    generatedItem.innerHTML(itemsInCart[i]);
    const myButton = document.createElement('button');
    myButton.innerText = 'Delete';
    generatedItem.appendChild(myButton);

  }
  // TODO: Create a TR
  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR

}

function removeItemFromCart(event) {

  let itemToBeRemoved = document.('cart-container');
  itemToBeRemoved.addEventListener('click', function(event){
    let setEvent = document.getElementById(this.click);
    setEvent.remove();

  })
  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table



}

// This will initialize the page and draw the cart on screen
renderCart();
