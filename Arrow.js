// function squar(a){
//     return a**3
// }
// console.log(squar(9))



// let square=(a) => a**3
// console.log(square(20.5));
// let sum=(a,b) => (a%b)
// console.log(sum(1,2))


// let a=[1,2,3,4]
// let j=0;
// let c=[];
// for(let i=0;i<a.length;i++){
//  c[j]=    a[i]*a[i];

// //console.log(a[i]**2)
// j++
// }
// console.log(c)

// ***map*** ot is an array method it travese the elements gives the output in array form
// it will not change the length of an array for ex printing even elements it gives false and true so it will not change

// let a=[1,2,3,4]
// let result=a.map( (y)=>{
//     return y**2
// })
// console.log(result);
//or       

// let a=[1,2,3,4]
// let result=a.map( (y)=> y%2==0)
// console.log(result)

// let a=[1,2,3,4,5,6]
// let result=a.filter((x)=>{
//   return x%2 //it git checks the boolean result prints odd because output is 1 so its true                    //
// })
// console.log(result);

// let a=[1,2,4,5,6,]
// let sum=0;                                  //   we can not use map for this because map and filter return array as output so...            //
// for(let i=0;i<a.length;i++){
// sum=sum+a[i];
// }
// console.log(sum);

///sum by using reduce method to all the elements to single elements

let a=[1,2,3,4,5]
let res=a.reduce((sum,x)=>{
return sum+=x
},0)
console.log(res);