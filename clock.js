let data=new Date()
let h=document.getElementById('hour')
let m=document.getElementById('min')
let s=document.getElementById('sec')
// h.textContent=data.getHours()
// m.textContent=data.getMinutes()
// s.textContent=data.getSeconds()

setInterval(() => {
    h.textContent=data.getHours()
   m.textContent=data.getMinutes()
   s.textContent=data.getSeconds()
   time()
   console.log("hello")
}, 1000);

let time=() => {
    let data=new Date()                           ///when we call this here it keep on time executing
    h.textContent=data.getHours()
    m.textContent=data.getMinutes()
    s.textContent=data.getSeconds()
}
