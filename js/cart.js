/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart'); // change back to car
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
    tag.setAttribute('id', (i));
    let text = document.createTextNode('Delete');
    tag.appendChild(text);
    
    let td1 = document.createElement('td');
    let td2 = document.createElement('td');
    let stingAsWhole = cart.items[i];
    td1.textContent = stingAsWhole[0];
    td2.textContent = parseInt(stingAsWhole[1]);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(tag);
    tableBody.appendChild(tr);
    // tableBody.appendChild()
  }

}

function removeItemFromCart(e) {

  // let itemToBeRemoved = document.('cart-container');
  // itemToBeRemoved.addEventListener('click', function(event){
  //   let setEvent = document.getElementById(this.click);
  //   setEvent.remove();

  console.log(e);
  console.log(e.target.parentNode.childNodes[0].innerHTML);
  console.log(parseInt(e.target.id));
  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  let itemSortNumber = parseInt(e.target.id);
  let cartItems = JSON.parse(localStorage.getItem('cart'));
  cartItems.splice(itemSortNumber, 1);
  // TODO: Save the cart back to local storage
  localStorage.setItem('cart', JSON.stringify(cartItems));
  // TODO: Re-draw the cart table
  window.location.reload();


}

// This will initialize the page and draw the cart on screen
renderCart();
