// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');

  const finalPrice = +price.textContent * quantity.value;
  let subtotal = product.querySelector('.subtotal span');
  subtotal.textContent = finalPrice;

  return finalPrice;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const products = document.getElementsByClassName('product');
  let Price = 0;
  
  for (i=0; i < products.length; i++) {
    Price += (updateSubtotal(products[i]));
  }

  // ITERATION 3
  const totalPrice = document.getElementById('total-value');
  totalPrice.querySelector('span').textContent = Price;
  console.log(Price);

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
