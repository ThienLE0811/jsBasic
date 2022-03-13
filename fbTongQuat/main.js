document.addEventListener("DOMContentLoaded", function(){
    //khai bao bien can su dung
    let nut = document.getElementsByClassName("icon");
    let noidung = document.getElementsByClassName('header-li'); 
    
    //cho tat ca bo mau trang di, doi tuong duoc click thanh mau trang
    for ( let i=0; i<nut.length;i++){
        nut[i].onclick = () => {
            if(nut[i].classList[1] == 'doimau')
            {
                nut[i].classList.remove('doimau'); // bo mau trang o chinh no

                //lay ve data-hienthi
                let hienthi = nut[i].getAttribute('data-hienthi')
                let phantuhienthi = document.getElementById(hienthi)
            
                // doi tuong duoc click duoc an di
                for(let k=0;k<noidung.length;k++){
                    noidung[k].classList.remove("danhsachra")
                }
                phantuhienthi.classList.remove('danhsachra')

            }
            else{
                for ( let j=0; j<nut.length;j++){
                    nut[j].classList.remove('doimau');
            }
            //doi tuong duoc click thanh mau trang
            nut[i].classList.toggle('doimau');
            
            //lay ve data-hienthi
            let hienthi = nut[i].getAttribute('data-hienthi')
            let phantuhienthi = document.getElementById(hienthi)
            
            //cho tat ca cac div header-li an di
            for(let k=0;k<noidung.length;k++){
                noidung[k].classList.remove("danhsachra")
            }

            // doi tuong duoc click duoc hien thi ra
            phantuhienthi.classList.toggle('danhsachra')
            }
        }
    }


}, false)