import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';

@Component({
  //selector: 'app-custom-button',
  template: `<button (click)="handleClick()">{{label}}</button>`,
  styles: [`
    button {
      border: solid 3px;
      padding: 8px 10px;
      background: #bada55;
      font-size: 20px;
    }
  `]
})
export class CustomButtonComponent implements OnInit {
  @Input() label = 'default label';
  @Output() action = new EventEmitter<number>();
  private clickCt = 0;

  constructor() { }

  ngOnInit() {
  }

  handleClick() {
   this.clickCt++;
   this.action.emit( this.clickCt);
  }

}
