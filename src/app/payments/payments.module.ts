import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentsRoutingModule } from './payemnts-routing.module';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';
import { StripeCheckoutComponent } from './stripe-checkout/stripe-checkout.component';
import { PaymentsService } from './payments.service';

@NgModule({
  imports: [
    CommonModule,
    PaymentsRoutingModule,
    FormsModule,
    MaterialModule
  ],
  declarations: [StripeCheckoutComponent],
  providers: [PaymentsService]
})
export class PaymentsModule { }