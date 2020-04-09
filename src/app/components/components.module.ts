import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsComponent } from './forms/forms.component';
import { ComponentsRoutingModule } from './components-routing.module';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';
import { VideoPlayerComponent } from './video-player/video-player.component';

@NgModule({
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    MaterialModule,
    FormsModule
  ],
  declarations: [FormsComponent, VideoPlayerComponent]
})
export class ComponentsModule { }