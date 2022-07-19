import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vg-wire-steppers',
  templateUrl: './vg-wire-steppers.component.html',
  styleUrls: ['./vg-wire-steppers.component.scss']
})
export class VgWireSteppersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    let stepper:any = document.querySelectorAll('.steppers .step-item');

    for (let i = 0; i < stepper.length; i++) {
      stepper[i].addEventListener('click', setActive);
    }

    function setActive(e:any) {
      for (var i = 0; i < stepper.length; i++) {
        stepper[i].classList.remove('active');
      }
      e.target.classList.add('active');
    }


  }

}
