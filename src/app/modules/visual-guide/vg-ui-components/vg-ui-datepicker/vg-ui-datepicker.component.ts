import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-vg-ui-datepicker',
  templateUrl: './vg-ui-datepicker.component.html',
  styleUrls: ['./vg-ui-datepicker.component.scss']
})
export class VgUiDatepickerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    $('#startDate').datepicker({
      format: 'dd/mm/yyyy',
      orientation: "bottom"
     });

  }

}
