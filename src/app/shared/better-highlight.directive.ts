import { Directive, ElementRef, Renderer, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  constructor(private elRef: ElementRef, private renderer: Renderer) { }

  ngOnInit() {
    // this.renderer.setElementStyle(this.elRef.nativeElement, 'background-color', 'red');
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.renderer.setElementStyle(this.elRef.nativeElement, 'background-color', 'red');
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.renderer.setElementStyle(this.elRef.nativeElement, 'background-color', 'transparent');
  }
}
