const next = document.querySelector("#next");
const prev = document.querySelector("#previous");
const slider = document.querySelector("#slidercont");

next.addEventListener("click", ()=>{
    moveSlider(1)
    // clearInterval(auto)
})

prev.addEventListener("click", ()=>{
    moveSlider(-1)
})

const imgActiva = 0;

function moveSlider (direction){
    imgActiva += direction    //cambia la imagen activa

    if (imgActiva > 2) imgActiva = 0;
    else if (imgActiva < 0) imgActiva = 2;

    slider.style.marginLeft = `${-352}px`;
}

const auto = setInterval(()=> moveSlider(1), 3000);