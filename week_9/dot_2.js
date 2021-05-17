const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('foo');
    }, 300);
  });
  


  myPromise
.then(value => { return value + ' before value '+ value +' after value and bar'; })
.then(value => { return value + ' and bar again' + ' this is previos value : { ' +value+'}'; })
.then(value => { return value + ' and again'; })
.then(value => { return value + ' and again'; })
.then(value => { console.log(value) })
.catch(err => { console.log(err) });