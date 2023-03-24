/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);

function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  state.cart = new Cart(cartItems);
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
  // const tableBody = document.getElementById('tableBody');
  // while(tableBody.hasChildNodes(){
  //   tableBody.removeChild(tableBody.firstChild);
  // })
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {
  storeCartList = JSON.parse(localStorage.cart);
  // TODO: Find the table body
  const tableBody = document.getElementById('cart-container');
  // TODO: Iterate over the items in the cart
  let itemsInCart = loadCart();
 
  for (let i=0; i<JSON.parse(localStorage.cart).length; i ++) {
    let tr = document.createElement('tr');
    tableBody.appendChild(tr);

    for (let j=0; j<3; j++){
    let td = document.createElement('td');  
      td.width = '75px';
      if(j===0){
        td.appendChild(document.createTextNode ('remove item'));
      }
      else if (j===1){
        td.appendChild(document.createTextNode(storeCartList[i][1]));
      }else if(j===2) {
        td.appendChild(document.createTextNode(storeCartList[i][0]));
      }
      tr.appendChild(td);
    }
  }
  // TODO: Create a TR
  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR

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
  let trIndex =0;
  storeCartList= JSON.parse(localStorage.cart);
  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  let td = event.target.parentNode;
  let tr = td.parentNode; // the row to be removed
  trIndex= tr.rowIndex;
  tr.parentNode.removeChild(tr);

  // TODO: Save the cart back to local storage
  let storage = window.localStorage;
  storage.clear();


  storeCartList.splice(cart.indexOf(trIndex), 1);
  storage.setItem('cart', JSON.stringify(storeCartList));


  // TODO: Re-draw the cart table
  // calling functon
  showCart();



// }

// This will initialize the page and draw the cart on screen
renderCart();
