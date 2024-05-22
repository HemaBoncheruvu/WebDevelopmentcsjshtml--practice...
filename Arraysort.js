// let a =[30,24,5,6,7];
// for(let i=0;i<a.length;i++){
//     for(let j=i+1;j<a.length;j++)
//     //  if(a[i]>a[j]){        assending
//     //   a[i]=a[i]+a[j]
//     //   a[j]=a[i]-a[j]

//     //   a[i]=a[i]-a[j]

//     //  }
   
//    if(a[i]<a[j]){            desending
//     let temp=a[i]
//     a[i]=a[j]
//     a[j]=temp
//    }
// }
// console.log(a)
//  let a="string"
//  let t=""
//  for(let i=0;i<a.length;i++){
    
//     //     if(a[i]!=a[i+1]){
//     //     let temp=a[i]
//     //     a[i]=a[i+1]
//     //     a[i+1]=temp
      
//     // }
//     t+=a[i+1]+a[i]
//     i++
//  }
//  console.log(t)







/// SCOPE OF FUNCTIONS

function scope(){
   
        // for(var i=0;i<5;i++){
        //     console.log(i)                                         //FUNCTION SCOPE => VAR
                                                                           // IT CAN ACCESS OUT THE FUNCTION
        // }
        // console.log(i)                                             
    


        // for(let i=0;i<5;i++){
        //     console.log(i)
        // }
        // console.log(i)

                                                               // //BLOCK SCOPE => CONST,LET
                                                                           // WE CAN  NOT ACCESS OUT THE FUNCTION
        if(30>5){
            const i=5
            console.log(i)
        }
        console.log(i)
}
scope()