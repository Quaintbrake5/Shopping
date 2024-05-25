// Get the form and the add button
const form = document.querySelector('.products');
const addButton = document.querySelector('#proceedButton');

// Add an event listener to the add button
addButton.addEventListener('click', (e) => {
  e.preventDefault();

  // Get the form data
  const product = document.querySelector('#product').value;
  const type = document.querySelector('#type').value;
  const quantity = document.querySelector('#quantity').value;
  const price = document.querySelector('#price').value;
  const image = document.querySelector('#image').value;

  // Create a new product object
  const newProduct = {
    product,
    type,
    quantity,
    price,
    image
  };

  // Check if there are any products in local storage
  let products = localStorage.getItem('products');

  // If there are no products in local storage, create an empty array
  if (!products) {
    products = [];
  } else {
    // If there are products in local storage, parse them into an array
    products = JSON.parse(products);
  }

  // Add the new product to the array
  products.push(newProduct);

  // Stringify the array and store it in local storage
  localStorage.setItem('products', JSON.stringify(products));

  // Display the products
  displayProducts();
});

// Function to display the products
function displayProducts() {
  // Get the products from local storage
  const products = JSON.parse(localStorage.getItem('products'));

  // Get the container to display the products
  const container = document.querySelector('.product-container');

  // Clear the container
  container.innerHTML = '';

  // Loop through the products and create a div for each one
  products.forEach((product) => {
    const div = document.createElement('div');
    div.innerHTML = `
      <h3>${product.product}</h3>
      'p>Quantity: ${product.quantity}</p>
      <p>Price: ${product.price}</p>
      <img src="${product.image}" alt="${product.product}">
    `;
    container.appendChild(div);
  });
}

// Get the form and the remove button
// const form = document.querySelector('.products');
const removeButton = document.querySelector('#removeButton');

// Add an event listener to the remove button
removeButton.addEventListener('click', (e) => {
  e.preventDefault();

  // Get the form data
  const product = document.querySelector('#product').value;
  const type = document.querySelector('#type').value;
  const quantity = document.querySelector('#quantity').value;
  const price = document.querySelector('#price').value;
  const image = document.querySelector('#image').value;

  // Create a new product object
  const newProduct = {
    product,
    type,
    quantity,
    price,
    image
  };

  // Check if there are any products in local storage
  let products = localStorage.getItem('products');

  // If there are no products in local storage, create an empty array
  if (!products) {
    products = [];
  } else {
    // If there are products in local storage, parse them into an array
    products = JSON.parse(products);
  }

  // Find the index of the product to remove
  const index = products.findIndex((p) => p.product === newProduct.product && p.type === newProduct.type && p.quantity === newProduct.quantity && p.price === newProduct.price && p.image === newProduct.image);

  // Remove the product from the array
  if (index!== -1) {
    products.splice(index, 1);
  }

  // Stringify the array and store it in local storage
  localStorage.setItem('products', JSON.stringify(products));

  // Display the products
  displayProducts();
});

// Function to display the products
function displayProducts() {
  // Get the products from local storage
  const products = JSON.parse(localStorage.getItem('products'));

  // Get the container to display the products
  const container = document.querySelector('.product-container');

  // Clear the container
  container.innerHTML = '';

  // Loop through the products and create a div for each one
  products.forEach((product) => {
    const div = document.createElement('div');
    div.innerHTML = `
      <h3>${product.product}</h3>
      <p>Type: ${product.type}</p>
      <p>Quantity: ${product.quantity}</p>
      <p>Price: ${product.price}</p>
      <img src="${product.image}" alt="${product.product}">
    `;
    container.appendChild(div);
  });

  // Add event listeners to the remove buttons
  const removeButtons = document.querySelectorAll('#removeButton');
  removeButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
      e.preventDefault();

      // Get the form data from the button
      const product = e.target.dataset.product;
      const type = e.target.dataset.type;
      const quantity = e.target.dataset.quantity;
      const price = e.target.dataset.price;
      const image = e.target.dataset.image;

      // Create a new product object
      const newProduct = {
        product,
        type,
        quantity,
        price,
        image
      };

      // Remove the product from local storage
      removeProduct(newProduct);

      // Display the products
      displayProducts();
    });
  });
}

// Function to remove a product from local storage
function removeProduct(product) {
  // Check if there are any products in local storage
  let products = localStorage.getItem('products');

  // If there are no products in local storage, create an empty array
  if (!products) {
    products = [];
  } else {
    // If there are products in local storage, parse them into an array
    products = JSON.parse(products);
  }

  // Find the index of the product to remove
  const index = products.findIndex((p) => p.product === product.product && p.type === product.type && p.quantity === product.quantity && p.price === product.price && p.image === product.image);

  // Remove the product from the array
  if (index!== -1) {
    products.splice(index, 1);
  }

  // Stringify the array and store it in local storage
  localStorage.setItem('products', JSON.stringify(products));
}
