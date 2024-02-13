import { Directive, ElementRef, HostListener, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appImgStyle]',
  standalone: true
})
export class ImgStyleDirective implements OnChanges {

  @Input() borRad:string="20px";
  @Input() boxShad:string="5px 5px 5px wheat";
  @Input() opacity:string="90%";

  constructor(private elementRef:ElementRef) { }
  ngOnChanges() {
    this.elementRef.nativeElement.style.borderRadius= `${this.borRad}`
    this.elementRef.nativeElement.style.boxShadow = `${this.boxShad}`
    this.elementRef.nativeElement.style.opacity = `${this.opacity}`
  }
  @HostListener('mouseover') productHover() {
    this.elementRef.nativeElement.style.borderRadius= `${this.borRad}`
    this.elementRef.nativeElement.style.boxShadow = `${this.boxShad}`
    this.elementRef.nativeElement.style.opacity = `${this.opacity}`
  }
  
  @HostListener('mouseout') productNotHover() {
    this.elementRef.nativeElement.style.borderRadius= "0px"
    this.elementRef.nativeElement.style.boxShadow = ""
    this.elementRef.nativeElement.style.opacity = ""
  }
}