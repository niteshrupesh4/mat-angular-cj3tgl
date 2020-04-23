import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentsRoutingModule } from './payemnts-routing.module';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';
import { StripeCheckoutComponent } from './stripe-checkout/stripe-checkout.component';
import { PaymentsService } from './payments.service';
import { NgxStripeModule } from 'ngx-stripe';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    PaymentsRoutingModule,
    FormsModule,
    MaterialModule,
    NgxStripeModule.forRoot('pk_test_aeUUjYYcx4XNfKVW60pmHTtI'),
    HttpClientModule
  ],
  declarations: [StripeCheckoutComponent],
  providers: [PaymentsService]
})
export class PaymentsModule { }