import { Directive, ElementRef, Input, OnChanges, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appSmallPopUp]'
})
export class SmallPopUpDirective implements OnInit, OnChanges{

  @Input() lengthValue: number;
  elSmallPopUp: any;
  constructor(private elementRef: ElementRef,
              private renderer: Renderer2,
              ) { }

  ngOnInit() {
    this.showOrRemovePopUp()
  }

  ngOnChanges() {
    this.showOrRemovePopUp()
  }

  showPopup(){
    this.elSmallPopUp = this.renderer.createElement('div')
    const text = this.renderer.createText(this.lengthValue.toString());
    this.renderer.appendChild(this.elSmallPopUp, text);
    this.renderer.appendChild(document.body, this.elSmallPopUp);
    this.renderer.addClass(this.elSmallPopUp, 'small-pop-up');
    let hostPos = this.elementRef.nativeElement.getBoundingClientRect();

    let top = hostPos.top ; 
    let right = hostPos.right - 15;

    this.renderer.setStyle(this.elSmallPopUp, 'top', `${top}px`);
    this.renderer.setStyle(this.elSmallPopUp, 'left', `${right}px`);
  }

  removePopup(){
    this.renderer.removeClass(this.elSmallPopUp, 'small-pop-up');
    this.renderer.removeChild(document.body, this.elSmallPopUp);
    this.elSmallPopUp = null;
  }

  showOrRemovePopUp(){
    if(this.lengthValue && this.lengthValue > 0){
      this.showPopup()
    }else if(this.lengthValue && this.lengthValue <= 0){
      this.removePopup()
    }
  }
}
