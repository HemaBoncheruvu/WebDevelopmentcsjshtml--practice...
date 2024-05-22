// let product=[{
//  name:"galaxy 240",
//  brnad:"samsung",
// price:80000,
// rating:4.5

// },
// {
//     name:"iphone 14",
//     brand:"Apple",
//     price:243589673,
//     rating:5,

// }]
// product.map((data)=>{
//     console.log(data.name,data.brand);
// })
// let res=product.map((data)=>{
//     console.log( data.rating>4.5);
// })
// let c=product.reduce((subtotal,data)=>{
// console.log(subtotal +=data.price);
// },0)

 let movie=[{
    name:"Avat",
    director:"jemes camaron",
    year:"2009",
    relesed:"PG-13",
    sname:"ghost",
    rating:4,
    imdbRating:7.5
    
 },
 {
    name:"rrr",
    director:"rajamoli",
    year:2002,
    sname:"stranger",
    relsed:355,
    imdbRating:9.6,
reting:6
 }
]

movie.map((data)=>{
   // console.log(data.name,data.sname);
  
})
 let res=movie.filter((data)=>{
    return data.director=="jemes camaron"
})
console.log(res)
let r=movie.reduce((heigh,data)=>{
if(parseFloat(data.imdbRating)>heigh){
   heigh=parseFloat(data.imdbRating);
}
return heigh;
},0)
console.log(r);