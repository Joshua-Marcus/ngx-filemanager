import { Component, Inject, Input, Output, EventEmitter } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ResFile } from 'ngx-filemanager-core';

export interface CopyDialogInterface {
  files: ResFile[];
}

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'btns-cancel-ok',
  template: `
    <div class="full-width text-center">
      <button mat-raised-button (click)="clickedCancel.emit()">
        <mat-icon>clear</mat-icon>
        Cancel
      </button>
      <button
        mat-raised-button
        color="primary"
        (click)="clickedOk.emit()"
        [disabled]="okDisabled"
      >
        <mat-icon>{{ okIcon }}</mat-icon>
        {{ okLabel }}
      </button>
    </div>
  `,
  styles: [
    `
      button {
        margin: 5px;
      }
    `
  ]
})
export class AppBtnsCancelOkComponent {
  @Input()
  okDisabled: boolean;
  @Input()
  okIcon: string;
  @Input()
  okLabel: string;
  @Output()
  clickedOk = new EventEmitter<void>();
  @Output()
  clickedCancel = new EventEmitter<void>();
}