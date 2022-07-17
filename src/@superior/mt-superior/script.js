
//range progress
let range = document.querySelector('.progress-range');
let setValue = ()=>{
    let newValue = Number( (range?.value - range?.min) * 100 / (range?.max - range?.min) );
    let newPosition = 15 - (newValue * 0.3);
    document.documentElement.style.setProperty("--range-progress", `calc(${newValue}% + (${newPosition}px))`);
};

document.addEventListener("DOMContentLoaded", setValue);
range?.addEventListener('input', setValue);

setValue();


