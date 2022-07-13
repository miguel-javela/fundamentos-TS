(() => {
  type Sizes = 'S' | 'M' | 'L' | 'XL';
  function createProductToJson(title:string, createdAt: Date, stock: number,size: Sizes){
    return {title,createdAt,stock,size}
  }

  const producto1 = createProductToJson('p1',new Date(), 12, 'M');
  console.log(producto1);
  console.log(producto1.title);

  const createProductToJsonV2 = (title:string, createdAt: Date, stock: number,size?: Sizes) => {
    return {title,createdAt,stock,size}
  }

  const producto2 = createProductToJsonV2('p2',new Date(), 12);
  console.log(producto2);
  console.log(producto2.size);

})();
