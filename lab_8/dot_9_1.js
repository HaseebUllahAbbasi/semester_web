   function inOrder(a,b)
   {
       Promise.resolve(a()).then(b())

   }

   var logOne = setTimeout(function() {
    console.log("one!");
   }, Math.random() * 1000);
   var logTwo = setTimeout(function() {
    console.log("two!");
   }, Math.random() * 1000);
   inOrder(logOne, logTwo);

