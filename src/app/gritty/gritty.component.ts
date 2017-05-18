import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, Input, Output, forwardRef, EventEmitter } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

declare const gritty: any;

@Component({
  selector: 'gritty-terminal',
  templateUrl: './gritty.component.html',
  styleUrls: ['./gritty.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => GrittyTerminalComponent),
      multi: true
    }
  ],
})

export class GrittyTerminalComponent implements OnInit, AfterViewInit {

  @ViewChild('gritty') editorContent: ElementRef;
  private _loaderScript:any = null;

  constructor() {
  }


  ngOnInit() {
  }

  ngAfterViewInit() {

    var onGotAmdLoader = () => {
        var myDiv: HTMLDivElement = this.editorContent.nativeElement;
        gritty('#'+myDiv.id,{
          callback:(method, data)=>{
            console.log(method+":"+data);
          },
          href:"http://172.17.136.23:7777"
        }); 
    };


    var loaderScript = document.createElement('script');
    loaderScript.type = 'text/javascript';
    loaderScript.src = 'src/assets/gritty/gritty.js';
    loaderScript.addEventListener('load', onGotAmdLoader);
    document.body.appendChild(loaderScript);
    this._loaderScript = loaderScript;

  }

  
  /**
   * Upon destruction of the component we make sure to dispose both the editor and the extra libs that we might've loaded
   */
  ngOnDestroy() {
    document.body.removeChild(this._loaderScript);
  }
}