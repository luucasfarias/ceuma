import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-message',
  template: `
    <div *ngIf="isError()" class= "ui-message ui-messages-error">{{text}}</div>
  `,
  styles: [`
    .ui-messages-error {
      margin: 0;
      margin-top: 3px;
    }
  `]
})
export class MessageComponent {
  @Input() error: string;
  @Input() control: FormControl;
  @Input() text: string;

  // ? method check if has error in form
  isError(): boolean {
    return this.control.hasError(this.error) && this.control.dirty;
  }
}
