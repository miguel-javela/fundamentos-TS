(() => {
  // let myNumber:number = undefined;
  // let myString:string = null;
  let myNull = null;
  let myUndefines = undefined;

  let myNumber: number | null = null;
  myNumber = 12;

  function hi(name: string | null){
    let hello = 'hola ';
    if(name){
      hello += name;
    } else {
      hello += 'nobody'
    }
    console.log(hello);
  }

  function hiv2(name: string | null){
    let hello = 'hola ';
    hello += name?.toLowerCase() || 'nobody'
    console.log('v2',hello);
  }

  hi('nicolas');
  hi(null);

  hiv2('nicolas');
  hiv2(null);
})();
