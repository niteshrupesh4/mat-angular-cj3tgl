import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentsRoutingModule } from './payemnts-routing.module';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';
import { StripeCheckoutComponent } from './stripe-checkout/stripe-checkout.component';

@NgModule({
  imports: [
    CommonModule,
    PaymentsRoutingModule,
    FormsModule,
    MaterialModule
  ],
  declarations: [StripeCheckoutComponent]
})
export class PaymentsModule { }