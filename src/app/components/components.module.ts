import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsComponent } from './forms/forms.component';
import { ComponentsRoutingModule } from './components-routing.module';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { MultiselectDropdownComponent } from './multiselect-dropdown/multiselect-dropdown.component';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
@NgModule({
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    MaterialModule,
    FormsModule,
    AngularMultiSelectModule,
    ReactiveFormsModule
  ],
  declarations: [FormsComponent, VideoPlayerComponent, MultiselectDropdownComponent]
})
export class ComponentsModule { }