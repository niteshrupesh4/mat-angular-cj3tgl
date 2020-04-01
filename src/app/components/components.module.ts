import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsComponent } from './forms/forms.component';
import { ComponentsRoutingModule } from './components-routing.module';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    MaterialModule,
    FormsModule
  ],
  declarations: [FormsComponent]
})
export class ComponentsModule { }