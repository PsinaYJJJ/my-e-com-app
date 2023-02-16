import { ApplicationRef, ComponentFactoryResolver, ComponentRef, Directive, ElementRef, EmbeddedViewRef, HostListener, Injector, Input, OnDestroy } from '@angular/core';
import { TooltipComponent } from './tooltip.component';

@Directive({
  selector: '[tooltip]'
})
export class TooltipDirective implements OnDestroy{
  @Input('tooltip') tooltip:string = '';
  private componentRef?: ComponentRef<any>;
  constructor(
    private elementRef: ElementRef,
    private appRef: ApplicationRef, 
    private componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector
  ) { }
  
  @HostListener('mouseenter')
  onMouseEnter(): void {
    if (!this.componentRef) {
      this.componentRef = this.componentFactoryResolver.resolveComponentFactory(
        TooltipComponent).create(this.injector);
      this.appRef.attachView(this.componentRef.hostView);
      const domElem = 
            (this.componentRef.hostView as EmbeddedViewRef<any>)
            .rootNodes[0] as HTMLElement;       
      document.body.appendChild(domElem);
      this.setTooltipComponentProperties();
    }
  }

  private setTooltipComponentProperties() {
    if (this.componentRef) {
      this.componentRef.instance.tooltip = this.tooltip;
      const {left, right, bottom} = 		  	
        this.elementRef.nativeElement.getBoundingClientRect();
      this.componentRef.instance.left = (right - left) / 2 + left;
      this.componentRef.instance.top = bottom;
    }
  }

  // @HostListener('mouseleave')
  // onMouseLeave(): void {
  //   this.destroy();
  // }

  ngOnDestroy(): void {
    this.destroy();
  }

  destroy(): void {
    if (this.componentRef) {
      this.appRef.detachView(this.componentRef?.hostView);
      this.componentRef.destroy();
      this.componentRef = undefined
    }
  }
}