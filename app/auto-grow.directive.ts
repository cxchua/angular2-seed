import {Directive, ElementRef, Renderer} from 'angular2/core';

@Directive({
  selector: '[autoGrow]',
  host: {
    '(mouseenter)' : 'onFocus()',
    '(mouseleave)'  : 'onBlur()'
  }
})

export class AutoGrowDirective {

constructor(private el:ElementRef, private ren: Renderer){

}

  onFocus(){
      this.ren.setElementStyle(this.el.nativeElement,'width','200');
  }
  onBlur(){
      this.ren.setElementStyle(this.el.nativeElement,'width', '120');
  }
}
