import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { FormsComponent } from "./forms/forms.component";
import { VideoPlayerComponent } from "./video-player/video-player.component";
import { MultiselectDropdownComponent } from "./multiselect-dropdown/multiselect-dropdown.component";
import { ImageCompressComponent } from "./image-compress/image-compress.component";

const routes: Routes = [
  {
    path: "form",
    component: FormsComponent
  },
  {
    path: "video",
    component: VideoPlayerComponent
  },
  {
    path: "multi-select",
    component: MultiselectDropdownComponent
  },
  {
    path: "image-compress",
    component: ImageCompressComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule {}
