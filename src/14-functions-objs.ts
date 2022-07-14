(()=>{
  const login = (email: string, password: string) => {
    console.log(email,password);
  }

  const login2 = (data:{email:string, password:string}) => {
    console.log(data.email,data.password);
  }

  login('correo1','123');
  login2({email:'correo2',password:'123'});

  type Sizes = 'S' | 'M' | 'L' | 'XL';
  const products: any[] = [];

  const addProduct = (data:{
    title: string,
    createdAt:Date,
    stock: number,
    size?: Sizes
  }) => {
    products.push(data);
  }

  addProduct({
    title:'pro1',
    createdAt: new Date(),
    stock: 12
  });
  console.log(products)
})();
