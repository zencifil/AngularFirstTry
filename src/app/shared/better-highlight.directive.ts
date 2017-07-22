import { Directive, ElementRef, Renderer, OnInit } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  constructor(private elRef: ElementRef, private renderer: Renderer) { }

  ngOnInit() {
    this.renderer.setElementStyle(this.elRef.nativeElement, 'background-color', 'red');
  }
}
