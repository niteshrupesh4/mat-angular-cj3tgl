import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { MaterialModule } from "./material/material.module";
import { AppHeaderComponent } from "./layouts/full/header/header.component";
import { AppSidebarComponent } from "./layouts/full/sidebar/sidebar.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FlexLayoutModule } from "@angular/flex-layout";
import { HttpClientModule } from "@angular/common/http";
import { SharedModule } from "./shared/shared.module";
import { RouterModule } from "@angular/router";
import { AppRoutes } from "./app-routing.module";
import { FullComponent } from "./layouts/full/full.component";
import { SpinnerComponent } from "./shared/spinner.component";

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    FlexLayoutModule,
    HttpClientModule,
    SharedModule,
    RouterModule.forRoot(AppRoutes)
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    FullComponent,
    AppHeaderComponent,
    SpinnerComponent,
    AppSidebarComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
