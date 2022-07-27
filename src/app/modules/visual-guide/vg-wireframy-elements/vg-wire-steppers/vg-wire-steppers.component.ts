import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vg-wire-steppers',
  templateUrl: './vg-wire-steppers.component.html',
  styleUrls: ['./vg-wire-steppers.component.scss']
})
export class VgWireSteppersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    $('.stepper .step-item').on('click', function() {
      $(this).addClass('active')
    })

  }

}
