// program min array

const productList = [
  {
    name: 'apple',
    amount: 2,
    bought: true,
    price: 15,
  },

  {
    name: 'bread',
    amount: 1,
    bought: true,
    price: 10,
  },

  {
    name: 'butter',
    amount: 0.4,
    bought: true,
    price: 100,
  },

  {
    name: 'sausage',
    amount: 0.25,
    bought: false,
    price: 250,
  },

  {
    name: 'milk',
    amount: 0.9,
    bought: false,
    price: 50,
  },
];

function sumProduct() {
  for (let i = 0; i < productList.length; i++) {
    productList[i].sum = productList[i].price * productList[i].amount;
  }
}

sumProduct();

// program min function 1
function allProductList() {
  const notBuyProduct = productList.filter(
    (product) => product.bought === true
  );
  const buyProduct = productList.filter((product) => product.bought === false);

  listBuy = [...buyProduct, ...notBuyProduct];
  console.log(listBuy);
}

allProductList();

// program min function 2
let nameProduct = 'sausage';

const buyProductName = (productList.find(
  (product) => product.name === nameProduct
).bought = true);
allProductList();

// program min functiion 3
const buyProduct = productList.filter((product) => product.bought === false);
console.log(buyProduct);

//  program norm function 1
let searchNameProduct = 'apple';
const deleteProduct = productList.filter(
  (product) => product.name != searchNameProduct
);
console.log(deleteProduct);

// program norm function 2
function addProduct(nameAddProduct, amountProduct = 0, priceProduct = 0) {
  const searchProduct = productList.find(
    (product) => product.name === nameAddProduct
  );

  console.log(searchProduct);

  if (searchProduct === undefined) {
    productList.push({
      name: nameAddProduct,
      amount: amountProduct,
      price: priceProduct,
      bought: false,
    });
  } else {
    let addAmountProduct =
      amountProduct === 0
        ? searchProduct.amount + 1
        : searchProduct.amount + amountProduct;
    searchProduct.amount = addAmountProduct;
  }
  sumProduct();
}

addProduct('bread');
addProduct('avocado', 1, 45);
console.log(productList);

// program max function 1 and 2

function sumArrProduct(arrProducts) {
  let sumProduct = arrProducts.reduce((sum, item) => {
    return sum + item.sum;
  }, 0);

  console.log(sumProduct);
}

// program max function 3
function byField(field, descending = false) {
  if (descending === false) {
    return (a, b) => (a[field] > b[field] ? 1 : -1);
  } else {
    return (a, b) => (a[field] < b[field] ? 1 : -1);
  }
}

// program max function 1
sumArrProduct(productList);
// program max function 2
sumArrProduct(buyProduct);
// program max function 3
productList.sort(byField('sum'));
// productList.sort(byField('sum', true));
// productList.sort(byField('name'));
// productList.sort(byField('name',true));
console.log(productList);
