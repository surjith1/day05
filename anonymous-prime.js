let d=[1,2,5,7,11,13,19,17,21,23,29,31];
let p=[];
let res=function Prime(d) {
    for(let i=0; i<d.length; i++) {
     
        if (d[i] % 2 !==0 && d[i] % 3 !==0) {
            p.push(d[i]);
        }

    }
            console.log(p);
}
res(d);