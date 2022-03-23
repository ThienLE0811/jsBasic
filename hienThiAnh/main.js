/*
B1) 
-Làm phần chuyển ảnh
- Click vào thì nó chuyển ảnh
B2) Làm được chuyển ảnh ở bước 1

- click vào hiển thị nền đen và ảnh: 
+ làm cái nền đen
+ cho nền đen biến mất
+ click vào được ảnh
+ cho nền đen hiển thị

- viết xử lý phần nội dung hiển thị ra:
+ viết dấu X để đóng


*/


document.addEventListener("DOMContentLoaded", function(){
    let anhs = document.querySelectorAll('.cacanh img')
    let nenDen = document.querySelector('.nenden');
    let dongLai = document.querySelector('.dongLai i');
    let thongtinanh = document.querySelector('.thongtinanh')
    

    dongLai.addEventListener('click',()=>{
        nenDen.classList.remove('ra')
    })

    nenDen.addEventListener('click',()=>{
        nenDen.classList.remove('ra')
        thongtinanh.classList.remove('ra')
    })

    for(let i=0; i<anhs.length;i++){
        anhs[i].addEventListener('click',()=>{
        nenDen.classList.add('ra')
        thongtinanh.classList.add('ra')
        })
    }


}, false)