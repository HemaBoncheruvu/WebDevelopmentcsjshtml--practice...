// let a="malayalaam"
// console.log(a[6])
// console.log(a.lastIndexOf('a',4))
// console.log(a.substring(0,4))

//let s="java"
//let re=""
//for(let i=0;i<s.length;i++){
//re=re+s.charAt(i)+s.charAt(i) 
  ///re=s.charAt(i)+re to reverse a sstring 
  //re=re+s[i]+s[i]
//}
//console.log(re)
// s="malayalm"
// if(s[0]+s[1]==s[s.length-2]+s[s.length-1])
// console.log(true)
// else{
//     console.log(false)
// 
//repeat based on n value

// s="java"
// let n=3
// let c=""
// for(let i=0;i<=n-1;i++){
//     c=c+s.substring(0,n)
    
// }
// console.log(c)
s="javaaav"
let max=0
let char=''

for(let i=0;i<s.length;i++){
    let c=0;
    for(let j=i+1;j<s.length;j++){
  if(s[i]==s[j]){
    c++;
    
}
if(c>max){
     max =c  
     char=s[i]
}
    }
   
    
    
}
console.log(char)
