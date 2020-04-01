import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FlexLayoutModule } from "@angular/flex-layout";
import { ChartistModule } from "ng-chartist";
import { MaterialModule } from "../material/material.module";
import { DashboardRoutes } from "./dashboard-routing.module";
import { DashboardComponent } from "./dashboard.component";

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    ChartistModule,
    RouterModule.forChild(DashboardRoutes)
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule {}
