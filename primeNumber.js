let arprime=[1,2,5,7,11,13,19,17,21,23,29,31];
let prime=[];
let resultPrime=(arprime)=> {
    for(let i=0; i<arprime.length; i++) {
     
        if (arprime[i] % 2 !==0 && arprime[i] % 3 !==0) {
          prime.push(arprime[i]);
        }

    }
            console.log(prime);
};
resultPrime(arprime);