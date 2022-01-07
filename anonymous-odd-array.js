let ar=[1,2,3,4,5,7,6,8,9,10,11];
let oddA=[]
let odd= function(ar) {
   for( let i=0; i<ar.length;i++) {
       if(ar[i] % 2 !==0) {
           oddA.push(ar[i]);
       } 
   }
   console.log(oddA);
  
};
odd(ar);