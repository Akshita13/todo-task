import {Directive,ElementRef,Input, OnInit,HostListener} from '@angular/core';


@Directive(
    {
     selector:'[appHighlight]'   
    }
)

export class Highlight implements OnInit{
    constructor(private el: ElementRef)
    {

    }
    @Input() defaultColor: string;

    @Input('appHighlight') highlightColor: string;

    @HostListener('mouseenter') onMouseEnter() {
        this.highlight(this.highlightColor || this.defaultColor || 'red');
      }

      @HostListener('mouseleave') onMouseLeave() {
        this.highlight(null);
      }
      
    private highlight(color: string) {
        this.el.nativeElement.style.backgroundColor = color;
      }
      ngOnInit() {
        console.log(this.el)
      }
}