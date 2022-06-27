import { Directive, HostListener, ElementRef, Renderer2, OnInit } from '@angular/core';

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
