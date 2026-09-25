let products = ["Laptop", "Phone", "Headphones", "Monitor"]

function logFirstProduct() {
  console.log(products[0])
}

logFirstProduct()

function addProduct(productName){
  products.push(productName)
}

addProduct("playstation")
console.log(products)

 function updateProductName(position, newName){
  products[position] = newName
 }

 updateProductName(0, "desktop")
 console.log(products)

 function removeLastProduct(){
  products.pop()
 }


// Export the necessary parts for testing
module.exports = {
  logFirstProduct: typeof logFirstProduct !== 'undefined' ? logFirstProduct : undefined,
  addProduct: typeof addProduct !== 'undefined' ? addProduct : undefined,
  updateProductName: typeof updateProductName !== 'undefined' ? updateProductName : undefined,
  removeLastProduct: typeof removeLastProduct !== 'undefined' ? removeLastProduct : undefined,
  products
};
