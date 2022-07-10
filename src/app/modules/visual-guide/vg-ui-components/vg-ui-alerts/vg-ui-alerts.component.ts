import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vg-ui-alerts',
  templateUrl: './vg-ui-alerts.component.html',
  styleUrls: ['./vg-ui-alerts.component.scss']
})
export class VgUiAlertsComponent implements OnInit {

  alertsList:any;

  constructor() { }

  ngOnInit(): void {

    this.alertsList = [
      {
        'text': 'A simple primary alert',
        'class': 'alert alert-info'
      },
      {
        'text': 'A simple success alert',
        'class': 'alert alert-success'
      },
      {
        'text': 'A simple error alert',
        'class': 'alert alert-danger'
      },
      {
        'text': 'A simple warning alert',
        'class': 'alert alert-warning'
      }
    ]

  }

}
