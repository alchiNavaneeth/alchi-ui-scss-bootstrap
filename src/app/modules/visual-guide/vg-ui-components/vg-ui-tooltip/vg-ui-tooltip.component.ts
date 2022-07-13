import { Component, OnInit } from '@angular/core';
declare var bootstrap: any;

@Component({
  selector: 'app-vg-ui-tooltip',
  templateUrl: './vg-ui-tooltip.component.html',
  styleUrls: ['./vg-ui-tooltip.component.scss']
})
export class VgUiTooltipComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl)
    })

  }

}
