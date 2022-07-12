(()=>{

  let prices = [1,2,3];
  // prices.push('sjjs');
  prices.push(4);

  let products = ['hola',true];
  products.push(false);

  let mixed: (number | string | boolean | object)[] = ['prueba',false];
  mixed.push(12);
  mixed.push({});

  prices.map(item => item*2);
})();
