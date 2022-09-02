const idprogress = document.getElementById("progress")
const prev = document.getElementById("prev")
const next = document.getElementById("next")
const circles = document.querySelectorAll('.circle')

let curActive = 1;

next.addEventListener('click',()=>{
    curActive += 1;

    if(curActive > circles.length){
    curActive = circles.length;
    }

    update()
});

prev.addEventListener('click',()=>{
    curActive -= 1;

    if(curActive < 1){
        curActive = 1;
        }
    update()
});


function update(){
    circles.forEach((circle,index)=>{
        if(curActive> index){
            circle.classList.add("active")
        }else{
            circle.classList.remove("active")
        }
    });
    const activeCicrles = document.querySelectorAll('.active')
    idprogress.style.width = ((activeCicrles.length -1)/(circles.length-1))*100 +'%';
    
    if(curActive ===1){
        prev.disabled = true;
    }else if(curActive === circles.length){
        next.disabled = true;
    }else{
        prev.disabled = false;
        next.disabled = false; 
    }
}