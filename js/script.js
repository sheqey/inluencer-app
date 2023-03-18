   // Get the shopping cart icon and popup elements
   const cartIcon = document.querySelector('.fa-shopping-cart');
   const cartPopup = document.querySelector('.cart-popup');
   





   // Add event listener to the document object to hide the popup when the user clicks outside of it
   
   
   // Add event listener to the cart icon to display the popup when clicked
   cartIcon.addEventListener('click', () => {
      // alert(1)
     if (cartPopup.style.display === 'block') {
       cartPopup.style.display = 'none';
     } else {
       cartPopup.style.display = 'block';
     }
   });
   
   
   const addToCartButtons = document.querySelectorAll('.fa-shopping-cart');
  
   // Add click event listeners to each button
   addToCartButtons.forEach((button) => {
     
     button.addEventListener('click', () => {
      if (cartPopup.style.display === 'block') {
        cartPopup.style.display = 'none';
      } else {
        cartPopup.style.display = 'block';
      }
     });
   });
   


   
   
   
   function addItemToCart(name, price) {
       // Check if the same product is already in the cart
       const cartItemsList = document.querySelector('.cart-items');
       const cartItems = cartItemsList.querySelectorAll('li');
       for (let i = 0; i < cartItems.length; i++) {
         const cartItemName = cartItems[i].querySelector('.cart-item-name').innerHTML;
         if (cartItemName === name) {
           const quantityInput = cartItems[i].querySelector('.cart-item-quantity');
           const quantity = parseInt(quantityInput.value);
           quantityInput.value = quantity + 1;
           const cartTotal = document.querySelector('.cart-total');
           const currentTotal = parseFloat(cartTotal.innerHTML);
           cartTotal.innerHTML = (currentTotal + price).toFixed(2);
           return;
         }
       }
     
       // Create a new list item element
       const li = document.createElement('li');
       li.innerHTML = `
         <span class="cart-item-name">${name}</span>
         <input type="number" class="cart-item-quantity" value="1" data-price="${price}  min="1" style="width: 30px;">
         <span class="cart-item-price">$${price.toFixed(2)}</span>
       `;
       
       // Append the list item to the cart items list
       cartItemsList.appendChild(li);
     
       // Update the total price
       const cartTotal = document.querySelector('.cart-total');
       const currentTotal = parseFloat(cartTotal.innerHTML);
       cartTotal.innerHTML = (currentTotal + price).toFixed(2);
     
       // Add event listener to quantity input field
       const quantityInput = li.querySelector('.cart-item-quantity');
       quantityInput.addEventListener('input', () => {
         const quantity = parseInt(quantityInput.value);
         const itemTotal = price * quantity;
         li.querySelector('.cart-item-price').innerHTML = `$${itemTotal.toFixed(2)}`;
         const cartItems = cartItemsList.querySelectorAll('li');
         let newTotal = 0;
         for (let i = 0; i < cartItems.length; i++) {
           const itemPrice = parseFloat(cartItems[i].querySelector('.cart-item-price').innerHTML.replace('$', ''));
           const itemQuantity = parseInt(cartItems[i].querySelector('.cart-item-quantity').value);
           newTotal += itemPrice * itemQuantity;
         }
         cartTotal.innerHTML = newTotal.toFixed(2);
       });
     }
     

 // Target the container element where the button will be added
const container = document.getElementById('MixItUp889961');

// Create a new MutationObserver
const observer = new MutationObserver(mutations => {
  mutations.forEach(mutation => {
    // Check if the mutation added a new node to the container
    if (mutation.type === 'childList' && mutation.addedNodes.length) {
      // Check if the added node is the button you're interested in
      const addButton = mutation.addedNodes[0].querySelector('.add-to-cart');
      if (addButton) {


        const product = addButton.parentElement;
        const name = product.querySelector('.product__name').innerHTML;
        // const price = parseFloat(product.querySelector('.product__price').innerHTML);
         const price = parseFloat(product.querySelector('.product__price').innerHTML.replace('$', ''));

      
       




        // Add event listener to the button
        addButton.addEventListener('click', () => {
          // Alert '1' on button click

          addItemToCart(name, price);
          //alert(name);




        });
      }
    }
  });
});

// Define the observer's options
const observerOptions = {
  childList: true, // Listen for changes to the children of the container element
  subtree: true // Listen for changes to the descendants of the container element
};

// Start observing the container element
observer.observe(container, observerOptions);











// Create a new MutationObserver
const observer2= new MutationObserver(mutations => {
  mutations.forEach(mutation => {
    // Check if the mutation removed a node from the cart
    if (mutation.type === 'childList' && mutation.removedNodes.length) {
      // Check if the removed node is a cart item
      const cartItem = mutation.removedNodes[0];
      if (cartItem.classList.contains('cart-item')) {
        const removeButton = cartItem.querySelector('.remove-item');
        if (removeButton) {
          // Extract the product name and price from the cart item
          const name = cartItem.querySelector('.cart-item__name').innerHTML;
          const price = parseFloat(cartItem.querySelector('.cart-item__price').innerHTML.replace('$', ''));
          
          // Add event listener to the remove button
          removeButton.addEventListener('click', () => {
            // Remove the cart item from the DOM
            cartItem.remove();
            // Update the total price
            updateTotalPrice(-price);
            // Remove the item from the cart
            removeItemFromCart(name);
          });
        }
      }
    }
  });
});

// Define the observer's options
const observerOptions2 = {
  childList: true, // Listen for changes to the children of the cart element
  subtree: true // Listen for changes to the descendants of the cart element
};

// Start observing the cart element
observer.observe(cart, observerOptions2);

function removeItemFromCart(name) {
  // Remove the item from the cartItems array
  cartItems = cartItems.filter(item => item.name !== name);
  // Update the cart count and cart summary
  updateCartCount();
  updateCartSummary();
}




