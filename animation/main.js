
document.addEventListener("DOMContentLoaded",
    ()=>{
        let nut = document.getElementById("nut1");
        let khoi = document.getElementsByClassName("div");
        
        nut.onclick = () => {
            khoi[0].classList.toggle("go");
        }
    }
,false)