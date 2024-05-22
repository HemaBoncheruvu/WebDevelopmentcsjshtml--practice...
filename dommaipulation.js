// let element=document.getElementById('htag')
// element.textContent="new content"
// element.style.color="red";
// element[1].textContent="new content"
// element[2].textContent="new content"
// element[3].textContent="new content"
// for(let int=0;i<element.clientHeight;i++)
// {
//     element[i].textContent="new content";
// }
// for(let int=0;i<element.clientHeight;i++)
// {
//     if(i%2==0)
//     {
//         element[i].textContent=0 
//     }
//     else{
//         element[i].textContent=1
//     }
// }
// for(let i=0;i<=element.length-2;i+=3)
// {
//     element[i].textContent=0 
//     element[i+1].textContent=0 
//     element[i+2].textContent=0  
// }
// or
let element=document.getElementsByClassName('htag')
for(let i=0; i<element.length; i++)
{
    element[i].textContent=i%3;
}




