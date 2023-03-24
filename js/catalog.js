/* global Product, Cart */

'use strict';

// Set up an empty cart for use on this page.
state.cart = new Cart([]);


// On screen load, we call this method to put all of the product options
// (the things in the state.allProducts array) into the drop down list.
function populateForm() {

  //TODO: Add an <option> tag inside the form's select for each product
  const selectElement = document.getElementById('items');
  for (let i in state.allProducts) {
    const optionElement = document.createElement('option');
    optionElement.value = state.allProducts[i].name;
    optionElement.textContent = state.allProducts[i].name;
    selectElement.appendChild(optionElement);
    // console.log(i);
  }
}

// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.
function handleSubmit(event) {

  let product = '';
  let iterator = 0;

  // TODO: Prevent the page from reloading
  event.preventDefault();
  // Do all the things ...
  addSelectedItemToCart(event);
  state.cart.saveToLocalStorage();
  state.cart.updateCounter();
  updateCartPreview();
  //console.log('preventDefault Function', event); // get true or false from object selected
  //console.log('preventDefault Function', event.srcElement[2].value); // get number from form
  
}

// TODO: Add the selected item and quantity to the cart
function addSelectedItemToCart(event) {
  // TODO: suss out the item picked from the select list
  let productName = '';
  let x = 0;
  for(let i = 0; i<event.srcElement[1].length; i++)
    if(event.srcElement[1][i].selected === true){
      productName = event.srcElement[1][i].innerHTML;
      x=i;
    }
    // TODO: get the quantity
   // debugger;
    let quantity = parseInt(event.srcElement[2].value);
    // FIX HERE FOR DUPLICATION OF ITEMS IN CART
    
    
    console.log(state.cart);
    
    
    // TODO: using those, add one item to the Cart
    
    // state.cart.addItem([state.allProducts[x], quantity]);
    state.cart.addItem(productName, quantity);
    // return productName, quantity;

}

// TODO: As you add items into the cart, show them (item & quantity) in the cart preview div
function updateCartPreview() {
  // TODO: Get the item and quantity from the form //<div class="card" id="cartContents"></div>
  // TODO: Add a new element to the cartContents div with that information
  let cartContentEl = document.getElementById('cartContents');
  let shownItemEl = document.createElement('p');
  shownItemEl.textContent = `You've added  ${state.cart.quantity} ${state.cart.product} to your cart.`
  cartContentEl.appendChild(shownItemEl);

}

// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
const catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();
