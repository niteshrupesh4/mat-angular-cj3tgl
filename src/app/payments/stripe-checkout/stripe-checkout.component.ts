import { Component, OnInit } from "@angular/core";
import {
  StripeService,
  Elements,
  Element as StripeElement,
  ElementsOptions
} from "ngx-stripe";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-stripe-checkout",
  templateUrl: "./stripe-checkout.component.html",
  styleUrls: ["./stripe-checkout.component.scss"]
})
export class StripeCheckoutComponent implements OnInit {
  elements: Elements;
  card: StripeElement;

  // optional parameters
  elementsOptions: ElementsOptions = {
    locale: "es"
  };

  stripeTest: FormGroup;
  constructor(
    private http: HttpClient,
    private fb: FormBuilder,
    private stripeService: StripeService
  ) {}

  ngOnInit() {
    this.stripeTest = this.fb.group({
      name: ["", [Validators.required]]
    });
    this.stripeService.elements(this.elementsOptions).subscribe(elements => {
      this.elements = elements;
      // Only mount the element the first time
      if (!this.card) {
        this.card = this.elements.create("card", {
          style: {
            base: {
              iconColor: "#666EE8",
              color: "#31325F",
              lineHeight: "40px",
              fontWeight: 300,
              fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
              fontSize: "18px",
              "::placeholder": {
                color: "#CFD7E0"
              }
            }
          }
        });
        this.card.mount("#card-element");
      }
    });
  }

  
}
