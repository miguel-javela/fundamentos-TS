(() => {
  let userId: string | number;
  userId = 112;
  userId = 'asdfasdfas';

  function greeting(myText: string |  number){
    if(typeof myText === 'string'){
      console.log(`string ${myText.toLowerCase()}`);
    } else {
      console.log(`number ${myText.toFixed(1)}`);
    }
  }
  greeting('asa');
  greeting(1213.1);
})();
