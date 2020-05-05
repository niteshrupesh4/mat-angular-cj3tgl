import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { StripeCheckoutComponent } from "./stripe-checkout/stripe-checkout.component";
import { StripeAccountComponent } from "./stripe-account/stripe-account.component";
import { StripeDocumentComponent } from "./stripe-document/stripe-document.component";
const routes: Routes = [
  {
    path: "stripe-checkout",
    component: StripeCheckoutComponent
  },
  {
    path: "stripe-account",
    component: StripeAccountComponent
  },
  {
    path: "stripe-document",
    component: StripeDocumentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentsRoutingModule {}
