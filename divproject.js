let btn=document.getElementById('btn')
let card=document.getElementById('card')
let ful=document.getElementById('full')
let card1=document.getElementById('card1')
let card2=document.getElementById('card2')
let btn1=document.getElementById('btn1')
let btn2=document.getElementById('btn2')
let enroll=() =>{
    if(btn.textContent=="select"){
        btn.textContent="selected"
        card.style.border="5px solid darkgreen"
        ful.style.display="flex"
        btn1.textContent="selected"
        btn2.textContent="selected"
        card1.style.border="5px dotted green"
        card2.style.border="5px dotted green"
    }
    else{
        btn.textContent="select"
        card.style.border="none"
       
        ful.style.display="flex"
        c
    }
}