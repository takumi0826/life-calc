import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appImageLoad]',
})
export class ImageLoadDirective {
  @Input() src = '';

  constructor(private el: ElementRef<HTMLImageElement>) {}

  @HostListener('window:load', ['$event'])
  onLoad(event: any) {
    console.log(event);

    // this.el.nativeElement.addEventListener('onload', );
  }
}
