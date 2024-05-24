function addToCart(product) {
    // Add the product to the checkout page
    // Example: 
    // checkoutPageProducts.push(product);
  
    // Save the updated checkout page to local storage
    localStorage.setItem('checkoutProducts', JSON.stringify(checkoutPageProducts));
  
    // Update the counter on the checkout icon
    updateCheckoutCounter();
  }
  
  // Function to update the counter on the checkout icon
  function updateCheckoutCounter() {
    // Get the number of products in the checkout page from local storage
    const checkoutProducts = JSON.parse(localStorage.getItem('checkoutProducts')) || [];
  
    // Update the counter on the checkout icon
    const checkoutCounter = document.getElementById('checkoutCounter');
    checkoutCounter.textContent = checkoutProducts.length;
  }
  
  // Event listener for the button click to add a product to the checkout page
  const addButton = document.getElementById('addButton');
  addButton.addEventListener('click', function() {
    addToCheckout(selectedProduct);
  });

const products = {
    product1: "AULA SC100 LED Gaming Mouse",
    product2: "RGB Ambidexterous Gaming Mouse",
    product3: "Logitech G502 Lightspeed Wireless",
    product4: "Razer Naga Pro Wireless Gaming Mouse",
  };
  
  // Get the buttons and product display element
  const product1Btn = document.getElementById('product1Btn');
  const product2Btn = document.getElementById('product2Btn');
  const product3Btn = document.getElementById('product3Btn');
  const product4Btn = document.getElementById('product4Btn');
  const productDisplay = document.getElementById('productDisplay');
  
  // Function to display the product
  function displayProduct(product) {
    productDisplay.textContent = products[product];
  }
  
  // Event listeners for the buttons
  product1Btn.addEventListener('click', function() {
    displayProduct('AULA');
  });
  
  product2Btn.addEventListener('click', function() {
    displayProduct('RGB');
  });

  product3Btn.addEventListener('click', function() {
    displayProduct('Logitech');
  });

  product4Btn.addEventListener('click', function() {
    displayProduct('Razer');
  });