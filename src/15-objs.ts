(()=>{
  type Sizes = 'S' | 'M' | 'L' | 'XL';
  type Product = {
    title: string,
    createdAt:Date,
    stock: number,
    size?: Sizes
  };
  const products: Product[] = [];

  const addProduct = (data:Product) => {
    products.push(data);
  }

  addProduct({
    title:'pro1',
    createdAt: new Date(),
    stock: 12
  });
  console.log(products)
})();
