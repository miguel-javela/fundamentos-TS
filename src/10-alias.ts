(() => {
  type UserId = string | number |boolean;
  let userId: UserId ;

  //literal types
  type Sizes = 'S'|'M'|'L'|'XL';
  let shirtSize: Sizes;
  shirtSize = 'M'
  // shirtSize = 's'//error

  function greeting(myText: UserId,size:Sizes){
    if(typeof myText === 'string'){
      console.log(`string ${myText.toLowerCase()}`);
    }
  }
  greeting(1111,'L');
  greeting('1111','L');

})();
