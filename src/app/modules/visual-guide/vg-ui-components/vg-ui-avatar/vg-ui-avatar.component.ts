import { Component, OnInit } from '@angular/core';

import { patientsIcons } from 'src/app/data/ui/avatars/data'
import { cliniciansIcons } from 'src/app/data/ui/avatars/data'

@Component({
  selector: 'app-vg-ui-avatar',
  templateUrl: './vg-ui-avatar.component.html',
  styleUrls: ['./vg-ui-avatar.component.scss']
})
export class VgUiAvatarComponent implements OnInit {

  patientIconlist:any;
  cliniciansIconlist:any;

  selectedIcon:any = {};


  showIconDetails(name:string) {
    this.selectedIcon = name
  }

  constructor() { }

  ngOnInit(): void {

    this.patientIconlist = patientsIcons
    this.cliniciansIconlist = cliniciansIcons


  }

}
