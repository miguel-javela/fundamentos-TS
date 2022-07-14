(()=>{
  const calcTotal = (prices:number[]):number => {
    let total = 0;
    prices.forEach((item)=>{
      total += item;
    });
    return total;
  }

  const printTotal = (prices:number[]):void => {
    const rta = calcTotal(prices);
    console.log(`El total es ${rta}`);
  }

  const rta = calcTotal([1,2,3,4]);+
  console.log(rta);

  printTotal([5,1,658,16,1]);
})();
