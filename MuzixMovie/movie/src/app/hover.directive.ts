import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  constructor() { }

  @HostBinding('style.transform')   //zoom-in-scale
  scale:string='';
  @HostBinding('style.transition') //zoom-in-animation-time
  transition:string='';

  @HostListener('mouseenter')
  hoverOn(){
    this.scale='scale(1.1)';
    this.transition='transform .6s'
  }
  @HostListener('mouseleave')
  hoverOff(){
    this.scale='scale(1.0)';
  }

}
