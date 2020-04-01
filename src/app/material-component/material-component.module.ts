import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ButtonsComponent } from "./buttons/buttons.component";
import { RouterModule } from "@angular/router";
import { MaterialRoutes } from "./material-routing.module";
import { MaterialModule } from "../material/material.module";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FlexLayoutModule } from "@angular/flex-layout";
import { CdkTableModule } from "@angular/cdk/table";
import { ChipsComponent } from "./chips/chips.component";
import {
  DialogComponent,
  DialogOverviewExampleDialogComponent
} from "./dialog/dialog.component";
import { ExpansionComponent } from "./expansion/expansion.component";
import { GridComponent } from "./grid/grid.component";
import { ListsComponent } from "./lists/lists.component";
import { MenuComponent } from "./menu/menu.component";
import { ProgressComponent } from "./progress/progress.component";
import { ProgressSnipperComponent } from "./progress-snipper/progress-snipper.component";
import { SlideToggleComponent } from "./slide-toggle/slide-toggle.component";
import { SliderComponent } from "./slider/slider.component";
import { SnackbarComponent } from "./snackbar/snackbar.component";
import { StepperComponent } from "./stepper/stepper.component";
import { TabsComponent } from "./tabs/tabs.component";
import { ToolbarComponent } from "./toolbar/toolbar.component";
import { TooltipComponent } from "./tooltip/tooltip.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(MaterialRoutes),
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    CdkTableModule
  ],
  declarations: [
    ButtonsComponent,
    ChipsComponent,
    DialogOverviewExampleDialogComponent,
    DialogComponent,
    ExpansionComponent,
    GridComponent,
    ListsComponent,
    MenuComponent,
    ProgressComponent,
    ProgressSnipperComponent,
    SlideToggleComponent,
    SliderComponent,
    SnackbarComponent,
    StepperComponent,
    TabsComponent,
    ToolbarComponent,
    TooltipComponent
  ],
  entryComponents: [DialogOverviewExampleDialogComponent]
})
export class MaterialComponentModule {}
