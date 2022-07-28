import { Component, OnInit } from '@angular/core';

declare global {
  interface JQuery {
    stepper(): void;
  }
}

@Component({
  selector: 'app-vg-wire-steppers',
  templateUrl: './vg-wire-steppers.component.html',
  styleUrls: ['./vg-wire-steppers.component.scss']
})
export class VgWireSteppersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    $('.stepper-default .step-item, .stepper-icon .step-item').on('click', function() {
      $(this).addClass('active')
    })

    $.fn.stepper = function() {

      var stepperIndex = 0
      var self = this;

      function setStepperIndex(index:number) {

        $(self).find('.tabs .tab').hide()

        $(self).find('.stepper .step-item').eq(index).addClass('active')
        $(self).find('.stepper .step-item').eq(index+1).removeClass('active')
        $(self).find('.tabs .tab').eq(index).show()

      }

      this.find('.next-btn').on('click', function(){
        stepperIndex = stepperIndex+1
        setStepperIndex(stepperIndex)
      })

      this.find('.prev-btn').on('click', function(){
        stepperIndex = stepperIndex-1
        setStepperIndex(stepperIndex)
      })

      setStepperIndex(stepperIndex)

    };

    (<any>$('#stepper-horizontal') ).stepper();
    (<any>$('#stepper-vertical') ).stepper();

  }

}
