
const promise1 = Promise.resolve(25);
const promise2 = 49;
const promise3 = new Promise((resolve, reject) => 
{
  setTimeout(resolve, 160, 'simple');
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
  return values
});
