const sar=[1,2,3,4,5,];
let sum=0;
let sumOfArray= function(e) {
    for(let i=0; i< sar.length;i++) {
        sum=sum + sar[i];
    }
    console.log(sum);
};
sumOfArray(sar);

