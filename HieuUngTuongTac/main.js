document.addEventListener("DOMContentLoaded", function(){
    //khai bao bien can su dung
    let tg = document.getElementsByClassName("triangle");
    let triangle = tg[0];
    let ds = document.getElementsByClassName("header-li");
    let list = ds[0];

    // su dung ham onclick va toggle class cho tam giac

    triangle.onclick = () => {
        triangle.classList.toggle('tamgiactrang');
        list.classList.toggle('danhsachra')
    }

}, false)