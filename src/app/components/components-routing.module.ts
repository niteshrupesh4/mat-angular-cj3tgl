import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { FormsComponent } from "./forms/forms.component";
import { VideoPlayerComponent } from "./video-player/video-player.component";

const routes: Routes = [
  {
    path: "form",
    component: FormsComponent
  },
  {
    path: "video",
    component: VideoPlayerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule {}
