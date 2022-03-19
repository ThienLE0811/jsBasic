document.addEventListener("DOMContentLoaded", function(){
    //bat su kien cuon chuot
    let state = 'duoi300';
    
    //lay ve menu
    let doituongmenu = document.querySelector('.menu');
    console.log(doituongmenu)

    window.addEventListener('scroll', () =>{
        console.log(window.pageYOffset)

        if(window.pageYOffset > 300){
            if(state == 'duoi300'){
                state = 'tren300'

                doituongmenu.classList.add('nholai');

            }
        }
        else if(window.pageYOffset <= 300) {
            if(state == 'tren300'){
                
                doituongmenu.classList.remove('nholai');
                state = 'duoi300'
            }
        }

    })


}, false)