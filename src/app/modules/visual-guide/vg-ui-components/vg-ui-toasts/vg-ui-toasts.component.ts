import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-vg-ui-toasts',
  templateUrl: './vg-ui-toasts.component.html',
  styleUrls: ['./vg-ui-toasts.component.scss']
})
export class VgUiToastsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    $(".toast-btn-primary").click(function(){
      $('.toast-primary').toast('show');
    })

    $(".toast-btn-success").click(function(){
      $('.toast-success').toast('show');
    })

    $(".toast-btn-warning").click(function(){
      $('.toast-warning').toast('show');
    })

    $(".toast-btn-danger").click(function(){
      $('.toast-danger').toast('show');
    })

  }

}
