import { Routes } from "@angular/router";
import { FullComponent } from "./layouts/full/full.component";

export const AppRoutes: Routes = [
  {
    path: "",
    component: FullComponent,
    children: [
      {
        path: "",
        redirectTo: "/dashboard",
        pathMatch: "full"
      },
      {
        path: "",
        loadChildren: () =>
          import("./material-component/material-component.module").then(
            m => m.MaterialComponentModule
          )
      },
      {
        path: "dashboard",
        loadChildren: () =>
          import("./dashboard/dashboard.module").then(m => m.DashboardModule)
      },
      {
        path: "",
        loadChildren: () =>
          import("./components/components.module").then(m => m.ComponentsModule)
      },
      {
        path: "",
        loadChildren: () =>
          import("./payments/payments.module").then(m => m.PaymentsModule)
      }
    ]
  }
];
