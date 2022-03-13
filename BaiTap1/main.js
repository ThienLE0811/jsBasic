


document.addEventListener("DOMContentLoaded", function(){
    // Khai bao cac bien can dung
    let nut = document.querySelector('.nut')
    let menuleft = document.querySelector('.leftMenu')
    let hiddenMenu = document.querySelector('.hiddenMenu')
    let trang = document.querySelector('.mautrang')
    let content = document.getElementById('container')
    

    //khi click vao nut push
    nut.onclick = () => {

        hiddenMenu.classList.add('topM');

        //cho ca khoi lon nhat dich sang phai
        //content.classList.add('dichphai')
        trang.classList.add('trangquay')
        menuleft.classList.remove('goLeft')
    }

    hiddenMenu.onclick = () => {
        hiddenMenu.classList.remove('topM');
        content.classList.remove('dichphai')

        trang.classList.remove('trangquay')
        menuleft.classList.add('goLeft')
    }

}, false)