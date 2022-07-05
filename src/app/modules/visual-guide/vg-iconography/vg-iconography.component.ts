import { Component, OnInit } from '@angular/core';

import { icons } from 'src/app/data/ui/icons/data'

@Component({
  selector: 'app-vg-iconography',
  templateUrl: './vg-iconography.component.html',
  styleUrls: ['./vg-iconography.component.scss']
})
export class VgIconographyComponent implements OnInit {


  iconlist:any;
  selectedIcon:any = {};


  showIconDetails(name:string, type:string) {
    let data = {
      name: name,
      type: type
    }
    this.selectedIcon = data
  }

  constructor() { }

  ngOnInit(): void {

    this.iconlist = icons


  }

}
