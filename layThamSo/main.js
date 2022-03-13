/*
+ Gui tham so thong qua the html
- Su dung data-
- Lay ve tham so thong qua ham getAttribute
-Co the gui nhieu tham so


*/



document.addEventListener("DOMContentLoaded", function(){
    let nut = document.getElementsByClassName('btn')
    
    for( let i=0; i<nut.length;i++)
    {
        nut[i].onclick = () => {
            console.log(`Ten: ${nut[i].getAttribute('data-name')}`)
            console.log(`Tuoi: ${nut[i].getAttribute('data-age')}`)
        }
    }    
    

}, false)