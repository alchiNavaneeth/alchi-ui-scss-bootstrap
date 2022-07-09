import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vg-colors',
  templateUrl: './vg-colors.component.html',
  styleUrls: ['./vg-colors.component.scss']
})
export class VgColorsComponent implements OnInit {

  brandColors:any;
  elem:any;

  constructor(

  ) {

  }



  ngOnInit(): void {

    this.brandColors = [
      {
        name:"Primary",
        hexa: "#00818E",
        class: "bg-primary"
      },
      {
        name:"Secondary",
        hexa: "#F9B400",
        class: "bg-secondary"
      },
      {
        name:"Tertiary",
        hexa: "#80BFC4",
        class: "bg-tertiary"
      },
      {
        name:"Primary Dark",
        hexa: "#163359",
        class: "bg-primary-dark"
      },
      {
        name:"Background",
        hexa: "#F6F9FD",
        class: "bg-light"
      }
    ]

  }

}
