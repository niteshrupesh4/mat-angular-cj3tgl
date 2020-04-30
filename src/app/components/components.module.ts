import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsComponent } from "./forms/forms.component";
import { ComponentsRoutingModule } from "./components-routing.module";
import { MaterialModule } from "../material/material.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { VideoPlayerComponent } from "./video-player/video-player.component";
import { MultiselectDropdownComponent } from "./multiselect-dropdown/multiselect-dropdown.component";
import { AngularMultiSelectModule } from "angular2-multiselect-dropdown";
import { ImageCompressComponent } from "./image-compress/image-compress.component";
import { NgxImageCompressService } from "ngx-image-compress";
import { ListCommentReactiveFormComponent } from "./list-comment-reactive-form/list-comment-reactive-form.component";
import { ScrollPaginationComponent } from "./scroll-pagination/scroll-pagination.component";
import { InfiniteScrollModule } from "ngx-infinite-scroll";
import { HttpClientModule } from "@angular/common/http";
import { WebcamComponent } from "./webcam/webcam.component";
import { WebcamModule } from "ngx-webcam";
import { SocialShareButtonComponent } from './social-share-button/social-share-button.component';

@NgModule({
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    MaterialModule,
    FormsModule,
    AngularMultiSelectModule,
    ReactiveFormsModule,
    InfiniteScrollModule,
    HttpClientModule,
    WebcamModule
  ],
  declarations: [
    FormsComponent,
    VideoPlayerComponent,
    MultiselectDropdownComponent,
    ImageCompressComponent,
    ListCommentReactiveFormComponent,
    ScrollPaginationComponent,
    WebcamComponent,
    SocialShareButtonComponent
  ],
  providers: [NgxImageCompressService]
})
export class ComponentsModule {}
