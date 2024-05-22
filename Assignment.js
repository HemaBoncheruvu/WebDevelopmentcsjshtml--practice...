let email=document.getElementById('email')
let pasword=document.getElementById('pasword')
let image=document.getElementById('image')
let label=document.getElementById('label1')
let label2=document.getElementById('label2')
let Signin=()=>{

//email from front end ==email from backend
if (email.value=='hjgdrs' && pasword.value==1256666666667) {
    alert('log in succesful')
} else {
    //alert('invalid credentials')
    label.textContent="here the text is changed"
    label.style.color="green"
    label2.textContent="read above guidelines properly"
    label2.style.color="green"
    email.style.borderColor="red"
    pasword.style.borderColor="red"
    image.src=  "https://quotefancy.com/media/wallpaper/3840x2160/38171-Arianna-Huffington-Quote-Failure-is-not-the-opposite-of-success-it.jpg"
}
}