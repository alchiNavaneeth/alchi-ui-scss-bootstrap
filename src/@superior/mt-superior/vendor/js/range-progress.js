let rangeProgress = document.querySelector('.progress-range');
let setValue = ()=>{
    let newValue = Number( (rangeProgress?.value - rangeProgress?.min) * 100 / (rangeProgress?.max - rangeProgress?.min) );
    let newPosition = 15 - (newValue * 0.3);
    document.documentElement.style.setProperty("--range-progress", `calc(${newValue}% + (${newPosition}px))`);
};

document.addEventListener("DOMContentLoaded", setValue);
rangeProgress?.addEventListener('input', setValue);

setValue();
