import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { StripeCheckoutComponent } from "./stripe-checkout/stripe-checkout.component";

const routes: Routes = [
   {
    path: "stripe-checkout",
    component: StripeCheckoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentsRoutingModule {}
