(()=>{
  let productTitle = 'my amazing product';
  // productTitle = 12;error
  productTitle = 'my amazing product changed';
  console.log('productTitle',productTitle);

  const porductDescription = "I'm bla bla";
  console.log('porductDescription',porductDescription);

  const summary = `
    title: ${productTitle}
    description: ${porductDescription}
  `;
  console.log('summary',summary);
})();
