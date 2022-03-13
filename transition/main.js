// truy xuat button

// truoc khi truy xuat phai document ready

document.addEventListener("DOMContentLoaded", function(){
    let nut = document.getElementById('btn1');
    //console.log(nut);
    let box = document.getElementsByClassName('box')

    

    //goi su kien click
    nut.onclick = () => {
        box[0].classList.toggle('goRight');
    }

}, false)