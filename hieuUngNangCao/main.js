/*
- khi click vao nut thi se co 2 phan tu bi tac dong
+ 1 la slide hien tai
+ 2 la slide tiep theo
- neu muon xu ly duoc hieu ung nay dieu dau tien phai xac dinh duoc
2 cai : hien tai va tiep theo la cai nao

+)B1: bat duoc su kien click vao nut
+)B2: xac dinh duoc phan tu hien tai
+B3: xac dinh phan tu tiep theo
- co slide[] chua cac phan tu tiep theo
- phai xac dinh duoc chi so cua phan tu tiep theo
- dua vao chi so hien tai (
+ neu chi so hien tai < soluongslide-1 thi tang chi so len 1)
+ neu chi so hien tai == soluongslide-1 =>chi so hien tai bang 4 neu co 5 slide 
suy ra slide[4] se la phan tu cuoi cung

+)B4: Them chuyen dong vao 2 phan tu nay bang cach them class vao 2 phan tu nay
- dung js them class 
- viet css cho 2 class them vao

+)B5: sau khi chuyen dong xong roi
- chuyen class la active sang slide tiep theo
- bo di cac class da them o buoc 4 
(bo di chuyen dong - khong can nua va ve sau khong dung duoc nua)
- ham check chuyen dong xong roi hay chua

+)Xu ly loi khi click nhieu lan
- khi click lien tuc thi xac dinh 2 slide : hien tai va tiep theo
- sau do add class de chuyen dong
- doi chuyen dong xong thi remove class di va chuyen active len class tiep theo
-> loi xay ra la trong luc doi chuyen dong tiep theo thi nguoi dung lai click
- sua loi: trong luc dang chuyen dong thi khong duoc click nua, neu cu click thi
minh phai biet duoc la dang chuyen dong return false -> khong lam gi
- phai check duoc qua trinh dang xu ly chuyen dong ma nguoi dung click thi minh
se dừng luôn chương trình
- sử dụng 1 biến trạng thái: đánh dấu thời điểm mà có chuyển động, chỉ có thời điểm nào
không có chuyển động thì mới click
- đánh dấu xong chạy các hàm chuyển động như bình thường

+) Viet ham xu ly nut ben trai
- khi click vào nút bên trái
+B1: xác định đc 2 phần tử: phần tử hiện tại và phẩn tử tiếp theo(phần tử trước nó)
+B2: cho chuyen dong

*/


document.addEventListener("DOMContentLoaded", function(){
    let nutPhai = document.querySelector('.nuts b.phai')
    let nutTrai = document.querySelector('.nuts b.trai')
    let slides = document.querySelectorAll('.slides ul li')
    let chisohientai = 0;
    let soluongslide = slides.length;
    let state = 'dangDungYen';

    let chuyenSlidePhai = () =>{
        //kiem tra luon trang thai, neu dang chuyen dong
        if(state == 'dangChuyenDong'){
            return false; // dung chuong trinh
        }

        //den dong nay tuc la dang dung yen, se xu ly chuyen dong, danh dau dang chuyen dong
        state = 'dangChuyenDong';
        let trangThaiCua2CD = 0;

        let phanTuHienTai = slides[chisohientai];
        // xac dinh chi so phan tu tiep theo dua tren phan tu hien tai
        if(chisohientai< soluongslide-1) //chua den cuoi
        {
            chisohientai++;
        }else {
            chisohientai = 0;
        }
        let phanTuTiepTheo = slides[chisohientai];
        
        let xuLyHienTaiKetThucCD = ()=>{
            phanTuHienTai.classList.remove('active');
            phanTuHienTai.classList.remove('bienMatKhiAnNext');
            trangThaiCua2CD++;
            if(trangThaiCua2CD==2){
                state = 'dangDungYen';
            }
        }

        phanTuHienTai.addEventListener('webkitAnimationEnd',
        xuLyHienTaiKetThucCD);

        let xuLyTiepTheoKetThucCD = ()=>{
            phanTuTiepTheo.classList.remove('diVaoKhiAnNext')
            phanTuTiepTheo.classList.add('active')
            trangThaiCua2CD++;
            if(trangThaiCua2CD==2){
                state = 'dangDungYen';
            }
        }

        phanTuTiepTheo.addEventListener('webkitAnimationEnd',
        xuLyTiepTheoKetThucCD);
        
        
        
        
        
        // tao chuyen dong sau khi xac dinh duoc 2 phan tu
        phanTuHienTai.classList.add('bienMatKhiAnNext')
        phanTuTiepTheo.classList.add('diVaoKhiAnNext')
    
    
    }
    nutPhai.addEventListener('click',chuyenSlidePhai)
    //xong nut phai

    //
    let chuyenSlideTrai = ()=>{
        //kiem tra luon trang thai, neu dang chuyen dong
        if(state == 'dangChuyenDong'){
            return false; // dung chuong trinh
        }
        state = 'dangChuyenDong';
        let trangThaiCua2CD = 0;

        //xac dinh duoc 2 phan tu hien tai va tiep theo
        //phanTuHienTai truoc
        let phanTuHienTai = slides[chisohientai];
        if(chisohientai > 0) //chua den dau
        {
            chisohientai--;
        }else {
            //dang o phan tu dau tien cho chuyen sang phan tu cuoi cung
            chisohientai = soluongslide-1;
        }

        let phanTuTiepTheo = slides[chisohientai];
        
        let xuLyHienTaiKetThucCD = ()=>{
            phanTuHienTai.classList.remove('active');
            phanTuHienTai.classList.remove('bienMatKhiAnPrev');
            trangThaiCua2CD++;
            if(trangThaiCua2CD==2){
                state = 'dangDungYen';
            }
        }

        

        let xuLyTiepTheoKetThucCD = ()=>{
            phanTuTiepTheo.classList.add('active')
            phanTuTiepTheo.classList.remove('diVaoKhiAnPrev')
            trangThaiCua2CD++;
            if(trangThaiCua2CD==2){
                state = 'dangDungYen';
            }
        }

        phanTuHienTai.addEventListener('webkitAnimationEnd',
        xuLyHienTaiKetThucCD);
        
        phanTuTiepTheo.addEventListener('webkitAnimationEnd',
        xuLyTiepTheoKetThucCD);
        
        // tao chuyen dong sau khi xac dinh duoc 2 phan tu
        phanTuHienTai.classList.add('bienMatKhiAnPrev')
        phanTuTiepTheo.classList.add('diVaoKhiAnPrev')

    }

    nutTrai.addEventListener('click',chuyenSlideTrai)
}, false)