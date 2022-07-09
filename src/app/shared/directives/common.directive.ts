import { Directive, Inject, Output, EventEmitter, HostListener, ElementRef, Renderer2, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Directive({
  selector: '[appCommon]'
})
export class CommonDirective {

  constructor() { }

}


@Directive({
  selector: '.anchorjs-link'
})

export class AnchorjsLinkDirective {


  link:any;

  constructor(private element: ElementRef, private renderer: Renderer2) {

  }

  @HostListener("click", ["$event"])
   onClick(event:any) {
    const element = document.querySelector(this.link)
    if (element) element.scrollIntoView({ behavior: 'smooth' })
   }

   ngOnInit() {

    this.link = this.element.nativeElement.getAttribute('href');
    this.renderer.removeAttribute(this.element.nativeElement, 'href');
   }

}

@Directive({
  selector: '.btn-clipboard'
})

export class ClipboardDirective {

  link:any;

  constructor(private element: ElementRef, private renderer: Renderer2) {

  }

  @HostListener("click", ["$event"])
   onClick(event:any) {

    let highLightEl = this.element.nativeElement.parentElement.nextSibling;
    let htmlText = highLightEl.children[0].children[0].innerHTML;
    let text = htmlText.replace(/<\s*br[^>]?>/,'\n').replace(/(<([^>]+)>)/g, "").replace(/&lt;/g, '<').replace(/&gt;/g, '>');
    navigator.clipboard.writeText(text);

   }

   ngOnInit() {


   }

}

@Directive({
  selector: '[colorBg]'
})

export class CopyColorDirective {

  constructor(
    private element: ElementRef,
    private renderer: Renderer2) {

  }

  elem = this.element.nativeElement

  @HostListener('mouseover', ['$event'])
    onMouseOver(event:any) {

      let selectElem = this.elem.children[0].children[0]
      this.renderer.addClass(selectElem, 'show')

   }

   @HostListener('mouseleave', ['$event'])
    onMouseOut(event:any) {

      let selectElem = this.elem.children[0].children[0]
      this.renderer.removeClass(selectElem, 'show')

   }

   @HostListener('mouseup', ['$event'])
    onClick(event:any) {

      event.stopPropagation();

      let highLightEl = this.element.nativeElement.nextSibling.nextSibling;
      let htmlText = highLightEl.innerHTML;
      let text = htmlText.replace(/<\s*br[^>]?>/,'\n').replace(/(<([^>]+)>)/g, "").replace(/&lt;/g, '<').replace(/&gt;/g, '>');
      navigator.clipboard.writeText(text);

      let parentElem = this.elem.children[0].children[0].children
      for(let i=0; i<parentElem.length; i++) {
        this.renderer.removeClass(parentElem[i], 'show')
        if (i == parentElem.length - 1) {
          let secondElem = this.elem.children[0].children[0].children[1]
          this.renderer.addClass(secondElem, 'show')
        }
      }

      setTimeout(() => {
        let firstElem = this.elem.children[0].children[0].children[0]
        let secondElem = this.elem.children[0].children[0].children[1]
        this.renderer.addClass(firstElem, 'show')
        this.renderer.removeClass(secondElem, 'show')
      }, 1000)

   }

}

@Directive({
  selector: '.fi-icon-box'
})

export class FiIconBoxDirective {


  @Output() outsideClick: EventEmitter<MouseEvent> = new EventEmitter();


  constructor(private element: ElementRef) {

  }


  @HostListener("click", ["$event"])
   onClick(event:any) {

    let elem =  document.querySelector('.fi-icon-details-toaster');
    elem?.classList.add('show')
    this.element.nativeElement.classList.add('active')

   }

   @HostListener('document:mouseup', ['$event'])
    onDocumentClick(event:any) {


      let parentElem =  document.querySelector('.fi-icon-details-toaster');
      let childelem =  document.querySelector('.fi-toaster-container');

      if (!childelem?.contains(event.target)) {
        parentElem?.classList.remove('show')
        this.element.nativeElement.classList.remove('active')
      }

   }

   ngOnInit() {


   }

}
