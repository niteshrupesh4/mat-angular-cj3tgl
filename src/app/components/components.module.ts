import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsComponent } from './forms/forms.component';
import { ComponentsRoutingModule } from './components-routing.module';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { MultiselectDropdownComponent } from './multiselect-dropdown/multiselect-dropdown.component';

@NgModule({
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    MaterialModule,
    FormsModule
  ],
  declarations: [FormsComponent, VideoPlayerComponent, MultiselectDropdownComponent]
})
export class ComponentsModule { }