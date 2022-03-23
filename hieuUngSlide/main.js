/*
- xu ly phan nut chuyen trang truoc
- xu ly phan chuyen slide
- khi chuyen duoc roi cho hieu ung vao
- dat thoi gian tu chuyen dong

+)B1 xu ly khi click vao slide
+ Buoc nho 1:
- lam slide chuyen dong khi click vao nut chuyen slide
- lam hieu ung cho viec chuyen slide xong thi co 1 loat hieu ung di vao
=> abc.ham previousElementSibling => tra ve phan tu truoc no
=> nextElementSibling => tra ve ham dang sau no
+ Buoc nho 2:Cho slide tuong ung hien thi
- khai bao bien chua mang cac phan tu cua slide
- cho cac phan tu bien mat het bang cach remove class active (dung vong lap for)
- dua vao buoc nho 1 thi lay ra vi tri nut va cho phan tu co so thu tu la
vi tri nut hien thi

+)B2: Viet phan chuyen dong slide bang animation
- khi chuyen slide thi hieu ung bat dau chay
+ logic viet chuyen dong slide: 
- khi chuyen slide tuc la cai slide do duoc add class ten la active
- dua vao cai active day de ma viet hieu ung cho cac phan tu ben trong
VD: active.xanhduoi1

+)B3: Auto silde chuyen dong
- su dung 1 ham de sau moi khoang thoi gian thi ham do tu goi ra setInterval(1000,()=>{},1000)
- sau 5s goi ham tu xu ly:
+ B1 nho: tinh xem dang o slide nao, slide so may
+ B2 nho: thi cho tat ca slide an di, va cho slide
co so thu tu tinh duoc o buoc 1 (cong them 1) hien thi
=> dung ham nextElementSibling
+ B3 nho: check xem da den slide cuoi cung chua, neu den roi thi cho slide dau tien hien thi
+ B4 nho: dumg clearInterval de xoa che do tu goi ham sau moi thoi gian cua ham setInterval

*/

document.addEventListener("DOMContentLoaded", function(){
    //khai bao doi tuong can su dung
    let nut = document.querySelectorAll('.chuyenslide ul li');
    let slides = document.querySelectorAll('.cacslide ul li');
    let time = setInterval(()=>{autoSilde()},3000);
    

    //tra ve 1 mang nut
    for( let i=0;i<nut.length;i++){
        nut[i].addEventListener('click',()=>{
            // truoc khi click huy time tu chuyen dong
            clearInterval(time);
            
            //bo tat ca mau den di
            for(let j=0;j<nut.length;j++){
                nut[j].classList.remove('kichhoat')
            }
            nut[i].classList.add('kichhoat')

            //xu ly phan tinh vi tri
            //console.log(nut[i].previousElementSibling)
            let nutkichhoat = nut[i];
            let vitrinut;
            for(vitrinut = 0; nutkichhoat = nutkichhoat.previousElementSibling;vitrinut++)
            {}
            //console.log('Vi tri cua phan tu co class la kich hoat la = '+vitrinut);
            //Buoc 1: Cho tat ca slide an di bang cach remove class active
            for(let i = 0; i< slides.length;i++){
                slides[i].classList.remove('active')
                slides[vitrinut].classList.add('active')
            }
        })
    }// het su kien cho nut click
    
    // viet ham tu chuyen slide
    function autoSilde() {
        
            //buoc 1: xem slide nao dang chay
            let vitrislide = 0;
            let slideHienTai = document.querySelector('.cacslide ul li.active');
            
            for(vitrislide=0;slideHienTai=slideHienTai.previousElementSibling;vitrislide++){}
            //neu ma chua den vitrislide cuoi cung tuc la vitrislide <= slides.lengt
            //->hoat dong binh thuong
            if(vitrislide < (slides.length-1))
            {
                for(let i = 0; i< slides.length;i++){
                    slides[i].classList.remove('active')  
                    nut[i].classList.remove('kichhoat')
                }
                slides[vitrislide].nextElementSibling.classList.add('active')
                nut[vitrislide].nextElementSibling.classList.add('kichhoat')
            }
            else {
                for(let i = 0; i< slides.length;i++){
                    slides[i].classList.remove('active')  
                    nut[i].classList.remove('kichhoat')
                }
                slides[0].classList.add('active')
                nut[0].classList.add('kichhoat')
            }
            // console.log('vi tri slide hien lai la: '+ vitrislide)
            //cho phan tu tiep theo cua slide hien thi ra
    }
    
    


}, false)