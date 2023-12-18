import { Directive, ElementRef, HostListener, Input } from "@angular/core";

@Directive({
    selector: '[highlight]'
})
export class HighlightDirective {

    @Input() highlight =""
    constructor(private elRef: ElementRef){
        
    }

    @HostListener('mouseover', ['$event'])
    onMouseHover(){

            this.elRef.nativeElement.style.background = this.highlight;

            console.log(this.highlight)
    }

    @HostListener('mouseleave', ['$event'])
    onMouseLeave(){
            this.elRef.nativeElement.style.background = "none";
    }


}