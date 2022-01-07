let sumarr=[1,2,3,4,5,6,7,8,9];
let s=0;
let sofArray= (e) => {
    for(let i=0; i< sumarr.length;i++) {
        s=s + sumarr[i];
    }
    console.log(s);
};
sofArray(sumarr);