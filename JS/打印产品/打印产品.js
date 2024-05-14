var list = document.querySelector('.output ul');
var totalBox = document.querySelector('.output p');
var total = 0;
list.innerHTML = '';
totalBox.textContent = '';
// number 1
var products = [
                'Underpants:6.99',
                'Socks:5.99',
                'T-shirt:14.99',
                'Trousers:31.99',
                'Shoes:23.99'];

var productName = [];
var productPrice = [];
for (var i = 0; i < products.length; i++) { // number 2
  // number 3
  indexOfColon = products.indexOf(":");
  productName.push(products[i].slice(0,indexOfColon)); // string
  productPrice.push(parseFloat(products[i].slice(indexOfColon + 1))); // float
  total += productPrice[productPrice.length-1];

  // number 4

  // number 5
  itemText = 0;

  var listItem = document.createElement('li');
  listItem.textContent = itemText;
  list.appendChild(listItem);
}

totalBox.textContent = 'Total: $' + total.toFixed(2);