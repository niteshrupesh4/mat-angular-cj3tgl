import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentsRoutingModule } from './payemnts-routing.module';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StripeCheckoutComponent } from './stripe-checkout/stripe-checkout.component';
import { PaymentsService } from './payments.service';
import { NgxStripeModule } from 'ngx-stripe';
import { HttpClientModule } from '@angular/common/http';
import { StripeAccountComponent } from './stripe-account/stripe-account.component';

@NgModule({
  imports: [
    CommonModule,
    PaymentsRoutingModule,
    FormsModule,
    MaterialModule,
    NgxStripeModule.forRoot('pk_test_A8tTtxjDU53fx2ubFGqeUCnI'),
    HttpClientModule,
    ReactiveFormsModule
  ],
  declarations: [StripeCheckoutComponent, StripeAccountComponent],
  providers: [PaymentsService]
})
export class PaymentsModule { }