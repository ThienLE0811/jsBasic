// khong dung toggle class ma phai dung cach xu ly thong thuong voi if
//cach 1
/*
Xu ly animation
    B1: tu dinh nghia cho phan tu von co ( phan tu co id la btn2)
    co chuyen dong tu dau luon vi the phai dinh nghia them class de khong cho no
    chuyen dong (class = dungim, animation: none)
    B2: Lan 1 click se xoa class dungim sau do add class chieuso1
    B3: Khi click lan 2 thi remove chieuso1 va se tro ve chuyen dong tu dau (class=btn2)

*/


document.addEventListener("DOMContentLoaded", ()=>{
    let btn = document.getElementById("btn1")
    let state = "lan1";

    let box = document.getElementById("btn2");

    btn.onclick = () => {
        if(state == "lan1")
        {
            console.log("click lan 1")
            state = "lan2";
            box.classList.remove("dungim");
            box.classList.add("chieuso1");

        }
        else if(state == "lan2")
        {
             console.log("click lan 2")
             state = "lan1";
             box.classList.remove("chieuso1");
        }
    }

},false)