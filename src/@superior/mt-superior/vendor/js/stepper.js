
//stepper Default and stepper icon
$('.stepper-default .step-item, .stepper-icon .step-item').on('click', function() {
  $(this).addClass('active')
})

//horizontal/vertical stepper
$.fn.stepper = function() {

  var stepperIndex = 0
  var self = this;

  function setStepperIndex(index) {

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
