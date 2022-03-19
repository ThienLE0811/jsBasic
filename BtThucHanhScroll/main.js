document.addEventListener("DOMContentLoaded", function(){
    let menudo = document.querySelector('.menu');
    let statemenudo = "duoi100";
    let giua = document.querySelector('.giua');
    let vitrikhoivang = giua.offsetTop;
    let statekhoivang = 'duoi';
    let khoangcachhienthi = 300; //day la khoang thoi gian
    let cuoihienthi = vitrikhoivang+ khoangcachhienthi;
    console.log(cuoihienthi)

    let phantuload = document.querySelectorAll('.s3');
    let states3 = 'duoi';
    let vitris3 = phantuload[0].offsetTop - 10;

    window.addEventListener('scroll',()=>{
        console.log(window.pageYOffset);
        if(window.pageYOffset>100){
            if(statemenudo == 'duoi100')
            statemenudo = 'tren100';
            menudo.classList.add('menuden');
        }
        else if(window.pageYOffset<100){
            if(statemenudo == 'tren100')
            statemenudo = 'duoi100';
            menudo.classList.remove('menuden');
        }

        //xu lu khoi vang
        if((window.pageYOffset> vitrikhoivang) && (window.pageYOffset< cuoihienthi)){
            if(statekhoivang == 'duoi'){
                statekhoivang = 'danghienthi';
                giua.classList.add('vangdunglai');
            }
        }
        else if((window.pageYOffset< vitrikhoivang) || (window.pageYOffset> cuoihienthi)){
            if(statekhoivang == 'danghienthi')
            statekhoivang = 'duoi';
            giua.classList.remove('vangdunglai');
        }

        // xu ly phan tu load
        // if(window.pageYOffset > vitris3){
        //     if(states3 == 'duoi'){
        //         states3 = 'tren';
        //         phantuload.classList.add('dilen');
        //     }
        // }

        for( i=1; i<phantuload.length;i++){
            if(window.pageYOffset > vitris3){
                if(states3 == 'duoi'){
                    vitris3 = phantuload[i].offsetTop - i*10;
                    phantuload[i].classList.add('dilen');
                }
            }
        }
        

    })


    



}, false)