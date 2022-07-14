import {addProduct,calcStock,products} from './product.service';

addProduct({
  title:'pro1',
  createdAt: new Date(),
  stock: 12
});

addProduct({
  title:'pro2',
  createdAt: new Date(),
  stock: 6,
  size:'M'
});

console.log(products);
const total = calcStock();
console.log({total});
