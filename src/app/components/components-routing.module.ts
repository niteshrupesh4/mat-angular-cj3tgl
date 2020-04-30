import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { FormsComponent } from "./forms/forms.component";
import { VideoPlayerComponent } from "./video-player/video-player.component";
import { MultiselectDropdownComponent } from "./multiselect-dropdown/multiselect-dropdown.component";
import { ImageCompressComponent } from "./image-compress/image-compress.component";
import { ListCommentReactiveFormComponent } from "./list-comment-reactive-form/list-comment-reactive-form.component";
import { ScrollPaginationComponent } from "./scroll-pagination/scroll-pagination.component";
import { WebcamComponent } from "./webcam/webcam.component";
import { SocialShareButtonComponent } from "./social-share-button/social-share-button.component";

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
  },
  {
    path: "list-comment",
    component: ListCommentReactiveFormComponent
  },
  {
    path: "scroll-pagination",
    component: ScrollPaginationComponent
  },
  {
    path: "webcam",
    component: WebcamComponent
  },
  {
    path: "social-share",
    component: SocialShareButtonComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule {}
