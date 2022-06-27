import { Component, OnInit } from '@angular/core';
declare var bootstrap: any;

@Component({
  selector: 'app-vg-typography-headers',
  templateUrl: './vg-typography-headers.component.html',
  styleUrls: ['./vg-typography-headers.component.scss']
})
export class VgTypographyHeadersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl)
    })

  }

}
