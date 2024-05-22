//date objects
let data=new Date()
console.log(data.getHours());
console.log(data.getMinutes())
console.log(data.getSeconds());
console.log(data.getMonth())
let yob=document.getElementById('yob')
let mine=() =>{
    let age=data.getFullYear()-yob
    alert(age)
}
