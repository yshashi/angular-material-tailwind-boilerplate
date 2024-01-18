import { ScreenSizeSignal } from './../signals/screen-size.signal';
import { Directive, ElementRef, EventEmitter, HostListener, Inject, Output, Renderer2 } from '@angular/core';
var window: any;
@Directive({
  selector: '[appScreenSize]',
  standalone: true
})
export class ScreenSizeDirective {

  @Output() screenChange = new EventEmitter();
  screenSize!: string;

  constructor(private renderer: Renderer2, private el: ElementRef, private screenSizeSignal: ScreenSizeSignal) { }

  ngAfterViewInit() {
    this.setScreenSize();
    this.renderer.listen('window', 'resize', (event) => {
      this.setScreenSize();
    });
  }

  private setScreenSize() {
    const width = this.el.nativeElement.ownerDocument.defaultView.innerWidth;

    if (width < 600) {
      this.screenSize = 'small';
    } else if (width >= 600 && width < 1024) {
      this.screenSize = 'medium';
    } else {
      this.screenSize = 'large';
    }
    this.screenSizeSignal.currenScreenSize.set(this.screenSize)
  }

}
