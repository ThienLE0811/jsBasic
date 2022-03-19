/*  - biet khi nao cuon chuot
    - biet vi tri cua nguoi dung 


*/


document.addEventListener("DOMContentLoaded", function(){
    // bat su kien khi ng dung scroll

    let state = 'duoi300';

    window.addEventListener('scroll', ()=>{
        

        console.log(window.pageYOffset)
        if(window.pageYOffset > 300){
            if(state == 'duoi300')
            
            console.log('dang o menu lam gi lam di');
            state = 'tren300';
        }
    })

}, false)