import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentSearchComponent } from './student-search/student-search.component';
import { FormsModule } from '@angular/forms';
import {
  InputTextModule, ButtonModule, DataTableModule, TooltipModule,
  DialogModule, DropdownModule
} from 'primeng/primeng';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StudentFormComponent } from './student-form/student-form.component';
import { SharedModule } from 'app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,

    InputTextModule,
    ButtonModule,
    DataTableModule,
    TooltipModule,
    DialogModule,
    DropdownModule,

    SharedModule
  ],
  declarations: [StudentSearchComponent, StudentFormComponent],
  exports: [StudentSearchComponent, StudentFormComponent]
})
export class StudentsModule { }