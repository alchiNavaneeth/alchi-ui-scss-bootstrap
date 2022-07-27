import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-vg-ui-range',
  templateUrl: './vg-ui-range.component.html',
  styleUrls: ['./vg-ui-range.component.scss']
})
export class VgUiRangeComponent implements OnInit {

  constructor() { }

  loadScript(url: string) {
    const body = <HTMLDivElement> document.body;
    const script = document.createElement('script');
    script.innerHTML = '';
    script.src = url;
    script.async = false;
    script.defer = true;
    body.appendChild(script);
  }

  ngOnInit(): void {

    // progress range slider
    let range:any = document.querySelector('.progress-range');
    let setValue = ()=>{
        let newValue = Number( (range?.value - range?.min) * 100 / (range?.max - range?.min) );
        let newPosition = 15 - (newValue * 0.3);
        document.documentElement.style.setProperty("--range-progress", `calc(${newValue}% + (${newPosition}px))`);
    };

    document.addEventListener("DOMContentLoaded", setValue);
    range?.addEventListener('input', setValue);

    setValue();

    this.loadScript('../../../../assets/js/range-group.js');


  }

}
