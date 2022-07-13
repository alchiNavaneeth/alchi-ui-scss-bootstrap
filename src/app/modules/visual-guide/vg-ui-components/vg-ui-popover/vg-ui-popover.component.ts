import { Component, OnInit } from '@angular/core';
declare var bootstrap: any;

@Component({
  selector: 'app-vg-ui-popover',
  templateUrl: './vg-ui-popover.component.html',
  styleUrls: ['./vg-ui-popover.component.scss']
})
export class VgUiPopoverComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
    var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl,{html: true})
    });



  }

}
